import {AppBar, Divider, makeStyles, Tab} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getCurrentUser} from "../../Feature/AuthSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {fetchAllApplyOrFavoriteRecruitmentOfCandidate, selectAllRecruitment} from "../../Feature/RecruitmentSlice";
import {Col, Container, Row} from "react-bootstrap";
import {DefaultTheme, DustRed, NeutralGrayTheme, PolarGreenTheme} from "../../../theme";
import {TabContext, TabList, TabPanel} from "@material-ui/lab";
import RecruitmentCard from "../../Component/Candidate/RecruitmentCard";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import UnLoginNotification from "../../Component/Candidate/UnLoginNotification";
import CustomSimpleModal from "../../Component/Custom/CustomSimpleModal";
import {removeCurrentUserFavoriteRecruitment} from "../../Feature/CandidateSlice";

const RecruitmentApplyList = (props) => {

    const useStyles = makeStyles((props) => ({
        root: {
        },
        applyForm: {

        },
        saveJob: {
            padding: 16,
            fontSize: 16,
            border: `1px solid ${NeutralGrayTheme.color6}`
        },
        deleteIcon: {
            display: 'flex',
            height: '100%',
            justifyContent: "center",
            alignItems: "center",
            '& svg': {
                fontSize: 30,
                cursor: 'pointer',
                transition: '0.3s',
                color: DustRed.color5,
                '&:hover': {
                    color: DustRed.color7,
                }
            }
        },
    }));

    const classes = useStyles();
    const [t, i18n] = useTranslation('common');

    const {
        savedRecruitments,
    } = props;

    return (
        <div className={classes.root}>
            {
                savedRecruitments.map((savedRecruitment, index) => (
                    <div key={index}>
                        <Row noGutters>
                            <Col>
                                <RecruitmentCard
                                    applyStatus={i18n.language === "en" ? savedRecruitment.status.enTranslate : savedRecruitment.status.vnTranslate}
                                    recruitment={savedRecruitment.recruitment}/>
                            </Col>
                        </Row>
                        <Divider light/>
                    </div>
                ))
            }
        </div>
    );
}

const RecruitmentFavoriteList = (props) => {

    const useStyles = makeStyles((props) => ({
        root: {
        },
        applyForm: {

        },
        saveJob: {
            padding: 16,
            fontSize: 16,
            border: `1px solid ${NeutralGrayTheme.color6}`
        },
        deleteIcon: {
            display: 'flex',
            height: '100%',
            justifyContent: "center",
            alignItems: "center",
            '& svg': {
                fontSize: 30,
                cursor: 'pointer',
                transition: '0.3s',
                color: DustRed.color5,
                '&:hover': {
                    color: DustRed.color7,
                }
            }
        },
    }));

    const classes = useStyles();
    const [t] = useTranslation('common');

    const {
        savedRecruitments,
        onRemoveFavorite
    } = props;

    return (
        <div className={classes.root}>
            {
                savedRecruitments.map((savedRecruitment, index) => (
                    <div key={index}>
                        <Row noGutters>
                            <Col sm={1}>
                                <div className={classes.deleteIcon}>
                                    <HighlightOffIcon onClick={() => onRemoveFavorite(savedRecruitment.id)}/>
                                </div>
                            </Col>
                            <Col sm={11}>
                                <RecruitmentCard recruitment={savedRecruitment.recruitment}/>
                            </Col>
                        </Row>
                        <Divider light/>
                    </div>
                ))
            }
        </div>
    );
}

