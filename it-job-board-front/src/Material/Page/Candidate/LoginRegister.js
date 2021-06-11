import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {Col, Container, Form, Row} from "react-bootstrap";
import CustomFormGroup from "../../Component/Custom/CustomFormGroup";
import Button from "@material-ui/core/Button";
import {DefaultTheme} from "../../../theme";

const Login = () => {

    const useStyles = makeStyles((props) => ({
        root: {

        },
        headline: {
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center',
            paddingBottom: 32,
        },
        form: {
            display: 'flex',
            flexDirection: "column",
            gridRowGap: 12,
            '& button':{
                padding: 8,
                fontWeight: 'bold',
                background: DefaultTheme.default6,
                color: 'white',
                '&:hover':{
                    background: DefaultTheme.default7,
                }
            }
        },
        help: {
            paddingTop: 12,
            cursor: "pointer",
            transition: '0.3s',
            color: DefaultTheme.gray7,
            fontWeight: 'bold',
            '&:hover':{
                color: DefaultTheme.default6,
            }
        },
    }));

    const classes = useStyles();
    const [t, i18n] = useTranslation('common');

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const inputStyle = {
        padding: '8px 16px',
        width: '100%',
        border: `1px solid ${DefaultTheme.gray6}`,
        transition: '0.3s',
    }

    return (
        <div className={classes.root}>
            <p className={classes.headline}>{t('login-form.headline.login')}</p>
            <Form className={classes.form}>
                <CustomFormGroup placeholder={t('login-form.placeholder.email')} name={"keyword"} value={userInfo.email}
                                 onChangeValue={(e) => handleChange(e)} inputStyle={inputStyle} type={"email"}/>
                <CustomFormGroup placeholder={t('login-form.placeholder.password')} name={"keyword"} value={userInfo.password}
                                 onChangeValue={(e) => handleChange(e)} inputStyle={inputStyle} type={"password"}/>
                <Button variant={"contained"}>{t('login-form.button.login')}</Button>
            </Form>
            {/*<p className={classes.help}>{t('login-form.help.forgot-username-password')}</p>*/}
        </div>
    );
}

const Register = () => {

    const useStyles = makeStyles((props) => ({
        root: {
        },
        headline: {
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center',
            paddingBottom: 32,
        },
        form: {
            display: 'flex',
            flexDirection: "column",
            gridRowGap: 12,
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
        help: {
            paddingTop: 12,
            cursor: "pointer",
            transition: '0.3s',
            color: DefaultTheme.gray7,
            fontWeight: 'bold',
            '&:hover':{
                color: DefaultTheme.default6,
            }
        },
    }));

    const classes = useStyles();
    const [t, i18n] = useTranslation('common');

    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userInfo)
    }

    const inputStyle = {
        padding: '8px 16px',
        width: '100%',
        border: `1px solid ${DefaultTheme.gray6}`,
        transition: '0.3s',
    }

    return (
        <div className={classes.root}>
            <p className={classes.headline}>{t('login-form.headline.register')}</p>
            <Form className={classes.form} onSubmit={handleSubmit}>
                <CustomFormGroup placeholder={t('login-form.placeholder.username')} name={"username"} value={userInfo.username}
                                 onChangeValue={(e) => handleChange(e)} inputStyle={inputStyle} type={"text"}/>
                <CustomFormGroup placeholder={t('login-form.placeholder.email')} name={"email"} value={userInfo.email}
                                 onChangeValue={(e) => handleChange(e)} inputStyle={inputStyle} type={"email"}/>
                <CustomFormGroup placeholder={t('login-form.placeholder.password')} name={"password"} value={userInfo.password}
                                 onChangeValue={(e) => handleChange(e)} inputStyle={inputStyle} type={"password"}/>
                <CustomFormGroup placeholder={t('login-form.placeholder.confirm-password')} name={"confirmPassword"} value={userInfo.confirmPassword}
                                 onChangeValue={(e) => handleChange(e)} inputStyle={inputStyle} type={"password"}/>
                <Button variant={"contained"} type={"submit"}>{t('login-form.button.register')}</Button>
            </Form>
        </div>
    );
}

const LoginRegister = () => {

    const useStyles = makeStyles((props) => ({
        root: {
            margin: '50px auto',
        },
        content: {
            border: `1px solid ${DefaultTheme.gray5}`,
            padding: 50,
        },
        logo: {
            '& img': {
                width: '60%',
                height: '60%',
            }
        },
        change: {
            paddingTop: 50,
            textAlign: 'center',
            cursor: "pointer",
            transition: '0.3s',
            color: DefaultTheme.gray7,
            fontWeight: 'bold',
            '&:hover':{
                color: DefaultTheme.default6,
            }
        }
    }));

    const classes = useStyles();
    const [t, i18n] = useTranslation('common');
    const [isLogin, setIsLogin] = useState(true);

    const changeType = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div className={classes.root}>
            <Container fluid>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <div className={classes.content}>
                            <Row>
                                <Col sm={6}>
                                    <div className={classes.logo}>
                                        <img src={process.env.PUBLIC_URL + "/logo.png"}/>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className={classes.form}>
                                        {
                                            isLogin === true ? (
                                                <Login/>
                                            ) : (
                                                <Register/>
                                            )
                                        }
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                </Col>
                                <Col sm={6}>
                                    <p className={classes.change} onClick={changeType}>
                                        {
                                            isLogin === true ? (
                                                t('login-form.help.change-to-register')
                                            ) : t('login-form.help.change-to-login')
                                        }

                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginRegister;
