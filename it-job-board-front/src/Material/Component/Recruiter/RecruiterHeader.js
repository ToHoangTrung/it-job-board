import React from 'react';
import {Divider, makeStyles} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getCurrentUser} from "../../Feature/AuthSlice";
import {AssetPath} from "../../../pathConfig";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import {Link} from "react-router-dom";
import {DayBreakBlueTheme, DefaultTheme, NeutralGrayTheme} from "../../../theme";
import Badge from "@material-ui/core/Badge";

const RecruiterHeader = () => {

    const useStyle = makeStyles(({
        root: {
            width: "100%",
            paddingBottom: 24,
            borderBottom: `1px solid ${NeutralGrayTheme.color6}`
        },
        headerItem: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%"
        },
        logo: {
            cursor: "pointer",
            justifyContent: "flex-start",
            width: 50,
            height: 50,
            border: `1px solid ${DefaultTheme.gray5}`,
            '& img': {
                padding: 8,
                maxWidth: '100%',
                maxHeight: '100%',
            },
            "& p": {
                marginLeft: 12,
                fontSize: 20,
                fontWeight: "bold",
                color: DayBreakBlueTheme.color6,
                transition: "0.3s",
                "&:hover": {
                    color: DayBreakBlueTheme.color7,
                }
            },
        },
        notification: {
            cursor: "pointer",
            "& svg": {
                color: NeutralGrayTheme.color10,
                fontSize: 30,
                transition: "0.3s"
            },
            "&:hover": {
                "& svg": {
                    color: DayBreakBlueTheme.color7
                },
            }
        },
        logout: {
            cursor: "pointer",
            "& svg": {
                color: NeutralGrayTheme.color10,
                fontSize: 30,
                transition: "0.3s",
            },
            "& a": {
                marginRight: 12,
                fontSize: 16,
                fontWeight: "bold",
                transition: "0.3s",
            },
            "&:hover": {
                "& svg": {
                    color: DayBreakBlueTheme.color6,
                },
                "& a": {
                    color: DayBreakBlueTheme.color6,
                }
            }
        }
    }));

    const currentUser = useSelector(getCurrentUser);

    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Row noGutters>
                <Col sm={6}>
                    <div className={classes.headerItem + " " + classes.logo}>
                        <img
                            src={AssetPath.userAvatarPath + currentUser.recruiterInfo.avatarUrl} alt={"company logo"}/>
                        <p>{currentUser.username}</p>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className={classes.headerItem} style={{justifyContent: "flex-end"}}>
                        <div className={classes.headerItem + " " + classes.notification} style={{marginRight: 40}}>
                            <Badge badgeContent={4} color="primary">
                                <NotificationsNoneOutlinedIcon/>
                            </Badge>
                        </div>
                        <div className={classes.headerItem + " " + classes.logout}>
                            <Link to="/logout">Logout</Link>
                            <ExitToAppOutlinedIcon/>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default RecruiterHeader;
