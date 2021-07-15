import React, {useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../Component/Candidate/Header';
import {makeStyles} from "@material-ui/core";
import RecruitmentPage from "./Candidate/RecruitmentPage";
import '../Style/MainPage.scss'
import RecruitmentDetailPage from "./Candidate/RecruitmentDetailPage";
import RecruiterDetailPage from "./Candidate/RecruiterDetailPage";
import LoginRegister from "./Candidate/LoginRegister";
import {userGetInfo} from "../Feature/AuthSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import RecruitmentApplyPage from "./Candidate/RecruitmentApplyPage";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 200
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

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserInfo = async () => {
            unwrapResult(await dispatch(userGetInfo()))
        }
        fetchUserInfo();
    }, []);

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
                                <Route path="/jobs/search" component={RecruitmentPage} exact/>
                                <Route path="/jobs/detail/:recruitmentId" component={RecruitmentDetailPage}/>
                                <Route path="/jobs/apply/:recruitmentId" component={RecruitmentApplyPage}/>
                                <Route path="/companies/:recruiterId" component={RecruiterDetailPage}/>
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
