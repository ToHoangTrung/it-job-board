import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import CandidateHeader from '../Component/Candidate/CandidateHeader';
import {makeStyles} from "@material-ui/core";
import RecruitmentPage from "./Candidate/RecruitmentPage";
import '../Style/MainPage.scss'
import RecruitmentDetailPage from "./Candidate/RecruitmentDetailPage";
import RecruiterDetailPage from "./Candidate/RecruiterDetailPage";
import LoginRegister from "./Candidate/LoginRegister";
import {getCurrentUser, userGetInfo} from "../Feature/AuthSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import RecruitmentApplyPage from "./Candidate/RecruitmentApplyPage";
import RecruitmentSavedPage from "./Candidate/RecruitmentSavedPage";
import Footer from "../Component/Candidate/Footer";
import RecruiterSideBar from "../Component/Recruiter/RecruiterSideBar";
import {RecruiterRouter} from "../../pathConfig";
import RecruiterHeader from "../Component/Recruiter/RecruiterHeader";
import RecruiterProfilePage from "./Recruiter/RecruiterProfilePage";
import RecruiterRecruitmentListManagementPage from "./Recruiter/RecruiterRecruitmentListManagementPage";
import RecruiterNewRecruitmentPage from "./Recruiter/RecruiterNewRecruitmentPage";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    main: {
        background: '#FBFBFB',
    },
    footer: {
        position: 'relative',
        left: 0,
        bottom: 0,
        width: '100%',
    }
}));

const MainPage = () => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserInfo = async () => {
            unwrapResult(await dispatch(userGetInfo()));
            setIsLoading(false);
        }
        fetchUserInfo();
    }, []);

    const UserGuestBlock = () => {
        return (
            <Router>
                <Row>
                    <Col>
                        <CandidateHeader/>
                    </Col>
                </Row>
                <Row className={classes.main}>
                    <Col xl={1}></Col>
                    <Col xl={10}>
                        <div style={{margin: '24px auto'}}>
                            <Route path="/jobs/search" component={RecruitmentPage} exact/>
                            <Route path="/jobs/detail/:recruitmentId" component={RecruitmentDetailPage}/>
                            <Route path="/jobs/apply/:recruitmentId" component={RecruitmentApplyPage}/>
                            <Route path="/companies/:recruiterId" component={RecruiterDetailPage}/>
                            <Route path="/saved_jobs" component={RecruitmentSavedPage}/>
                            <Route path="/login" component={LoginRegister}/>
                        </div>
                    </Col>
                    <Col xl={1}></Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.footer}>
                            <Footer/>
                        </div>
                    </Col>
                </Row>
            </Router>
        )
    }

    const RecruiterBlock = () => {
        return (
            <Router>
                <Row className={classes.main}>
                    <Col xl={12}>
                        <RecruiterSideBar/>
                        <div style={{marginLeft: 300, padding: 24, background: "white"}}>
                            <RecruiterHeader/>
                            <Route path={RecruiterRouter.profilePage} component={RecruiterProfilePage}/>
                            <Route path={RecruiterRouter.recruitmentsPage} component={RecruiterRecruitmentListManagementPage} exact/>
                            <Route path={RecruiterRouter.newRecruitment} component={RecruiterNewRecruitmentPage} exact/>
                            <Route path={RecruiterRouter.editRecruitment} component={RecruiterNewRecruitmentPage} exact/>
                        </div>
                    </Col>
                </Row>
            </Router>
        )
    }

    return (
        <div className={classes.root}>
            {
                !isLoading && (
                    <Container fluid>
                        {
                            currentUser.id !== undefined && currentUser.role.name === "ROLE_CAN" ? (
                                <UserGuestBlock/>
                            ) : currentUser.id !== undefined && currentUser.role.name === "ROLE_REC" ? (
                                <RecruiterBlock/>
                            ) : currentUser.id === undefined ? (
                                <UserGuestBlock/>
                            ) : null
                        }
                    </Container>
                )
            }
        </div>
    );
};

export default MainPage;
