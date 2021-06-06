import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../Component/Shared/Header';
import ErrorScreen from './ErrorScreen';
import {makeStyles} from "@material-ui/core";
import NewProject from "./NewProject";
import ProjectsList from "./ProjectsList";
import EditProject from "./EditProject";
import RecruitmentSearch from "../Component/Shared/RecruitmentSearch";
import Recruitment from "./Candidate/Recruitment";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 100
    },
    main: {
        background: '#FBFBFB'
    }
}));

const MainPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container fluid>
                <BrowserRouter>
                    <Row>
                        <Col>
                            <Header/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <RecruitmentSearch/>
                        </Col>
                    </Row>
                    <Row className={classes.main}>
                        <Col xl={1}></Col>
                        <Col xl={10} style={{padding: 0, paddingTop: 32}}>
                            <Route path="/jobs/" component={Recruitment}/>
                        </Col>
                        <Col xl={1}></Col>
                    </Row>
                </BrowserRouter>
            </Container>
        </div>
    );
};

export default MainPage;
