import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {Row, Col, Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import Button from "@material-ui/core/Button";
import {DefaultTheme, PolarGreenTheme} from "../../../theme";
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import {Link} from "react-router-dom";

const useStyles = makeStyles((props) => ({
    root: {
        padding: 24,
        background: 'white',
        minWidth: 120,
        transition: '0.3s',
        border: `1px solid ${DefaultTheme.gray5}`
    },
    headline: {
        color: 'black',
        fontSize: 25,
        fontWeight: 500,
        '&:hover':{
            color: DefaultTheme.default6
        }
    },
    logo: {
        width: 100,
        height: 100,
        '& img': {
            border: `1px solid ${DefaultTheme.gray5}`,
            padding: 16,
            width: '100%',
            height: '100%',
        }
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        gridRowGap: 12,
    },
    row: {
        display: 'flex',
        justifyContent: "space-between",
    },
    applyBtn: {
        padding: '8px 24px',
        background: PolarGreenTheme.color5,
        color: 'white',
        fontWeight: 'bold',
        '&:hover': {
            background: PolarGreenTheme.color6,
        }
    },
    catalogs: {
        display: 'flex',
        gridColumnGap: 8,
    },
    catalogBtn: {
        border: `1px solid ${DefaultTheme.gray5}`,
        background: 'white',
        fontSize: 12,
        padding: 4,
        transition: '0.3s',
        '&:hover':{
            background: 'white',
            color: DefaultTheme.default6,
            border: `1px solid ${DefaultTheme.default6}`,
        }
    },
    icon:{
        display: "flex",
        alignItems: "center",
        gridColumnGap: 8
    }
}))

const RecruitmentCard = ({recruitment}) => {

    const classes = useStyles();
    const [t] = useTranslation('common');
    const [highLight, setHighLight] = useState(false);

    const handleHover = () => {
        setHighLight(!highLight);
    }

    return (
        <div className={classes.root} onMouseEnter={handleHover} onMouseLeave={handleHover} style={highLight === true ? {border: `1px solid ${DefaultTheme.default6}`} : null}>
            <Container fluid>
                <Row>
                    <Col sm={2}>
                        <div className={classes.logo}>
                            <img src={"https://preview.colorlib.com/theme/jobsco/assets/img/icon/1.svg"} alt={""}/>
                        </div>
                    </Col>
                    <Col sm={10}>
                        <div className={classes.info}>
                            <div className={classes.row}>
                                <Link to={"#"} style={highLight === true ? {color: DefaultTheme.default6} : null} className={classes.headline}>Automation Tester (1+ year)</Link>
                                <Button className={classes.applyBtn}>{t('recruitment-card.apply')}</Button>
                            </div>
                            <div className={classes.row}>
                                <p style={{color: PolarGreenTheme.color6}} className={classes.icon}><MonetizationOnOutlinedIcon/>500 - 2000$</p>
                                <p style={{color: DefaultTheme.default6, margin: '0 auto 0 16px'}} className={classes.icon}><TurnedInNotOutlinedIcon/>FRESHER</p>
                                <p style={{color: DefaultTheme.gray6}} className={classes.icon}><LocationOnOutlinedIcon/>Ho Chi Minh</p>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.catalogs}>
                                    <Button href={"#"} className={classes.catalogBtn + " " + "catalog-btn"} style={highLight === true ? {color: DefaultTheme.default6, border: `1px solid ${DefaultTheme.default6}`} : null}>Java</Button>
                                    <Button href={"#"} className={classes.catalogBtn + " " + "catalog-btn"} style={highLight === true ? {color: DefaultTheme.default6, border: `1px solid ${DefaultTheme.default6}`} : null}>C</Button>
                                    <Button href={"#"} className={classes.catalogBtn + " " + "catalog-btn"} style={highLight === true ? {color: DefaultTheme.default6, border: `1px solid ${DefaultTheme.default6}`} : null}>Python</Button>
                                </div>
                                <p style={{color: DefaultTheme.gray6}} className={classes.icon}><EventAvailableOutlinedIcon/>1h</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RecruitmentCard;
