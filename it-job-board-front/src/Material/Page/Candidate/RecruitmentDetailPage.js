import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Link, makeStyles} from "@material-ui/core";
import {Col, Container, Row} from "react-bootstrap";
import {DefaultTheme, PolarGreenTheme} from "../../../theme";
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import ReactHtmlParser from 'react-html-parser';
import '../../Style/MainPage.scss'
import {unwrapResult} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {fetchRecruitmentDetailById} from "../../Feature/RecruitmentSlice";
import EmojiTransportationOutlinedIcon from '@material-ui/icons/EmojiTransportationOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Button from "@material-ui/core/Button";

const description = "<p style=\"box-sizing: border-box; margin: 1em 0px; color: rgb(58, 58, 58); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">LG Electronics Vehicle ComponentSolutions Company focuses on eco-friendly automotive components. The VS Company produces high-quality&nbsp;In-Vehicle&nbsp;Infotainment (IVI) systems that deliver both information and entertainment on-the-go for many of the world&lsquo;s biggest automobile brands.<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">We, LG Electronics Development Center Vietnam (VS DCV), conduct core R&amp;D activities, and various product reliability tests in support of our vehicle component business.<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">As the&nbsp;<strong style=\"box-sizing: border-box; font-weight: 700;\">Leader of Software Development Part</strong>, your roles &amp; responsibilities will be as below:&nbsp;</p>\n" +
    "<ul style=\"box-sizing: border-box; margin: 1em 0px; padding: 0px 0px 0px 40px; color: rgb(58, 58, 58); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">\n" +
    "    <li style=\"box-sizing: border-box;\">Being responsible for project planning;</li>\n" +
    "    <li style=\"box-sizing: border-box;\">Lead &amp; manage project development and delivery to LGE VS Head Quarter &amp; OEM;</li>\n" +
    "    <li style=\"box-sizing: border-box;\">Support Team Leader for team building: recruitment, training, coaching &amp; mentoring members;</li>\n" +
    "    <li style=\"box-sizing: border-box;\">Support Team Leader in monitoring projects, Team members KPI and evaluation;</li>\n" +
    "    <li style=\"box-sizing: border-box;\">Make reports and communicate with local and head quarter management.</li>\n" +
    "</ul>"

const RecruitmentIntroduce = (props) => {

    const {
        recruitment,
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
            height: '100%',
            display: "flex",
            alignItems: "center",
            gridColumnGap: 8,
            flexGrow: 1,
            flexBasis: '50%',
        },
        recruiter: {
            color: 'black',
            fontWeight: 'bold',
            cursor: "pointer",
            transition: '0.3s',
            fontSize: 20,
            '&:hover':{
                color: DefaultTheme.default6,
            }
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
    const [t] = useTranslation('common');

    return (
        <div className={classes.root}>
            <Row noGutters>
                <Col sm={2}>
                    <div className={classes.logo}>
                        <img src={process.env.PUBLIC_URL + "/assets/user/avatar/" + recruitment.recruiter.avatarUrl} alt={""}/>
                    </div>
                </Col>
                <Col sm={8}>
                    <div className={classes.info}>
                        <p className={classes.headline}>{recruitment.headline}</p>
                        <div style={{display: 'flex'}}>
                            <Link to={"#"} className={classes.icon + " " + classes.recruiter}><EmojiTransportationOutlinedIcon/>{recruitment.recruiter.name}</Link>
                        </div>
                        <div style={{display: 'flex'}}>
                            <p className={classes.icon}><LocationOnOutlinedIcon/>{recruitment.location}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <p className={classes.icon}><QueryBuilderOutlinedIcon/>{t('recruitment-card.start-date')}: {recruitment.startDate}</p>
                            <p className={classes.icon}><QueryBuilderOutlinedIcon/>{t('recruitment-card.end-date')}: {recruitment.endDate}</p>
                        </div>
                        <div className={classes.catalogs}>
                            {
                                recruitment.subCatalogs.map((subCatalog, index) => (
                                    <Button href={"#"} key={index}>{subCatalog.name}</Button>
                                ))
                            }
                        </div>
                    </div>
                </Col>
                <Col sm={2}>
                    <div className={classes.event}>
                        <Button>{t('recruitment-card.apply')}</Button>
                        <Button>{t('recruitment-card.save')}</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const RecruitmentDescription = ({recruitment}) => {

    const useStyles = makeStyles((props) => ({
        root: {
        },
        description: {

        },
        headline: {
            fontSize: 30,
            fontWeight: 'bold'
        }
    }))

    const classes = useStyles();
    const [t] = useTranslation('common');

    return (
        <div className={classes.root}>
            <div className={classes.description}>
                <p className={classes.headline}>{t('recruitment-card.job-description')}</p>
                <div>{ ReactHtmlParser(description) }</div>
            </div>
            <div className={classes.description}>
                <p className={classes.headline}>{t('recruitment-card.requirement')}</p>
                <div>{ ReactHtmlParser(description) }</div>
            </div>
            <div className={classes.description}>
                <p className={classes.headline}>{t('recruitment-card.benefit')}</p>
                <div>{ ReactHtmlParser(description) }</div>
            </div>
        </div>
    )
}

const RecruitmentInformation = ({recruitment}) => {
    const useStyles = makeStyles((props) => ({
        root: {
        },
    }))

    const classes = useStyles();
    const [t] = useTranslation('common');

    return (
        <div className={classes.root}>
            <p className={classes.item}>{t('recruitment-card.information')}</p>
            <div className={classes.list}>
                <p></p>
            </div>
        </div>
    )
}

const RecruitmentDetailPage = ({match}) => {

    const useStyles = makeStyles((props) => ({
        root: {

        },
    }))

    const {recruitmentId} = match.params;

    const classes = useStyles();
    const [t] = useTranslation('common');
    const dispatch = useDispatch();

    const [recruitment, setRecruitment] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRecruitment = async () => {
            const result = unwrapResult(await dispatch(fetchRecruitmentDetailById(recruitmentId)));
            setRecruitment(result);
            setIsLoading(false);
        }
        fetchRecruitment();
    }, [recruitmentId])

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
                                            <RecruitmentIntroduce recruitment={recruitment}/>
                                        )
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <div className={"content-list"}>
                                <div className={"content-item"} style={{width: '98%'}}>
                                    <RecruitmentDescription/>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className={"content-list"}>
                                <div className={"content-item"}>
                                    <RecruitmentInformation/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default RecruitmentDetailPage;
