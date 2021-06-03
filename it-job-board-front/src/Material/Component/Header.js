import React from 'react';
import {Col, Container, Form, Nav, Row} from 'react-bootstrap';
import {useTranslation, withTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core";
import {DefaultTheme} from '../../theme';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: 16,
        height: 60,
        borderBottom: `1px solid ${DefaultTheme.gray5}`,
        '& a':{
            fontWeight: "bold",
            color: DefaultTheme.default6,
            textAlign: 'center',
            '&:hover' :{
                color: DefaultTheme.default8,
            }
        }
    },
    logo: {
        display: 'flex',
        alignItems: "center",
        '& img':{
            height: 50,
            width: 50,
        }
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lan:{
        width: 70
    },
    btn:{
        height: '90%',
        color: DefaultTheme.default6,
        background: "white",
        width: 100,
        padding: '0 20px'
    }
}));

const Header = () => {

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();

    const handleChangeLanguage = (lan) => {
        console.log(i18n)
        i18n.changeLanguage(lan);
        localStorage.setItem('lan', lan);
    }

    return (
        <div className={classes.root}>
            <Container fluid style={{height: '100%'}}>
                <Row style={{alignItems: "stretch", height: '100%'}}>
                    <Col xl={1}></Col>
                    <Col xl={1} className={classes.logo}>
                        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"/>
                    </Col>
                    <Col xl={4} className={classes.nav}>
                        <Nav.Link href="/">
                            {t('header.home')}
                        </Nav.Link>
                        <Nav.Link href="/">
                            {t('header.it-job')}
                        </Nav.Link>
                        <Nav.Link href="/">
                            {t('header.it-company')}
                        </Nav.Link>
                        <Nav.Link href="/">
                            {t('header.blog')}
                        </Nav.Link>
                    </Col>
                    <Col xl={1}>

                    </Col>
                    <Col xl={4} className={classes.nav} style={{justifyContent: "flex-end"}}>
                        <div className={classes.nav + " " + classes.lan}>
                            <Nav.Link onClick={() => handleChangeLanguage("en")} style={i18n.language === "en" ? {color: DefaultTheme.default8} : null}>EN</Nav.Link>
                            <div style={{margin: '0px -5px'}}>|</div>
                            <Nav.Link onClick={() => handleChangeLanguage("vn")} style={i18n.language === "fr" ? {color: DefaultTheme.default8} : null}>VN</Nav.Link>
                        </div>
                        <Button href="/" className={classes.btn}>
                            {t('header.login')}
                        </Button>
                        <Button href="/" className={classes.btn}>
                            {t('header.recruiter')}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default withTranslation()(Header);
