import {makeStyles} from "@material-ui/core";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const UnLoginNotification = (props) => {

    const useStyles = makeStyles((props) => ({
        root: {
        },
        notification: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gridRowGap: 30,
        },
        logo: {
            width: 300,
            height: 300,
            display: 'flex',
            alignItems: 'center',
            '& img': {
                maxWidth: '100%',
                maxHeight: '100%',
            }
        },
    }));

    const {
        content
    } = props

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={"content-list"}>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <div className={"content-item"}>
                                <div className={classes.notification}>
                                    <div className={classes.logo}>
                                        <img src={process.env.PUBLIC_URL + "/logo.png"}/>
                                    </div>
                                    <div className={classes.content}>
                                        {content}
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default UnLoginNotification;
