import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import RecruitmentCard from "../../Component/Candidate/RecruitmentCard";
import {Row, Col, Container, Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((props) => ({
    root: {
        margin: '30px 0px'
    }
}))

const Recruitment = () => {

    const classes = useStyles();
    const [t] = useTranslation('common');

    const handleSearch = (event) => {

    }

    return (
        <div className={classes.root}>
            <Container fluid>
                <Row>
                    <Col sm={4}>

                    </Col>
                    <Col sm={8}>
                        <RecruitmentCard/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Recruitment;
