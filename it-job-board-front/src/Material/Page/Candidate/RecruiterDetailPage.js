import React, {useEffect, useState} from 'react';
import {AppBar, Divider, makeStyles, Tab} from "@material-ui/core";
import {DefaultTheme, PolarGreenTheme} from "../../../theme";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "react-bootstrap";
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import Button from "@material-ui/core/Button";
import {TabContext, TabList, TabPanel} from "@material-ui/lab";
import ReactHtmlParser from "react-html-parser";
import '../../Style/MainPage.scss'
import {unwrapResult} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {fetchRecruiterById} from "../../Feature/RecruiterSlice";
import RecruitmentCard from "../../Component/Candidate/RecruitmentCard";

const RecruiterIntroduce = (props) => {

    const {
        recruiter,
    } = props

    const useStyles = makeStyles((props) => ({
        root: {
        },
        logo: {
            width: '100%',
            height: 200,
            border: `1px solid ${DefaultTheme.gray5}`,
            display: 'flex',
            alignItems: 'center',
            '& img':{
                padding: 16,
                maxHeight: '100%',
                maxWidth: '100%'
            }
        },
        info: {
            marginLeft: 20,
            display: 'flex',
            flexDirection: 'column',
            gridRowGap: 10,
        },
        headline: {
            fontSize: 30,
            color: DefaultTheme.default6,
            fontWeight: "bold"
        },
        icon:{
            display: "flex",
            flexBasis: '33%',
            alignItems: "center",
            gridColumnGap: 8,
        },
        event: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gridRowGap: 12,
            '& button': {
                fontWeight: 'bold',
                padding: '12px',
                background: 'white',
                color: 'white',
                border: `1px solid ${PolarGreenTheme.color6}`,
                '&:nth-child(1)': {
                    background: PolarGreenTheme.color6,
                    '&:hover':{
                        border: `1px solid ${PolarGreenTheme.color6}`,
                        background: PolarGreenTheme.color7,
                    }
                },
                '&:nth-child(2)': {
                    color: PolarGreenTheme.color6,
                    '&:hover':{
                        border: `1px solid ${PolarGreenTheme.color6}`,
                        color: PolarGreenTheme.color6,
                        background: PolarGreenTheme.color1,
                    }
                }
            }
        },
        catalogs: {
            display: 'flex',
            gridColumnGap: 8,
            '& a': {
                border: `1px solid ${DefaultTheme.gray5}`,
                background: 'white',
                fontSize: 12,
                padding: '8px 4px',
                '&:hover':{
                    background: 'white',
                    color: DefaultTheme.default6,
                    border: `1px solid ${DefaultTheme.default6}`,
                }
            }
        },
    }))

    const classes = useStyles();
    const [t, i18n] = useTranslation('common');

    return (
        <div className={classes.root}>
            <Row noGutters>
                <Col sm={2}>
                    <div className={classes.logo}>
                        <img src={process.env.PUBLIC_URL + "/assets/user/avatar/" + recruiter.avatarUrl} alt={""}/>
                    </div>
                </Col>
                <Col sm={8}>
                    <div className={classes.info}>
                        <p className={classes.headline}>{recruiter.name}</p>
                        <div style={{display: 'flex'}}>
                            <p className={classes.icon}><LocationOnOutlinedIcon/>Ho Chi Minh</p>
                            <p className={classes.icon}><EventAvailableOutlinedIcon/>
                                {
                                    i18n.language === "en" ? (
                                        <>
                                            {recruiter.workStartDate.enTranslate} - {recruiter.workEndDate.enTranslate}
                                        </>
                                    ) : (
                                        <>
                                            {recruiter.workStartDate.vnTranslate} - {recruiter.workEndDate.vnTranslate}
                                        </>
                                    )
                                }
                            </p>
                            <p className={classes.icon}><GroupOutlinedIcon/>{recruiter.employeeQuantityMin} - {recruiter.employeeQuantityMax}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <p className={classes.icon}><QueryBuilderOutlinedIcon/>
                                {
                                    i18n.language === "en" ? recruiter.overtime.enTranslate : recruiter.overtime.vnTranslate
                                }
                            </p>
                            <p className={classes.icon}><SettingsOutlinedIcon/>{recruiter.type.enTranslate}</p>
                        </div>
                        <div className={classes.catalogs}>
                            {
                                recruiter.subCatalogs.map((subCatalog, index) => (
                                    <Button href={"#"} key={index}>{subCatalog.name}</Button>
                                ))
                            }
                        </div>
                    </div>
                </Col>
                <Col sm={2}>
                    <div className={classes.event}>
                        <Button>{t('recruiter-card.reviewBtn')}</Button>
                        <Button>{t('recruiter-card.followBtn')}</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const RecruitmentList = (props) => {

    const {
        recruiter
    } = props;

    return (
        <div>
            {
                recruiter.recruitments.map((recruitment, index) => (
                    <div key={index}>
                        <RecruitmentCard recruitment={recruitment}/>
                        <Divider/>
                    </div>
                ))
            }
        </div>
    );
}

const RecruiterDescription = (props) => {

    const {
        recruiter
    } = props

    const useStyles = makeStyles((props) => ({
        root: {

        },
        description: {

        },
        headline: {
            fontSize: 24,
            fontWeight: 'bold',
            paddingBottom: 24,
        }
    }))

    const classes = useStyles();
    const [t] = useTranslation('common');

    return (
        <div className={classes.root}>
            <div className={classes.description}>
                <p className={classes.headline}>{t('recruiter-detail.overview')} {recruiter.name}</p>
                <div>{ ReactHtmlParser(recruiter.overview) }</div>
            </div>
        </div>
    )
}

const RecruiterDetailPage = ({match}) => {

    const {recruiterId} = match.params;

    const useStyles = makeStyles((props) => ({
        root: {

        },
    }))

    const classes = useStyles();
    const [t] = useTranslation('common');
    const dispatch = useDispatch();

    const [value, setViewValue] = useState('1');
    const [recruiter, setRecruiter] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const handleChangeView = (event, newValue) => {
        setViewValue(newValue);
    };

    useEffect(() => {
        const fetchRecruiter = async () => {
            const result = unwrapResult(await dispatch(fetchRecruiterById(recruiterId)));
            setRecruiter(result);
            setIsLoading(false);
        }
        fetchRecruiter();
    }, [recruiterId])

    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={"content-list"}>
                    <Row>
                        <Col>
                            <div className={"content-list"}>
                                <div className={"content-item"}>
                                    {
                                        !isLoading && (
                                            <RecruiterIntroduce recruiter={recruiter}/>
                                        )
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <div className={"content-list"}>
                                <div className={"content-item"} style={{width: '98%', padding: 0}}>
                                    <TabContext value={value}>
                                        <AppBar position="static" style={{background: DefaultTheme.default5, width: '100%'}}>
                                            <TabList onChange={handleChangeView} variant={"fullWidth"} TabIndicatorProps={{style:{background: DefaultTheme.default7, height: 5}}}>
                                                <Tab label={t('recruiter-card.jobTab')} value="1" style={{fontWeight: 'bold'}}/>
                                                <Tab label={t('recruiter-card.overviewTab')} value="2" style={{fontWeight: 'bold'}}/>
                                                <Tab label={t('recruiter-card.reviewTab')} value="3" style={{fontWeight: 'bold'}} />
                                            </TabList>
                                        </AppBar>
                                        <TabPanel value="1" style={{padding: 0}}>
                                            {
                                                !isLoading && (
                                                    <RecruitmentList recruiter={recruiter}/>
                                                )
                                            }
                                        </TabPanel>
                                        <TabPanel value="2">
                                            {
                                                !isLoading && (
                                                    <RecruiterDescription recruiter={recruiter}/>
                                                )
                                            }
                                        </TabPanel>
                                        <TabPanel value="3">

                                        </TabPanel>
                                    </TabContext>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default RecruiterDetailPage;
