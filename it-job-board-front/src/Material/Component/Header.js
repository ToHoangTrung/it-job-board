import React from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import '../Style/Header.scss';
import logo from '../Images/logo_elca.png';
// import {useTranslation, withTranslation} from "react-i18next/hooks";
import {useTranslation, withTranslation} from "react-i18next";

const Header = () => {

    const [t, i18n] = useTranslation('common');

    const handleChangeLanguage = (lan) => {
        console.log(i18n)
        i18n.changeLanguage(lan);
        localStorage.setItem('lan', lan);
    }

    return (
        <div className={"header"}>
            <Container fluid>
                <Row style={{alignItems: "flex-end"}}>
                    <Col xl={1}>
                    </Col>
                    <Col xl={1}>
                        <img className={"logo"} src={logo} alt="logo"/>
                    </Col>
                    <Col xl={6}>
                        <Nav.Link href="/" className={"name"}>
                            {t('header.name')}
                        </Nav.Link>
                    </Col>
                    <Col xl={1} style={{display: "flex", alignItems: "center"}}>
                        <Nav.Link onClick={() => handleChangeLanguage("en")} style={i18n.language === "en" ? {color: '#1890ff'} : null}>EN</Nav.Link>
                        <div style={{margin: '0px -5px'}}>|</div>
                        <Nav.Link onClick={() => handleChangeLanguage("fr")} style={i18n.language === "fr" ? {color: '#1890ff'} : null}>FR</Nav.Link>
                    </Col>
                    <Col xl={2} style={{display: 'flex', justifyContent: 'center'}}>
                        <Nav.Link>{t('header.help')}</Nav.Link>
                        <Nav.Link>{t('header.logout')}</Nav.Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default withTranslation()(Header);
