import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {Col, Container, Form, Nav, Row} from "react-bootstrap";
import {DefaultTheme, PolarGreenTheme} from "../../../theme";
import Button from "@material-ui/core/Button";
import {useTranslation} from "react-i18next";
import CustomFormGroup from "../Custom/CustomFormGroup";

const useStyles = makeStyles((props) => ({
    root: {
        padding: '50px 0',
    },
    headline: {
        fontSize: 30,
        marginBottom: 30,
        textAlign: 'center',
        color: DefaultTheme.gray8,
    },
    form: {
        marginBottom: 10,
        width: '100%',
        display: 'flex',
        margin: '0px auto',
        justifyContent: "space-between",
        '& input': {
            padding: '12px 20px',
            border: `1px solid ${DefaultTheme.gray6}`,
            transition: '0.3s',
            '&:focus':{
                border: `1px solid ${DefaultTheme.gray8}`,
            }
        },
        '& button': {
            background: DefaultTheme.default6,
            color: 'white',
            '&:hover':{
                background: DefaultTheme.default7,
            }
        }
    }
}))

const RecruitmentSearch = () => {

    const classes = useStyles();
    const [t] = useTranslation('common');

    const [search, setSearch] = useState({
        keyword: "",
        location: "",
        position: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setSearch(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSearch = () => {

    }

    return (
        <div className={classes.root}>
            <Container fluid>
                <Row>
                    <Col xl={1}></Col>
                    <Col xl={10}>
                        <Form className={classes.form} onSubmit={handleSearch}>
                            <CustomFormGroup placeholder={t('recruitment-search.placeholder.keyword')} name={"keyword"} value={search.keyword}
                                             onChangeValue={(e) => handleChange(e)}/>
                            <CustomFormGroup placeholder={t('recruitment-search.placeholder.location')} name={"location"} value={search.location}
                                             onChangeValue={(e) => handleChange(e)}/>
                            <CustomFormGroup placeholder={t('recruitment-search.placeholder.position')} name={"location"} value={search.position}
                                             onChangeValue={(e) => handleChange(e)}/>
                            <Button variant={"contained"} style={{width: '15%'}}>{t('recruitment-search.button')}</Button>
                        </Form>
                    </Col>
                    <Col xl={1}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default RecruitmentSearch;
