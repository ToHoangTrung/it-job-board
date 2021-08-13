import React, {forwardRef, useState} from 'react';
import {Col, Container, Nav, Row, Dropdown} from 'react-bootstrap';
import {useTranslation, withTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core";
import {DefaultTheme, NeutralGrayTheme} from '../../../theme';
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser, userLogOut} from "../../Feature/AuthSlice";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from "react-router-dom";

const UserBlock = (props) => {

    const {
        user,
    } = props


    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100%',
            display: 'flex',
        },
        username: {
            display: 'flex',
            alignItems: 'center',
            cursor: "pointer",
            '& a': {
                fontWeight: 500,
                padding: 0,
            },
            '& img': {
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: `2px solid ${DefaultTheme.default6}`,
            },
            '&:hover': {
                '& a': {
                    color: DefaultTheme.default6,
                },
            }
        },
        dropdown: {
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            background: 'white',
            position: "absolute",
            top: '100%',
            right: 0,
            zIndex: 1000,
            '& a': {
                display: 'flex',
                fontSize: 14,
                alignItems: 'center',
                justifyContent: 'flex-start',
                border: `1px solid ${NeutralGrayTheme.color5}`,
                textAlign: 'left',
                padding: '12px 16px',
                cursor: 'pointer',
                '& svg': {
                    fontSize: 16,
                    marginRight: 8,
                }
            }
        }
    }));

    const {t} = useTranslation('common');
    const classes = useStyles();
    const dispatch = useDispatch();

    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        // dispatch(userLogOut);
        localStorage.setItem('access_token', '');
        localStorage.setItem('token_type', '');
        window.location.reload();
    }

    return (
        <div className={classes.root}>
            <div className={classes.username}>
                <Link to={"#"} onClick={() => setShowDropdown(!showDropdown)}>{user.username}<ArrowDropDownIcon/></Link>
                <img src={"https://lh3.googleusercontent.com/a-/AOh14GhGZd8WlI-YmQ4CXKhYGBHwITW5BLujOq1A0HErYQ=s96-c"}/>
            </div>
            {
                showDropdown && (
                    <div className={classes.dropdown} onMouseLeave={() => setShowDropdown(!showDropdown)}>
                        <Link to={"#"} onClick={handleLogout} className={classes.link}><ExitToAppIcon/>{t('header.logout')}</Link>
                        <Link to={"#"} className={classes.link}><PersonIcon/>{t('header.account')}</Link>
                        <Link to={"#"} className={classes.link}><WorkIcon/>{t('header.apply-job')}</Link>
                    </div>
                )
            }
        </div>
    )
}

const CandidateHeader = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            fontSize: 17,
            borderBottom: `1px solid ${NeutralGrayTheme.color5}`,
            display: 'flex',
            padding: '8px 0px',
            '& a':{
                fontWeight: 500,
                color: 'black',
                textAlign: 'center',
                transition: '0.3s',
                '&:hover' :{
                    color: DefaultTheme.default6,
                }
            }
        },
        logo: {
            height: '100%',
            '& img':{
                height: '100%',
                width: 50,

            },
        },
        nav: {
            display: 'flex',
            height: '100%',
            '& a': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 150,
                fontWeight: 500,
                '&:hover':{
                    color: DefaultTheme.default6,
                }
            },
        },
        action: {
            display: 'flex',
            gridColumnGap: 8,
            '& a':{
                border: `1px solid ${DefaultTheme.default6}`,
                background: "white",
                width: 150,
                padding: '0 20px',
                '&:nth-child(1)': {
                    fontWeight: 'bold',
                    background: DefaultTheme.default6,
                    color: 'white',
                    '&:hover':{
                        color: 'white',
                        background: DefaultTheme.default7,
                    }
                },
                '&:nth-child(2)': {
                    fontWeight: 'bold',
                    color: DefaultTheme.default6,
                    '&:hover':{
                        color: DefaultTheme.default6,
                        background: DefaultTheme.default1,
                    }
                }
            },
        }

    }));

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();
    const currentUser = useSelector(getCurrentUser)

    const handleChangeLanguage = (lan) => {
        console.log(i18n)
        i18n.changeLanguage(lan);
        localStorage.setItem('lan', lan);
    }

    return (
        <div className={classes.root}>
            <Container fluid style={{height: '100%'}}>
                <div style={{alignItems: "stretch", height: '100%'}}>
                    <Row style={{height: '100%'}}>
                        <Col xl={1}></Col>
                        <Col xl={1}>
                            <div className={classes.logo}>
                                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"/>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className={classes.nav}>
                                <Nav.Link href="/">
                                    {t('header.home')}
                                </Nav.Link>
                                <Nav.Link href="/">
                                    {t('header.it-job')}
                                </Nav.Link>
                                <Nav.Link href="/">
                                    {t('header.it-company')}
                                </Nav.Link>
                                <Nav.Link href="/">
                                    {t('header.blog')}
                                </Nav.Link>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className={classes.nav} style={{justifyContent: "flex-end"}}>
                                {
                                    currentUser.id !== undefined ? (
                                        <UserBlock user={currentUser}/>
                                    ) : (
                                        <div className={classes.action}>
                                            <Button href="/login">
                                                {t('header.login')}
                                            </Button>
                                            <Button href="/">
                                                {t('header.recruiter')}
                                            </Button>
                                        </div>
                                    )
                                }
                            </div>
                        </Col>
                        <Col xl={1}></Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default withTranslation()(CandidateHeader);
