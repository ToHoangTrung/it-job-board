import React, {useEffect, useState} from 'react';
import {Divider, makeStyles} from "@material-ui/core";
import {Row, Col, Container, Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import CustomFormGroup from "../../Component/Custom/CustomFormGroup";
import Button from "@material-ui/core/Button";
import {DefaultTheme, PolarGreenTheme} from "../../../theme";
import Pagination from '@material-ui/lab/Pagination';
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from 'react-router-dom'
import {fetchAllSubCatalog, selectAllSubCatalog} from "../../Feature/CatalogSlice";
import {
    fetchAllRecruitmentCity, fetchAllRecruitmentExperience,
    fetchAllRecruitmentPosition, fetchRecruitmentByCriteria,
    selectAllRecruitment, selectAllRecruitmentCity, selectAllRecruitmentExperience,
    selectAllRecruitmentPosition
} from "../../Feature/RecruitmentSlice";
import '../../Style/MainPage.scss'
import {unwrapResult} from "@reduxjs/toolkit";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import RecruitmentCard from "../../Component/Candidate/RecruitmentCard";

const resultFilter = [
    {
        label: "Ngày đăng",
        value: ""
    },
    {
        label: "Lượt xem",
        value: ""
    },
]

const RecruitmentSearch = (props) => {

    const {
        positions,
        cities,
        subCatalogs,
        experiences,
    } = props

    const useStyles = makeStyles((props) => ({
        root: {
        },
        form: {
            display: 'flex',
            flexDirection: "column",
            gridRowGap: 24,
            '& button':{
                padding: 12,
                fontWeight: 'bold',
                background: DefaultTheme.default6,
                color: 'white',
                '&:hover':{
                    background: DefaultTheme.default7,
                }
            },
            '& input': {
                padding: '8px 15px',
                width: '100%',
                border: `1px solid ${DefaultTheme.gray6}`,
                transition: '0.3s',
            }
        }
    }));

    const [t] = useTranslation('common');
    const classes = useStyles();
    const history = useHistory();
    const [search, setSearch] = useState({
        headline: "",
        city: "",
        position: "",
        category: "",
        experience: "",
    });

    const handleChange = (event, type) => {
        if (event.target != null) {
            const {name, value} = event.target;
            setSearch(prevState => ({
                ...prevState,
                [name]: value
            }));

        } else {
            setSearch(prevState => ({
                ...prevState,
                [type]: event
            }));
        }
    }

    const handleSearch =  (event) => {
        event.preventDefault();
        let keyword = "";
        Object.entries(search).forEach(([key, value]) => {
            if (value !== "") {
                if (value.value !== undefined) {
                    keyword += key + ":" + value.value + ",";
                } else {
                    keyword += key + ":" + value + ",";
                }
            }
        });
        keyword = keyword.slice(0, -1);
        localStorage.setItem("recruitmentSearchKeyword", keyword);
        history.push(`/jobs/search?keyword=${localStorage.getItem("recruitmentSearchKeyword")}&page=${localStorage.getItem("recruitmentSearchPage")}`)
    }

    return (
        <Form className={classes.root} onSubmit={handleSearch}>
            <p style={{fontSize: 20, paddingBottom: 20}}>Filter</p>
            <div className={classes.form}>
                <CustomFormGroup placeholder={t('recruitment-search.placeholder.keyword')} name={"headline"} value={search.headline}
                                 onChangeValue={(e) => handleChange(e)} />
                <CustomFormGroup placeholder={t('recruitment-search.placeholder.sub-catalog')} name={"category"} value={search.category}
                                 onChangeValue={(e) => handleChange(e, "category")}
                                 data={
                                     subCatalogs.map((row) => {
                                         return { value : row.id, label : row.name}
                                     })
                                 }
                                 type={"select"}/>
                <CustomFormGroup placeholder={t('recruitment-search.placeholder.position')} name={"position"} value={search.position}
                                 onChangeValue={(e) => handleChange(e, "position")} type={"select"}
                                 data={
                                     positions.map((row) => {
                                         return { value : row.name, label : row.enTranslate}
                                     })
                                 }/>
                <CustomFormGroup placeholder={t('recruitment-search.placeholder.experience')} name={"experience"} value={search.experience}
                                 onChangeValue={(e) => handleChange(e, "experience")} type={"select"}
                                 data={
                                     experiences.map((row) => {
                                         return { value : row.name, label : row.enTranslate}
                                     })
                                 }/>
                <CustomFormGroup placeholder={t('recruitment-search.placeholder.city')} name={"city"} value={search.city}
                                 onChangeValue={(e) => handleChange(e, "city")} type={"select"}
                                 data={
                                     cities.map((row) => {
                                         return { value : row.name, label : row.enTranslate}
                                     })
                                 }/>
                <Button type={"submit"} variant={"contained"}>{t('recruitment-search.button.search')}</Button>
            </div>
        </Form>
    )
}

const RecruitmentSort = () => {

    const useStyles = makeStyles((props) => ({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        inputGroup: {
            display: 'flex',
            flexDirection: "column",
            gridRowGap: 24,
            '& button':{
                padding: 12,
                fontWeight: 'bold',
                background: DefaultTheme.default6,
                color: 'white',
                '&:hover':{
                    background: DefaultTheme.default7,
                }
            }
        },
    }));

    const [t] = useTranslation('common');
    const classes = useStyles();
    const [sort, setSort] = useState("");

    const handleChange = (e) => {
    }

    const handleSort =  (event) => {

    }

    return (
        <Form className={classes.root} onSubmit={handleSort}>
            <p style={{fontSize: 20}}>Jobs Found</p>
            {/*<CustomFormGroup placeholder={t('recruitment-search.placeholder.experience')} name={"location"} value={sort}*/}
            {/*                 onChangeValue={(e) => handleChange(e)} data={} type={"select"} customStyle={{width: '20%'}}/>*/}
        </Form>
    )
}

const RecruitmentList = (props) => {

    const {
        recruitments
    } = props;

    return (
        <div>
            {
                recruitments.map((recruitment, index) => (
                    <div key={index}>
                        <RecruitmentCard recruitment={recruitment}/>
                        <Divider/>
                    </div>
                ))
            }
        </div>
    );
}

const RecruitmentPage = () => {

    const useStyles = makeStyles((props) => ({
        root: {
        },
    }));

    const keyword = window.location.search.slice(1);

    const classes = useStyles();
    const [t] = useTranslation('common');
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    const recruitments = useSelector(selectAllRecruitment);
    const subCatalogs = useSelector(selectAllSubCatalog);
    const positions = useSelector(selectAllRecruitmentPosition);
    const experiences = useSelector(selectAllRecruitmentExperience);
    const cities = useSelector(selectAllRecruitmentCity);


    useEffect(() => {
        const fetchPrevData = async () => {
            unwrapResult(await dispatch(fetchAllSubCatalog()));
            unwrapResult(await dispatch(fetchAllRecruitmentPosition()));
            unwrapResult(await dispatch(fetchAllRecruitmentCity()));
            unwrapResult(await dispatch(fetchAllRecruitmentExperience()));
        }
        fetchPrevData();
    },[]);

    useEffect(() => {
        const fetchRecruitment = async () => {
            unwrapResult(await dispatch(fetchRecruitmentByCriteria(keyword)));
            setIsLoading(false);
        }
        fetchRecruitment();
    }, [keyword])

    const handlePageChange = (event, value) => {
        localStorage.setItem("recruitmentSearchPage", value);
        history.push(`/jobs/search?keyword=${localStorage.getItem("recruitmentSearchKeyword")}&page=${localStorage.getItem("recruitmentSearchPage")}`)
    }

    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={"content-list"}>
                    <Row>
                        <Col sm={3}>
                            <div className={"content-list"}>
                                <div className={"content-item"} style={{width: '92%'}}>
                                    {
                                        !isLoading && (
                                            <RecruitmentSearch subCatalogs={subCatalogs} positions={positions}
                                                               experiences={experiences} cities={cities}/>
                                        )
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col sm={9}>
                            <div className={"content-list"}>
                                <div className={"content-item"}>
                                    <RecruitmentSort/>
                                </div>
                                <div className={"content-item"} style={{padding: 0}}>
                                    {
                                        !isLoading && (
                                            <RecruitmentList recruitments={recruitments}/>
                                        )
                                    }
                                </div>
                                <div className={"content-item"}>
                                    <Pagination count={10} color="primary" onChange={handlePageChange}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default RecruitmentPage;
