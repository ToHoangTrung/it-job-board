import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import '../../Style/MainPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "../../Feature/AuthSlice";
import TopHeadLine from "../../Component/Recruiter/TopHeadLine";
import {DayBreakBlueTheme, DefaultTheme, NeutralGrayTheme} from "../../../theme";
import {Col, Form, Row} from "react-bootstrap";
import CustomFormGroup from "../../Component/Custom/CustomFormGroup";
import {
    createNewRecruitment,
    fetchAllRecruitmentPosition,
    selectAllRecruitmentPosition
} from "../../Feature/RecruitmentSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from "@material-ui/core/Button";
import CustomSimpleAlert from "../../Component/Custom/CustomSimpleAlert";
import {fetchAllSubCatalog, selectAllSubCatalog} from "../../Feature/CatalogSlice";
import {StatusCode} from "../../../statusConfig";
import {RecruiterRouter} from "../../../pathConfig";

const RecruiterNewRecruitmentPage = () => {

    const useStyles = makeStyles(({
        root: {
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gridGap: 16,
            "& input": {
                padding: '8px 15px',
                width: '100%',
                border: `2px solid ${NeutralGrayTheme.color5}`,
                transition: '0.3s',
                "&:focus": {
                    border: `2px solid ${DayBreakBlueTheme.color6}`,
                }
            },
            '& button':{
                padding: 12,
                fontWeight: 'bold',
                background: DefaultTheme.default6,
                color: 'white',
                '&:hover':{
                    background: DefaultTheme.default7,
                }
            },
        },
        label: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
            width: "fit-content",
            padding: '8px 0px',
        },
        required: {
            color: "red",
            position: "absolute",
            top: "30%",
            right: "-10%"
        }
    }));

    const currentUser = useSelector(getCurrentUser);

    const [recruitmentInfo, setRecruitmentInfo] = useState({
        headline: "",
        startDate: "",
        endDate: "",
        location: "",
        salaryMin: "",
        salaryMax: "",
        position: "",
        recruiter: {
            id: currentUser.recruiterInfo.id
        },
        requirementContentUrl: "",
        subCatalogs: []
    });
    const [showAlert, setShowAlert] = useState({
        heading: '',
        content: '',
        variant: '',
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    const positions = useSelector(selectAllRecruitmentPosition);
    const subCatalogs = useSelector(selectAllSubCatalog);

    useEffect(() => {
        const fetchPrevData = async () => {
            unwrapResult(await dispatch(fetchAllRecruitmentPosition()));
            unwrapResult(await dispatch(fetchAllSubCatalog()));
        }
        fetchPrevData();
    }, [])

    const handleChange = (event, type) => {
        if (event.target != null) {
            const {name, value} = event.target;
            setRecruitmentInfo(prevState => ({
                ...prevState,
                [name]: value
            }));

        } else {
            setRecruitmentInfo(prevState => ({
                ...prevState,
                [type]: event
            }));
        }
    }

    const handleChangeByNameAndValue = (name, value, type) => {
        if(type === "subCatalogs"){
            setRecruitmentInfo(prevState => ({
                ...prevState,
                subCatalogs: subCatalogs.filter((x) => value.includes(x.id))
            }));
        }
    }

    const handleValidate = () => {
        for(let key in recruitmentInfo) {
            if(recruitmentInfo[key] === "") {
                setShowAlert(prevState => ({
                    ...prevState,
                    variant: "danger",
                    heading: "Please fill out the required info",
                }));
                window.scrollTo(0, 0)
                return false;
            }
        }
        if (recruitmentInfo.endDate < recruitmentInfo.startDate) {
            setShowAlert(prevState => ({
                ...prevState,
                variant: "danger",
                heading: "End Date have to be after start date",
            }));
            window.scrollTo(0, 0)
            return false;
        }
        if (isNaN(recruitmentInfo.salaryMin) || isNaN(recruitmentInfo.salaryMax)) {
            setShowAlert(prevState => ({
                ...prevState,
                variant: "danger",
                heading: "Salary must contain only number"
            }));
            window.scrollTo(0, 0)
            return false;
        }
        if (parseInt(recruitmentInfo.salaryMin) > parseInt(recruitmentInfo.salaryMax)) {
            setShowAlert(prevState => ({
                ...prevState,
                variant: "danger",
                heading: "Salary max must higher than salary min"
            }));
            window.scrollTo(0, 0)
            return false;
        }
        return true;
    }

    const handleCreate =  async (event) => {
        event.preventDefault();
        if (handleValidate()) {
            recruitmentInfo.position.name = recruitmentInfo.position.value;
            const response = unwrapResult(await dispatch(createNewRecruitment(recruitmentInfo)));
            console.log(response)
            if (response.status === StatusCode.Accepted) {
                setShowAlert(prevState => ({
                    ...prevState,
                    variant: "success",
                    heading: response.data,
                    content: (
                        <a href={RecruiterRouter.recruitmentsPage} style={{fontSize: 16}}>Click here to return recruitment list management page</a>
                    )
                }));
                window.scrollTo(0, 0)
            } else {
                setShowAlert(prevState => ({
                    ...prevState,
                    variant: "danger",
                    heading: response.data,
                }));
                window.scrollTo(0, 0)
            }
        }
    }

    return (
        <div className={classes.root}>
            <TopHeadLine headline={"Create New Recruitment"}/>
            <div className={"content-list"}>
                {
                    showAlert.heading && (
                        <CustomSimpleAlert heading={showAlert.heading} variant={showAlert.variant} content={showAlert.content}/>
                    )
                }
                <Form className={classes.form} onSubmit={handleCreate}>
                    <Row noGutters>
                        <Col sm={2}>
                            <p className={classes.label}>Recruitment Headline<div className={classes.required}>*</div></p>
                        </Col>
                        <Col sm={10}>
                            <div className={classes.input}>
                                <CustomFormGroup placeholder={"Input your recruitment headline here"}
                                    name={"headline"} value={recruitmentInfo.headline} onChangeValue={(e) => handleChange(e)} />
                            </div>
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col sm={2}><p className={classes.label}>Recruitment Location<div className={classes.required}>*</div></p></Col>
                        <Col sm={10}>
                            <div className={classes.input}>
                                <CustomFormGroup  placeholder={"Input your recruitment location here"}
                                    name={"location"} value={recruitmentInfo.location} onChangeValue={(e) => handleChange(e)} />
                            </div>
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col sm={2}><p className={classes.label}>Salary Recruitment Min($)<div className={classes.required}>*</div></p></Col>
                        <Col sm={3}>
                            <div className={classes.input}>
                                <CustomFormGroup  placeholder={"Input your recruitment salary min here"}
                                                  name={"salaryMin"} value={recruitmentInfo.salaryMin} onChangeValue={(e) => handleChange(e)} />
                            </div>
                        </Col>
                        <Col sm={2}></Col>
                        <Col sm={2}><p className={classes.label}>Salary Recruitment Max($)<div className={classes.required}>*</div></p></Col>
                        <Col sm={3}>
                            <div className={classes.input}>
                                <CustomFormGroup  placeholder={"Input your recruitment salary max here"}
                                                  name={"salaryMax"} value={recruitmentInfo.salaryMax} onChangeValue={(e) => handleChange(e)} />
                            </div>
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col sm={2}><p className={classes.label}>Start Recruit Date<div className={classes.required}>*</div></p></Col>
                        <Col sm={3}>
                            <div className={classes.input}>
                                <CustomFormGroup  placeholder={"Select your recruitment start recruit date here"}
                                                  name={"startDate"} value={recruitmentInfo.startDate}
                                                  onChangeValue={(e) => handleChange(e)} type={"date"}/>
                            </div>
                        </Col>
                        <Col sm={2}></Col>
                        <Col sm={2}><p className={classes.label}>End Recruit Date<div className={classes.required}>*</div></p></Col>
                        <Col sm={3}>
                            <div className={classes.input}>
                                <CustomFormGroup  placeholder={"Select your recruitment end recruit date here"}
                                                  name={"endDate"} value={recruitmentInfo.endDate}
                                                  onChangeValue={(e) => handleChange(e)} type={"date"}/>
                            </div>
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col sm={2}><p className={classes.label}>Recruitment Position<div className={classes.required}>*</div></p></Col>
                        <Col sm={3}>
                            <CustomFormGroup placeholder={"Select your recruitment position here"} name={"position"} value={recruitmentInfo.position}
                                             onChangeValue={(e) => handleChange(e, "position")}
                                             data={
                                                 positions.map((row) => {
                                                     return { value : row.name, label : row.enTranslate}
                                                 })
                                             }
                                             type={"select"}/>
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col sm={2}><p className={classes.label}>Recruitment Tags<div className={classes.required}>*</div></p></Col>
                        <Col sm={10}>
                            <CustomFormGroup placeholder={"Select your recruitment skill list here"} name={"subCatalogs"}
                                             type={"multi-select"}
                                             data={
                                                 subCatalogs.map((row) => {
                                                     return { value : row.id, label : row.name}
                                                 })
                                             } onChangeValue={(name, value, type="subCatalogs") => handleChangeByNameAndValue(name, value, type)}/>
                        </Col>
                    </Row>
                    <Row noGutters style={{gridGap: 16}}>
                        <Col sm={12}><p className={classes.label}>Recruitment Requirement<div className={classes.required}>*</div></p></Col>
                        <Col sm={12}>
                            <CKEditor
                                editor={ ClassicEditor }
                                data={recruitmentInfo.requirementContentUrl}
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    handleChange(data, "requirementContentUrl")
                                } }
                            />
                        </Col>
                    </Row>
                    <Button type={"submit"} variant={"contained"}>Create New Recruitment</Button>
                </Form>
            </div>
        </div>
    );
};

export default RecruiterNewRecruitmentPage;
