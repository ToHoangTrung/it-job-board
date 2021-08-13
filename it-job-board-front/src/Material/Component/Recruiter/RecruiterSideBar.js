import React from 'react';
import {AssetPath, RecruiterRouter} from "../../../pathConfig";
import {makeStyles} from "@material-ui/core";
import {DayBreakBlueTheme, NeutralGrayTheme} from "../../../theme";
import {Row, Col} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const RecruiterSideBar = () => {

    const useStyles = makeStyles(({
        root: {
            position: "fixed",
            left: 0,
            height: "100%",
            width: 300,
            background: DayBreakBlueTheme.color6,
        },
        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 20,
            background: DayBreakBlueTheme.color6,
            gridColumnGap: 10,
            height: 174,
        },
            logo: {
                height: 100,
                width: 150,
                marginRight: "auto",
                "& img": {
                    width: "100%",
                    height: "100%",
                }
            },
            headline: {
                '& p': {
                    textAlign: "center",
                    color: "white",
                    fontSize: 30,
                    fontWeight: "bold",
                }
            },
        linkBlock: {
            border: `1px solid ${NeutralGrayTheme.color5}`,
            display: "flex",
            flexDirection: "column",
            padding: 8,
            alignItems: "center",
            transition: "0.3s",
            color: "white",
            cursor: "pointer",
            "& svg": {
                fontSize: 50,
                height: 50,
                textAlign: "center"
            },
            "& p": {
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
                textAlign: "center"
            },
            "&:hover": {
                background: DayBreakBlueTheme.color8,
                color: "white",
            }
        },
        activeLink: {
            "& p": {
                color: DayBreakBlueTheme.color7,
            },
            "& svg": {
                color: DayBreakBlueTheme.color7,
            },
            "& div": {
                background: "white",
            }
        }
    }));

    const classes = useStyles();

    return (
        <div className= {classes.root}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <img src={AssetPath.logoPath} alt={"website logo"}/>
                </div>
                <div className={classes.headline}>
                    <p>CLOSURE RECRUITER</p>
                </div>
            </div>
            <Row noGutters>
                <Col sm={6}>
                    <NavLink to={RecruiterRouter.profilePage} activeClassName={classes.activeLink}>
                        <div className={classes.linkBlock}>
                            <BusinessOutlinedIcon/>
                            <p>Company Profile</p>
                        </div>
                    </NavLink>
                </Col>
                <Col sm={6}>
                    <NavLink to={RecruiterRouter.recruitmentsPage} activeClassName={classes.activeLink}>
                        <div className={classes.linkBlock}>
                            <LibraryBooksOutlinedIcon/>
                            <p>Recruitment Management</p>
                        </div>
                    </NavLink>
                </Col>
                <Col sm={6}>
                    <Link to="/admin/dashboard/users">
                        <div className={classes.linkBlock}>
                            <SpeakerNotesOutlinedIcon/>
                            <p>Candidate Collection</p>
                        </div>
                    </Link>
                </Col>
                <Col sm={6}>
                    <Link to="/admin/dashboard/posts">
                        <div className={classes.linkBlock}>
                            <SettingsOutlinedIcon/>
                            <p>System Setting</p>
                        </div>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default RecruiterSideBar;
