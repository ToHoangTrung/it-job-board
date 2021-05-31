import React from 'react';
import {Row, Col, Nav, Navbar} from 'react-bootstrap';
import '../Style/Navigation.scss';
import {useTranslation} from "react-i18next";

const Navigation = () => {

    const [t] = useTranslation('common');

    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand/>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navigation">
                    <Row>
                        <Col xl={12}>
                            <Nav.Link href="/projects">
                                <p className="text-semi-bold first-element">
                                    {t('navigation.title')}
                                </p>
                            </Nav.Link>
                            <Nav.Link href="/projects/new">
                                <p className="text-semi-bold">
                                    {t('navigation.new')}
                                </p>
                            </Nav.Link>
                            <Nav.Link>{t('navigation.project')}</Nav.Link>
                            <Nav.Link>{t('navigation.customer')}</Nav.Link>
                            <Nav.Link>{t('navigation.supplier')}</Nav.Link>
                        </Col>
                    </Row>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
