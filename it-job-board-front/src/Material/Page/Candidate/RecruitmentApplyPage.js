import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {Container, Form, Row, Col} from "react-bootstrap";
import {getCurrentUser} from "../../Feature/AuthSlice";
import CustomFormGroup from "../../Component/Custom/CustomFormGroup";
import Button from "@material-ui/core/Button";
import {unwrapResult} from "@reduxjs/toolkit";
import {fetchRecruitmentDetailById} from "../../Feature/RecruitmentSlice";
import {DayBreakBlueTheme, DefaultTheme, NeutralGrayTheme} from "../../../theme";
import PropTypes from 'prop-types'

const RecruitmentApplyForm = (props) => {

    const {
        recruitment,
        user,
        onHandleApply,
    } = props;

    const useStyles = makeStyles((props) => ({
        root: {
        },
        form: {
            '& label':{
                fontSize: 16,
            },
            '& input':{
                padding: '8px 15px',
                width: '100%',
                border: `1px solid ${NeutralGrayTheme.color6}`,
                transition: '0.3s',
            },
            '& textarea': {
                height: 100,
                padding: 16,
                border: `1px solid ${NeutralGrayTheme.color6}`,
                width: '100%',
            }
        },
        applyBtn: {
            width: '100%',
            background: DayBreakBlueTheme.color6,
            color: 'white',
            transition: '0.3s',
            padding: 12,
            fontWeight: 'bold',
            '&:hover': {
                background: DayBreakBlueTheme.color7,
            }
        },
        formGroup: {
            display: 'flex',
            flexDirection: 'column',
            gridRowGap: 20,
        }
    }));

    const classes = useStyles();
    const [t] = useTranslation('common');

    const [applyInfo, setApplyInfo] = useState({
        id: "",
        name: "",
        phone: "",
        email: "",
        cvUrl: "",
        description: "",
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const applyUserInfo = async () => {
            if (user.id !== undefined) {
                let applyInfo = {
                    id: user.candidateInfo.id || "",
                    name: user.candidateInfo.firstName + " " + user.candidateInfo.lastName,
                    phone: user.phone,
                    email: user.email,
                    cvUrl: user.candidateInfo.cvUrl,
                    description: user.candidateInfo.description
                }
                setApplyInfo(applyInfo);
            }
            setIsLoading(false);
        }
        applyUserInfo();
    }, [user])

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value)
        setApplyInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleApply = (event) => {
        event.preventDefault();
        onHandleApply(applyInfo);
    }

    return (
        <Form className={classes.form} onSubmit={handleApply}>
            <h4 style={{paddingBottom: 24}}>{recruitment.headline} at {recruitment.recruiter.name}</h4>
            {
                !isLoading && (
                    <div className={classes.formGroup}>
                        <div>
                            <Row style={{alignItems: 'center'}} noGutters>
                                <Col sm={1}>
                                    <p>{t('recruitment-apply-page.label.user-name')}</p>
                                </Col>
                                <Col sm={11}>
                                    <CustomFormGroup placeholder={t('recruitment-apply-page.placeholder.name')} name={"name"} value={applyInfo.name || ""}
                                                     onChangeValue={(e) => handleChange(e)}/>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row style={{alignItems: 'center'}} noGutters>
                                <Col sm={1}>
                                    <p>{t('recruitment-apply-page.label.user-email')}</p>
                                </Col>
                                <Col sm={11}>
                                    <CustomFormGroup placeholder={t('recruitment-apply-page.placeholder.email')} name={"email"} value={applyInfo.email || ""}
                                                     onChangeValue={(e) => handleChange(e)}/>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row style={{alignItems: 'center'}} noGutters>
                                <Col sm={1}>
                                    <p>{t('recruitment-apply-page.label.user-phone')}</p>
                                </Col>
                                <Col sm={11}>
                                    <CustomFormGroup placeholder={t('recruitment-apply-page.placeholder.phone')} name={"phone"} value={applyInfo.phone || ""}
                                                     onChangeValue={(e) => handleChange(e)}/>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row style={{alignItems: 'center'}} noGutters>
                                <Col sm={1}>
                                    <p>{t('recruitment-apply-page.label.user-cv')}</p>
                                </Col>
                                <Col sm={11}>
                                    <div style={{gridRowGap: 20, display: 'flex', flexDirection: 'column'}}>
                                        <Row style={{alignItems: 'center'}} noGutters>
                                            <Col sm={1}>
                                                <CustomFormGroup onChangeValue={(e) => handleChange(e)} inputStyle={{top: 2, position: 'relative', width: 'auto'}}
                                                                 type={"radio"} checked={true}/>
                                            </Col>
                                            <Col sm={11}>
                                                <Link to={"/"}>{applyInfo.cvUrl}</Link>
                                            </Col>
                                        </Row>
                                        <Row style={{alignItems: 'center'}} noGutters>
                                            <Col sm={1}>
                                                <CustomFormGroup onChangeValue={(e) => handleChange(e)} inputStyle={{top: 2, position: 'relative', width: 'auto'}}
                                                                 type={"radio"}/>
                                            </Col>
                                            <Col sm={11}>
                                                <CustomFormGroup placeholder={t('recruitment-apply-page.placeholder.cv')} name={"cvUrl"}
                                                                 type={"file"}
                                                                 onChangeValue={(e) => handleChange(e)}/>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div style={{gridRowGap: 16, display: 'flex', flexDirection: 'column'}}>
                            <Row noGutters>
                                <Col>
                                    <p>{t('recruitment-apply-page.label.user-description')}</p>
                                </Col>
                            </Row>
                            <Row noGutters>
                                <Col>
                                    <textarea value={applyInfo.description || ""} name={"description"}
                                              onChange={(e) => handleChange(e)}/>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row noGutters>
                                <Button type={"submit"} className={classes.applyBtn}>{t('recruitment-apply-page.apply-btn')}</Button>
                            </Row>
                        </div>
                    </div>
                )
            }
        </Form>
    )
}

RecruitmentApplyForm.propTypes = {
    user: PropTypes.string
}

const RecruitmentApplyPage = ({match}) => {
    const useStyles = makeStyles((props) => ({
        root: {
        },
        applyForm: {

        }
    }));

    const {recruitmentId} = match.params;

    const classes = useStyles();
    const [t] = useTranslation('common');

    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [recruitment, setRecruitment] = useState({});

    const currentUser = useSelector(getCurrentUser);

    useEffect(() => {
        const fetchRecruitment = async () => {
            const result = unwrapResult(await dispatch(fetchRecruitmentDetailById(recruitmentId)));
            setRecruitment(result);
            setIsLoading(false);
        }
        fetchRecruitment();
    }, [recruitmentId])

    const handleApply = (applyInfo) => {
        console.log(applyInfo)
    }

    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={"content-list"}>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <div className={"content-item"}>
                                {
                                    !isLoading && (
                                        <RecruitmentApplyForm recruitment={recruitment} user={currentUser}
                                                              onHandleApply={(applyInfo) => handleApply(applyInfo)}/>
                                    )
                                }
                            </div>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default RecruitmentApplyPage;
