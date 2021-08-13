import React from 'react';
import {makeStyles} from "@material-ui/core";
import {Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {NeutralGrayTheme} from "../../../theme";
import {Link} from "react-router-dom";
import '../../Style/MainPage.scss'

const useStyles = makeStyles((props) => ({
    root: {
        background: NeutralGrayTheme.color10,
        padding: '16px 0',
        '& a': {
            fontSize: 14,
            color: NeutralGrayTheme.color7,
            '&:hover': {
                textDecoration: 'underline !important'
            }
        },

    },
    headline: {
        color: 'white !important',
        fontWeight: 'bold'
    },
    infoBlock: {
        display: 'flex',
        flexDirection: 'column',
        gridRowGap: 8,
        '& p': {
            fontSize: 14,
            color: NeutralGrayTheme.color7,
        }
    }
}))

const Footer = () => {

    const classes = useStyles();
    const [t] = useTranslation('common');

    return (
        <div className={classes.root}>
            <Container fluid>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <div className={"content-item"} style={{background: NeutralGrayTheme.color10, border: 'none'}}>
                            <Row>
                                <Col sm={3}>
                                    <div className={classes.infoBlock}>
                                        <p className={classes.headline}>About us</p>
                                        <Link to={"/"}>Home</Link>
                                        <Link to={"/"}>About Us</Link>
                                        <Link to={"/"}>Contact Us</Link>
                                        <Link to={"/"}>All Jobs</Link>
                                        <Link to={"/"}>FAQ</Link>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className={classes.infoBlock}>
                                        <p className={classes.headline}>Terms & Conditions</p>
                                        <Link to={"/"}>Privacy Policy</Link>
                                        <Link to={"/"}>Operating Regulation</Link>
                                        <Link to={"/"}>Complaint Handling</Link>
                                        <Link to={"/"}>Term & Conditions</Link>
                                        <Link to={"/"}>Press</Link>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className={classes.infoBlock}>
                                        <p>Copyright © CLOSURE IT JOB BOARD</p>
                                        <p>Tax code: 0312192258</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className={classes.infoBlock} style={{marginTop: 16}}>
                                        <p className={classes.headline}>Want to post a job? Contact us at:</p>
                                        <p>Ho Chi Minh: (+84) 123 456 789  -  Ha Noi: (+84) 123 456 789  -  Email: closure@gmail.com</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
