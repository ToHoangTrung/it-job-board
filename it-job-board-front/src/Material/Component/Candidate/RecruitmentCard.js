import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {Row, Col, Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import Button from "@material-ui/core/Button";
import {DefaultTheme, NeutralGrayTheme, PolarGreenTheme} from "../../../theme";
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import {Link} from "react-router-dom";

const useStyles = makeStyles((props) => ({
    root: {
        padding: 24,
        minWidth: 120,
        transition: '0.3s',
        border: `1px solid transparent`
    },
    headline: {
        color: 'black',
        fontSize: 25,
        fontWeight: 500,
        transition: '0.3s',
        '&:hover':{
            color: DefaultTheme.default6
        }
    },
    logo: {
        width: 100,
        height: 100,
        border: `1px solid ${DefaultTheme.gray5}`,
        display: 'flex',
        alignItems: 'center',
        '& img': {
            padding: 16,
            maxWidth: '100%',
            maxHeight: '100%',
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
            background: NeutralGrayTheme.gray5,
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

const RecruitmentCard = (props) => {

    const {
        recruitment,
        applyStatus,
    } = props;

    const classes = useStyles();
    const [t] = useTranslation('common');
    const [highLight, setHighLight] = useState(false);

    const handleHover = () => {
        setHighLight(!highLight);
    }

    return (
        <div className={classes.root} onMouseEnter={handleHover} onMouseLeave={handleHover} style={highLight === true ? {border: `1px solid ${DefaultTheme.default6}`} : null}>
            <Container fluid>
                {
                    <Row>
                        <Col sm={2}>
                            <div className={classes.logo}>
                                <img src={process.env.PUBLIC_URL + "/assets/user/avatar/" + recruitment.recruiter.avatarUrl} alt={""}/>
                            </div>
                        </Col>
                        <Col sm={10}>
                            <div className={classes.info}>
                                <div className={classes.row}>
                                    <Link to={"/jobs/detail/" + recruitment.id} style={highLight === true ? {color: DefaultTheme.default6} : null} className={classes.headline}>{recruitment.headline}</Link>
                                    <Button className={classes.applyBtn}>
                                        {
                                            applyStatus !== undefined ? (
                                                applyStatus
                                            ) : t('recruitment-card.apply')
                                        }
                                    </Button>
                                </div>
                                <div className={classes.row}>
                                    <p style={{color: PolarGreenTheme.color6}} className={classes.icon}><MonetizationOnOutlinedIcon/>${recruitment.salaryMin} - ${recruitment.salaryMax}</p>
                                    <p style={{color: DefaultTheme.default6, margin: '0 auto 0 16px', fontWeight: 'bold'}} className={classes.icon}><TurnedInNotOutlinedIcon/>{recruitment.position.enTranslate}</p>
                                    <p style={{color: DefaultTheme.gray6}} className={classes.icon}><LocationOnOutlinedIcon/>{recruitment.city.enTranslate}</p>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.catalogs}>
                                        {
                                            recruitment.subCatalogs.map((subCatalog, index) => (
                                                <Button
                                                    key={index}
                                                    href={"#"} className={classes.catalogBtn}
                                                    style={highLight === true ? {color: DefaultTheme.default6, border: `1px solid ${DefaultTheme.default6}`} : null}
                                                >{subCatalog.name}</Button>
                                            ))
                                        }
                                    </div>
                                    <p style={{color: DefaultTheme.gray6}} className={classes.icon}><EventAvailableOutlinedIcon/>1h</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                }
            </Container>
        </div>
    );
};

export default RecruitmentCard;
