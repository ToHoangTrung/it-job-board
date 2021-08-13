import React from 'react';
import {makeStyles} from "@material-ui/core";
import {DayBreakBlueTheme, DefaultTheme, NeutralGrayTheme} from "../../../theme";
import {useSelector} from "react-redux";
import {getCurrentUser} from "../../Feature/AuthSlice";
import {Row, Col, Form} from "react-bootstrap";
import {AssetPath} from "../../../pathConfig";
import CustomFormGroup from "../../Component/Custom/CustomFormGroup";
import TopHeadLine from "../../Component/Recruiter/TopHeadLine";

const RecruiterDetailInfo = (props) => {

    const {
        recruiter
    } = props;

    const useStyles = makeStyles(({
        root: {
            display: "flex",
            flexDirection: "column",
            gridRowGap: 16,
            "& input": {
                padding: '8px 15px',
                width: '100%',
                border: `2px solid ${NeutralGrayTheme.color5}`,
                transition: '0.3s',
            }
        },
        label: {
            height: "100%",
            display: "flex",
            alignItems: "center"
        },
        input: {

        }
    }));

    const classes = useStyles();

    return (
        <Form className={classes.root}>
            <Row noGutters>
                <Col sm={2}><p className={classes.label}>Avatar</p></Col>
                <Col sm={8}>
                    <div className={classes.logo}>
                        <img src={AssetPath.userAvatarPath + recruiter.avatarUrl} alt={"recruiter avatar"}/>
                    </div>
                </Col>
            </Row>
            <Row noGutters>
                <Col sm={2}><p className={classes.label}>Name</p></Col>
                <Col sm={8}>
                    <div className={classes.input}>
                        <CustomFormGroup name={"name"} value={recruiter.name}/>
                    </div>
                </Col>
            </Row>
            <Row noGutters>
                <Col sm={2}><p className={classes.label}>Website</p></Col>
                <Col sm={8}>
                    <div className={classes.input}>
                        <CustomFormGroup name={"website"} value={recruiter.website}/>
                    </div>
                </Col>
            </Row>
            <Row noGutters>
                <Col sm={2}><p className={classes.label}>Facebook</p></Col>
                <Col sm={8}>
                    <div className={classes.input}>
                        <CustomFormGroup name={"facebook"} value={recruiter.facebook}/>
                    </div>
                </Col>
            </Row>
            <Row noGutters>
                <Col sm={2}><p className={classes.label}>Location</p></Col>
                <Col sm={8}>
                    <div className={classes.input}>
                        <CustomFormGroup name={"location"} value={recruiter.location}/>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}

const RecruiterProfilePage = () => {

    const useStyles = makeStyles(({
        root: {

        },
        topHeadline: {
            marginBottom: 16,
            "& p": {
                color: DayBreakBlueTheme.color7,
                fontSize: 30,
                fontWeight: "bold"
            }
        },
        content: {
        }
    }));

    const classes = useStyles();

    const currentUser = useSelector(getCurrentUser);

    return (
        <div className={classes.root}>
            <TopHeadLine headline={currentUser.recruiterInfo.name + " Profile"}/>
            <div className={classes.content}>
                <RecruiterDetailInfo recruiter={currentUser.recruiterInfo}/>
            </div>
        </div>
    );
};

export default RecruiterProfilePage;
