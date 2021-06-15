import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../Component/Candidate/Header';
import {makeStyles} from "@material-ui/core";
import Recruitment from "./Candidate/Recruitment";
import '../Style/MainPage.scss'
import RecruitmentDetail from "./Candidate/RecruitmentDetail";
import RecruiterDetail from "./Candidate/RecruiterDetail";
import LoginRegister from "./Candidate/LoginRegister";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 100
    },
    main: {
        background: '#FBFBFB'
    },
    top: {
        backgroundImage: `url(${process.env.PUBLIC_URL + "/background.png"})`,
        backgroundRepeat: "no-repeat",
    }
}));

const MainPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container fluid>
                <BrowserRouter>
                    <div className={"header"}>
                        <Row>
                            <Col>
                                <Header/>
                            </Col>
                        </Row>
                    </div>
                    <Row className={classes.main}>
                        <Col xl={1}></Col>
                        <Col xl={10}>
                            <div style={{margin: '24px auto'}}>
                                <Route path="/jobs" component={Recruitment} exact/>
                                <Route path="/jobs/:recruitmentId" component={RecruitmentDetail}/>
                                <Route path="/companies/:recruiterId" component={RecruiterDetail}/>
                                <Route path="/login" component={LoginRegister}/>
                            </div>
                        </Col>
                        <Col xl={1}></Col>
                    </Row>
                </BrowserRouter>
            </Container>
        </div>
    );
};

export default MainPage;
