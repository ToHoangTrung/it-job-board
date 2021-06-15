import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import RecruitmentCard from "../../Component/Candidate/RecruitmentCard";
import {Row, Col, Container, Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import CustomFormGroup from "../../Component/Custom/CustomFormGroup";
import Button from "@material-ui/core/Button";
import {DefaultTheme} from "../../../theme";
import Pagination from '@material-ui/lab/Pagination';
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router-dom'
import {fetchAllSubCatalog, selectAllSubCatalog} from "../../Feature/CatalogSlice";
import {
    fetchAllRecruitmentPosition,
    selectAllRecruitment,
    selectAllRecruitmentPosition
} from "../../Feature/RecruitmentSlice";
import '../../Style/MainPage.scss'

const salaryRange = [
    {
        label: "Tất cả mức lương",
        value: ""
    },
    {
        label: "Dưới 3 triệu",
        value: "salary<3000000"
    },
    {
        label: "3 - 5 triệu",
        value: "salary>3000000,salary<5000000"
    },
    {
        label: "5 - 7 triệu",
        value: "salary>5000000,salary<7000000"
    },
    {
        label: "7 - 10 triệu",
        value: "salary>7000000,salary<10000000"
    },
    {
        label: "10 - 12 triệu",
        value: "salary>10000000,salary<12000000"
    },
]
const experienceRange = [
    {
        label: "Tất cả kinh nghiệm",
        value: ""
    },
    {
        label: "Chưa có kinh nghiệm",
        value: "experience:0"
    },
    {
        label: "Dưới 1 năm",
        value: "experience<1"
    },
    {
        label: "1 năm",
        value: "experience:1"
    },
    {
        label: "2 năm",
        value: "experience:2"
    },
    {
        label: "3 năm",
        value: "experience:3"
    },
]
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

    const useStyles = makeStyles((props) => ({
        root: {
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
    const [search, setSearch] = useState({
        keyword: "",
        location: "",
        position: "",
        subCatalog: "",
        experience: "",
        salary: "",
        type: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setSearch(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSearch =  (event) => {

    }

    const inputStyle = {
        padding: '8px 15px',
        width: '100%',
        border: `1px solid ${DefaultTheme.gray6}`,
        transition: '0.3s',
    }

    return (
        <Form className={classes.root} onSubmit={handleSearch}>
            <p style={{fontSize: 20, paddingBottom: 20}}>Filter</p>
            <div className={classes.inputGroup}>
                <CustomFormGroup placeholder={t('recruitment-search.placeholder.keyword')} name={"keyword"} value={search.keyword}
                                 onChangeValue={(e) => handleChange(e)} inputStyle={inputStyle} />
                <CustomFormGroup placeholder={t('recruitment-search.placeholder.sub_catalog')} name={"keyword"} value={search.subCatalog}
                                 onChangeValue={(e) => handleChange(e)}
                                 data={
                                     props.subCatalogs.map((row) => {
                                         return { value : row.id, label : row.name}
                                     })
                                 }
                                 type={"select"}/>
                <CustomFormGroup placeholder={t('recruitment-search.placeholder.position')} name={"position"} value={search.position}
                                 onChangeValue={(e) => handleChange(e)} type={"select"}
                                 data={
                                     props.positions.map((row) => {
                                         return { value : row.name, label : row.enTranslate}
                                     })
                                 }/>
                <CustomFormGroup placeholder={t('recruitment-search.placeholder.salary')} name={"keyword"} value={search.keyword}
                                 onChangeValue={(e) => handleChange(e)} data={salaryRange} type={"select"}/>
                <CustomFormGroup placeholder={t('recruitment-search.placeholder.location')} name={"location"} value={search.position}
                                 onChangeValue={(e) => handleChange(e)} data={experienceRange} type={"select"}/>
                <CustomFormGroup placeholder={t('recruitment-search.placeholder.salary')} name={"keyword"} value={search.keyword}
                                 onChangeValue={(e) => handleChange(e)} data={salaryRange} type={"select"}/>
                <CustomFormGroup placeholder={t('recruitment-search.placeholder.experience')} name={"location"} value={search.position}
                                 onChangeValue={(e) => handleChange(e)} data={experienceRange} type={"select"}/>
                <Button variant={"contained"}>{t('recruitment-search.search')}</Button>
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
            <CustomFormGroup placeholder={t('recruitment-search.placeholder.experience')} name={"location"} value={sort}
                             onChangeValue={(e) => handleChange(e)} data={experienceRange} type={"select"} customStyle={{width: '20%'}}/>
        </Form>
    )
}

const Recruitment = () => {

    const useStyles = makeStyles((props) => ({
        root: {
        },
    }));

    const classes = useStyles();
    const [t] = useTranslation('common');
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    const subCatalogs = useSelector(selectAllSubCatalog);
    const positions = useSelector(selectAllRecruitmentPosition);
    const recruitments = useSelector(selectAllRecruitment);

    const handleSearch = (event) => {

    }

    useEffect(() => {
        dispatch(fetchAllSubCatalog());
        dispatch(fetchAllRecruitmentPosition());
        setIsLoading(false);
    },[]);


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
                                            <RecruitmentSearch subCatalogs={subCatalogs} positions={positions}/>
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
                                    <RecruitmentCard/>
                                </div>
                                <div className={"content-item"}>
                                    <Pagination count={10} color="primary" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Recruitment;
