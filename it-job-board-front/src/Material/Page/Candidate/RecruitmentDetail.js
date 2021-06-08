import React from 'react';
import {useTranslation} from "react-i18next";
import {Link, makeStyles} from "@material-ui/core";
import {Button, Col, Container, Row} from "react-bootstrap";
import {DefaultTheme, PolarGreenTheme} from "../../../theme";
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import ReactHtmlParser from 'react-html-parser';

const description = "<p style=\"box-sizing: border-box; margin: 1em 0px; color: rgb(58, 58, 58); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">LG Electronics Vehicle ComponentSolutions Company focuses on eco-friendly automotive components. The VS Company produces high-quality&nbsp;In-Vehicle&nbsp;Infotainment (IVI) systems that deliver both information and entertainment on-the-go for many of the world&lsquo;s biggest automobile brands.<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">We, LG Electronics Development Center Vietnam (VS DCV), conduct core R&amp;D activities, and various product reliability tests in support of our vehicle component business.<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">As the&nbsp;<strong style=\"box-sizing: border-box; font-weight: 700;\">Leader of Software Development Part</strong>, your roles &amp; responsibilities will be as below:&nbsp;</p>\n" +
    "<ul style=\"box-sizing: border-box; margin: 1em 0px; padding: 0px 0px 0px 40px; color: rgb(58, 58, 58); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">\n" +
    "    <li style=\"box-sizing: border-box;\">Being responsible for project planning;</li>\n" +
    "    <li style=\"box-sizing: border-box;\">Lead &amp; manage project development and delivery to LGE VS Head Quarter &amp; OEM;</li>\n" +
    "    <li style=\"box-sizing: border-box;\">Support Team Leader for team building: recruitment, training, coaching &amp; mentoring members;</li>\n" +
    "    <li style=\"box-sizing: border-box;\">Support Team Leader in monitoring projects, Team members KPI and evaluation;</li>\n" +
    "    <li style=\"box-sizing: border-box;\">Make reports and communicate with local and head quarter management.</li>\n" +
    "</ul>"

const RecruitmentIntroduce = ({recruitment}) => {

    const useStyles = makeStyles((props) => ({
        root: {
            background: 'white',
            padding: 24,
            border: `1px solid ${DefaultTheme.gray5}`
        },
        logo: {
            width: '100%',
            height: '100%',
            '& img':{
                border: `1px solid ${DefaultTheme.gray5}`,
                padding: 16,
                height: '100%',
                width: '100%'
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
        recruiter: {
            color: 'black',
            fontWeight: 'bold',
            cursor: "pointer",
            '&:hover':{
                color: DefaultTheme.default6,
            }
        },
        time:{
            display: "flex",
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
    }))

    const classes = useStyles();
    const [t] = useTranslation('common');

    return (
        <div className={classes.root}>
            <Row noGutters>
                <Col sm={2}>
                    <div className={classes.logo}>
                        <img src={"https://preview.colorlib.com/theme/jobsco/assets/img/icon/1.svg"} alt={""}/>
                    </div>
                </Col>
                <Col sm={8}>
                    <div className={classes.info}>
                        <p className={classes.headline}>NHÂN VIÊN TELESALES (THU NHẬP TỪ 10-30 TRIỆU/THÁNG)</p>
                        <Link to={"#"} className={classes.recruiter}>CÔNG TY TNHH DƯỢC LIỆU QUỐC TẾ NGỌC NGÂN</Link>
                        <p>Địa chỉ làm việc : Tầng 2, Toà HH2 Bắc Hà, số 15 Tố Hữu, Trung Văn, Nam Từ Liêm, Hà Nội</p>
                        <p className={classes.time}><QueryBuilderOutlinedIcon/>Hạn nộp hồ sơ: 01/07/2021</p>
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
            background: 'white',
            padding: 24,
            border: `1px solid ${DefaultTheme.gray5}`
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
            background: 'white',
            padding: 24,
            border: `1px solid ${DefaultTheme.gray5}`
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

const RecruitmentDetail = ({match}) => {

    const useStyles = makeStyles((props) => ({
        root: {

        },
    }))

    const classes = useStyles();
    const [t] = useTranslation('common');

    return (
        <div className={classes.root}>
            <Container fluid>
                <Row>
                    <Col>
                        <div style={{marginBottom: 16}}>
                            <RecruitmentIntroduce/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <div style={{width: '98%'}}>
                            <RecruitmentDescription/>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div>
                            <RecruitmentInformation/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RecruitmentDetail;