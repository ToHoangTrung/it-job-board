import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../Component/Shared/Header';
import {makeStyles} from "@material-ui/core";
import Recruitment from "./Candidate/Recruitment";
import '../Style/MainPage.scss'
import RecruitmentDetail from "./Candidate/RecruitmentDetail";
import RecruiterDetail from "./Candidate/RecruiterDetail";

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
                        <Col xl={10} style={{padding: 0, paddingTop: 32}}>
                            <Route path="/jobs" component={Recruitment} exact/>
                            <Route path="/jobs/:recruitmentId" component={RecruitmentDetail}/>
                            <Route path="/companies/:recruiterId" component={RecruiterDetail}/>
                        </Col>
                        <Col xl={1}></Col>
                    </Row>
                </BrowserRouter>
            </Container>
        </div>
    );
};

export default MainPage;