const RecruitmentSavedPage = () => {

    const useStyles = makeStyles((props) => ({
        root: {
        },
        unLogin: {
            fontSize: 24,
            '& span': {
                margin: '0px 4px'
            },
            '& a': {
                transition: '0.3s',
                "&:hover": {
                    textDecoration: 'underline !important'
                }
            }
        }
    }));

    const classes = useStyles();
    const [t] = useTranslation('common');

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [value, setViewValue] = useState('1');
    const [showModal, setShowModal] = useState({
        open: false,
        heading: '',
        content: '',
        deniedBtnText: '',
        acceptBtnText: '',
        handleDenied: null,
        handleAccept: null,
        showHeader: true,
        showBody: false,
    });
    const [refresh, setRefresh] = useState(false);
    const savedRecruitments = useSelector(selectAllRecruitment);

    const currentUser = useSelector(getCurrentUser);

    useEffect(() => {
        const fetchRecruitments = async () => {
            unwrapResult(await dispatch(fetchAllApplyOrFavoriteRecruitmentOfCandidate()));
            setIsLoading(false);
        }
        fetchRecruitments();
    }, [refresh])

    const handleChangeView = (event, newValue) => {
        setViewValue(newValue);
    };

    const handleRemoveFavorite = (recruitmentId) => {
        setShowModal(prevState1 => ({
            ...prevState1,
            open: true,
            heading: t('saved-recruitment-page.remove-favorite-recruitment.headline'),
            acceptBtnText: t('saved-recruitment-page.remove-favorite-recruitment.accept'),
            deniedBtnText: t('saved-recruitment-page.remove-favorite-recruitment.cancel'),
            handleAccept: async () => {
                setShowModal(prevState2 => ({...prevState2, open: false}))
                unwrapResult(await dispatch(removeCurrentUserFavoriteRecruitment(recruitmentId)));
                setRefresh(!refresh);
            },
            handleDenied: () => {
                setShowModal(prevState3 => ({...prevState3, open: false}))
            }
        }));
    }

    const DisplayNewModal = () => {
        if(showModal.open) {
            return (
                <CustomSimpleModal heading={showModal.heading} content={showModal.content}
                                   showHeader={showModal.showHeader} showBody={showModal.showBody}
                                   deniedBtnText={showModal.deniedBtnText} acceptBtnText={showModal.acceptBtnText}
                                   onAcceptValue={showModal.handleAccept} onDeniedValue={showModal.handleDenied}/>
            )
        }else{
            return null;
        }
    }

    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={"content-list"}>
                    <DisplayNewModal/>
                    {
                        currentUser.id === undefined ? (
                            <Row noGutters>
                                <Col>
                                    <UnLoginNotification content={(
                                        <p className={classes.unLogin}>
                                            {t('un-login-notification.saved-recruitment-page')}
                                            <span>.</span>
                                            <Link to={"/login"}>{t('un-login-notification.login-redirect')}</Link>
                                        </p>
                                    )}/>
                                </Col>
                            </Row>
                        ) : (
                            <Row>
                                <Col sm={1}></Col>
                                <Col sm={10}>
                                    <div className={"content-item"} style={{padding: 0}}>
                                        <TabContext value={value}>
                                            <AppBar position="static" style={{background: DefaultTheme.default5, width: '100%'}}>
                                                <TabList onChange={handleChangeView} variant={"fullWidth"} TabIndicatorProps={{style:{background: DefaultTheme.default7, height: 5}}}>
                                                    <Tab label={t('saved-recruitment-page.tab.apply')} value="1" style={{fontWeight: 'bold'}}/>
                                                    <Tab label={t('saved-recruitment-page.tab.favorite')} value="2" style={{fontWeight: 'bold'}}/>
                                                </TabList>
                                            </AppBar>
                                            <TabPanel value="1" style={{padding: 0, paddingTop: 40}}>
                                                {
                                                    !isLoading && (
                                                        <RecruitmentApplyList savedRecruitments={
                                                            savedRecruitments.filter(item => item.type.name === "APPLY")
                                                        }/>
                                                    )
                                                }
                                            </TabPanel>
                                            <TabPanel value="2" style={{padding: 0, paddingTop: 40}}>
                                                {
                                                    !isLoading && (
                                                        <RecruitmentFavoriteList savedRecruitments={
                                                            savedRecruitments.filter(item => item.type.name === "FAVORITE")
                                                        } onRemoveFavorite={(id) => handleRemoveFavorite(id)}/>
                                                    )
                                                }
                                            </TabPanel>
                                        </TabContext>
                                    </div>
                                </Col>
                                <Col sm={1}></Col>
                            </Row>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default RecruitmentSavedPage;
