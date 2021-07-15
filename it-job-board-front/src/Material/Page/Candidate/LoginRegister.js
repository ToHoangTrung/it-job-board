import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import {DefaultTheme} from "../../../theme";
import '../../Style/MainPage.scss';
import {useForm} from "react-hook-form";
import {userGetInfo, userLogin, userRegister} from "../../Feature/AuthSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";


const Login = (props) => {

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
            },
            '& input': {
                padding: '8px 16px',
                width: '100%',
                border: `1px solid ${DefaultTheme.gray6}`,
                transition: '0.3s',
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
    const {t} = useTranslation('common');

    const handleLoginSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) onSubmit(values);
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div className={classes.root}>
            <p className={classes.headline}>{t('login-form.headline.login')}</p>
            <Form onSubmit={handleSubmit(handleLoginSubmit)} className={classes.form} >
                <input {...register("email", { required: true })}
                       placeholder={t('login-form.placeholder.email')} />
                <input {...register("password", { required: true })}
                       placeholder={t('login-form.placeholder.password')} type={"password"}/>
                <Button variant={"contained"} type={"submit"}>{t('login-form.button.login')}</Button>
            </Form>
            {/*<p className={classes.help}>{t('login-form.help.forgot-username-password')}</p>*/}
        </div>
    );
}

const Register = (props) => {

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
            },
            '& input': {
                padding: '8px 16px',
                width: '100%',
                border: `1px solid ${DefaultTheme.gray6}`,
                transition: '0.3s',
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
    const {t} = useTranslation('common');

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

    const handleRegisterSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) onSubmit(values);
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div className={classes.root}>
            <p className={classes.headline}>{t('login-form.headline.register')}</p>
            <Form  onSubmit={handleSubmit(handleRegisterSubmit)} className={classes.form} >
                <input {...register("username", { required: true })}
                       placeholder={t('login-form.placeholder.username')} />
                <input {...register("email", { required: true })}
                       placeholder={t('login-form.placeholder.email')} />
                <input {...register("password", { required: true })}
                       placeholder={t('login-form.placeholder.password')} type={"password"}/>
                <input {...register("confirmPassword", { required: true })}
                       placeholder={t('login-form.placeholder.confirm-password')} type={"password"}/>
                <Button variant={"contained"} type={"submit"}>{t('login-form.button.register')}</Button>
            </Form>
        </div>
    );
}

const LoginRegister = () => {

    const useStyles = makeStyles((props) => ({
        root: {
            marginBottom: 200,
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
    const {t} = useTranslation('common');
    const [isLogin, setIsLogin] = useState(true);
    const dispatch = useDispatch();
    const history = useHistory();

    const changeType = () => {
        setIsLogin(!isLogin);
    }

    const handleSubmit = async values => {
        try {
            const payload = {
                ...values,
                role: "ROLE_CAN"
            };
            if (!isLogin) {
                unwrapResult(await dispatch(userRegister(payload)));
            }
            unwrapResult(await dispatch(userLogin(payload)));
            unwrapResult(await dispatch(userGetInfo()));
            history.push("/")
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={"content-list"}>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <div className={"content-item"} style={{padding: 50}}>
                                <Row>
                                    <Col sm={6}>
                                        <div className={classes.logo}>
                                            <img src={process.env.PUBLIC_URL + "/logo.png"}/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        {
                                            isLogin === true ? (
                                                <Login onSubmit={handleSubmit}/>
                                            ) : (
                                                <Register onSubmit={handleSubmit}/>
                                            )
                                        }
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
                </div>
            </Container>
        </div>
    );
};

export default LoginRegister;
