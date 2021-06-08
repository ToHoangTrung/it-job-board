import React from 'react';
import {Col, Container, Nav, Row} from 'react-bootstrap';
import {useTranslation, withTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core";
import {DefaultTheme} from '../../../theme';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: 17,
        height: 90,
        borderBottom: `1px solid ${DefaultTheme.gray5}`,
        '& a':{
            fontWeight: 500,
            color: 'black',
            textAlign: 'center',
            transition: '0.3s',
            '&:hover' :{
                color: DefaultTheme.default6,
            }
        }
    },
    logo: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "flex-start",
        '& img':{
            height: 70,
            width: 70,
            marginRight: 20
        },
        '& a':{
            fontSize: 30,
            fontWeight: 'bold',
            color: DefaultTheme.default6,
            '&:hover':{
                color: DefaultTheme.default6,
            }
        }
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& a': {
            minWidth: 100,
        },
    },
    btn:{
        height: '70%',
        border: `1px solid ${DefaultTheme.default6}`,
        background: "white",
        width: 150,
        padding: '0 20px',
        '&:nth-child(1)': {
            fontWeight: 'bold',
            background: DefaultTheme.default6,
            color: 'white',
            '&:hover':{
                color: 'white',
                background: DefaultTheme.default7,
            }
        },
        '&:nth-child(2)': {
            fontWeight: 'bold',
            color: DefaultTheme.default6,
            '&:hover':{
                color: DefaultTheme.default6,
                background: DefaultTheme.default1,
            }
        }
    },
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
                    <Col xl={3} className={classes.logo}>
                        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"/>
                        <Nav.Link href="/">
                            IT CLOSURE JOB
                        </Nav.Link>
                    </Col>
                    <Col xl={4} className={classes.nav} style={{justifyContent: "space-evenly"}}>
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
                    <Col xl={3} className={classes.nav} style={{justifyContent: "flex-end", gridColumnGap: 10}}>
                        <Button href="/" className={classes.btn}>
                            {t('header.login')}
                        </Button>
                        <Button href="/" className={classes.btn}>
                            {t('header.recruiter')}
                        </Button>
                    </Col>
                    <Col xl={1}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default withTranslation()(Header);
