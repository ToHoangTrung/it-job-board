import React from 'react';
import {Row, Col} from 'react-bootstrap';
import '../Style/ErrorScreen.scss';
import Image from '../Images/error.png'
import {useTranslation} from "react-i18next";

const ErrorScreen = () => {

    const [t] = useTranslation('common');

    return (
        <Row className="error-screen">
            <Col sm={3}>
                <img src={Image} alt="error" className="err-img"/>
            </Col>
            <Col className="text" sm={9}>
                <div>
                    <span>{t('errorScreen.unexpected')}</span>
                </div>
                <span>{t('errorScreen.please')} </span>
                <span style={{color: 'red'}}>{t('errorScreen.contact')}</span>
                <p/>
                <div>
                    <span>
                        {t('errorScreen.or')} <a href="/projects">{t('errorScreen.back')}</a>
                    </span>
                </div>
            </Col>
        </Row>
    )
}

export default ErrorScreen;
