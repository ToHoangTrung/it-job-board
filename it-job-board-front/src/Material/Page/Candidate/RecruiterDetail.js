import React, {useState} from 'react';
import {AppBar, makeStyles, Tab} from "@material-ui/core";
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

const description = "<p style=\"box-sizing: border-box; margin: 1em 0px; color: rgb(58, 58, 58); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">LG Electronics Vehicle ComponentSolutions Company focuses on eco-friendly automotive components. The VS Company produces high-quality&nbsp;In-Vehicle&nbsp;Infotainment (IVI) systems that deliver both information and entertainment on-the-go for many of the world&lsquo;s biggest automobile brands.<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">We, LG Electronics Development Center Vietnam (VS DCV), conduct core R&amp;D activities, and various product reliability tests in support of our vehicle component business.<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">As the&nbsp;<strong style=\"box-sizing: border-box; font-weight: 700;\">Leader of Software Development Part</strong>, your roles &amp; responsibilities will be as below:&nbsp;</p>\n" +
    "<ul style=\"box-sizing: border-box; margin: 1em 0px; padding: 0px 0px 0px 40px; color: rgb(58, 58, 58); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">\n" +
    "    <li style=\"box-sizing: border-box;\">Being responsible for project planning;</li>\n" +
    "    <li style=\"box-sizing: border-box;\">Lead &amp; manage project development and delivery to LGE VS Head Quarter &amp; OEM;</li>\n" +
    "    <li style=\"box-sizing: border-box;\">Support Team Leader for team building: recruitment, training, coaching &amp; mentoring members;</li>\n" +
    "    <li style=\"box-sizing: border-box;\">Support Team Leader in monitoring projects, Team members KPI and evaluation;</li>\n" +
    "    <li style=\"box-sizing: border-box;\">Make reports and communicate with local and head quarter management.</li>\n" +
    "</ul>"

const RecruiterIntroduce = ({recruiter}) => {

    const useStyles = makeStyles((props) => ({
        root: {
        },
        logo: {
            width: '100%',
            height: '100%',
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
            gridRowGap: 12
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
    const [t] = useTranslation('common');

    return (
        <div className={classes.root}>
            <Row noGutters>
                <Col sm={2}>
                    <div className={classes.logo}>
                        <img src={"https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM3d3REE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--80a5e94da84295f7b4d0feae6f2e6cb58eb1e369/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--623b1a923c4c6ecbacda77c459f93960558db010/lg-development-center-vietnam-logo.png"} alt={""}/>
                    </div>
                </Col>
                <Col sm={8}>
                    <div className={classes.info}>
                        <p className={classes.headline}>LG Vehicle Component Solutions Development Center Vietnam (LG VS DCV)</p>
                        <div style={{display: 'flex', width: '70%'}}>
                            <p className={classes.icon}><LocationOnOutlinedIcon/>Ha Noi, Da Nang</p>
                            <p className={classes.icon}><EventAvailableOutlinedIcon/>Product</p>
                            <p className={classes.icon}><GroupOutlinedIcon/>300 - 500</p>
                        </div>
                        <div style={{display: 'flex', width: '70%'}}>
                            <p className={classes.icon}><QueryBuilderOutlinedIcon/>Extra salary for OT</p>
                            <p className={classes.icon}><SettingsOutlinedIcon/>Product</p>
                        </div>
                        <div className={classes.catalogs}>
                            <Button href={"#"}>Java</Button>
                            <Button href={"#"}>C</Button>
                            <Button href={"#"}>Python</Button>
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

const RecruiterDescription = ({recruiter}) => {

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

const RecruiterDetail = ({match}) => {

    const useStyles = makeStyles((props) => ({
        root: {

        },
    }))

    const classes = useStyles();
    const [t] = useTranslation('common');

    const [value, setViewValue] = useState('1');

    const handleChangeView = (event, newValue) => {
        setViewValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={"content-list"}>
                    <Row>
                        <Col>
                            <div className={"content-list"}>
                                <div className={"content-item"}>
                                    <RecruiterIntroduce/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <div className={"content-list"}>
                                <div className={"content-item"} style={{width: '98%'}}>
                                    <TabContext value={value}>
                                        <AppBar position="static" style={{background: DefaultTheme.default5, width: '100%'}}>
                                            <TabList onChange={handleChangeView} variant={"fullWidth"} TabIndicatorProps={{style:{background: DefaultTheme.default7, height: 5}}}>
                                                <Tab label={t('recruiter-card.jobTab')} value="1" style={{fontWeight: 'bold'}}/>
                                                <Tab label={t('recruiter-card.overviewTab')} value="2" style={{fontWeight: 'bold'}}/>
                                                <Tab label={t('recruiter-card.reviewTab')} value="3" style={{fontWeight: 'bold'}} />
                                            </TabList>
                                        </AppBar>
                                        <TabPanel value="1">

                                        </TabPanel>
                                        <TabPanel value="2">
                                            <RecruiterDescription/>
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

export default RecruiterDetail;
