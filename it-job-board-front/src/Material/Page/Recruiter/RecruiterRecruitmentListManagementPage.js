import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {DayBreakBlueTheme, NeutralGrayTheme, PolarGreenTheme} from "../../../theme";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "../../Feature/AuthSlice";
import {Link} from "react-router-dom";
import InfoIcon from '@material-ui/icons/Info';
import '../../Style/MainPage.scss'
import TopHeadLine from "../../Component/Recruiter/TopHeadLine";
import {RecruiterRouter} from "../../../pathConfig";
import {unwrapResult} from "@reduxjs/toolkit";
import {fetchRecruitmentByCriteria} from "../../Feature/RecruitmentSlice";

const RecruitmentManagementHeader = () => {

    const useStyles = makeStyles(({
        root: {
            "& a": {
                borderRadius: 5,
                background: DayBreakBlueTheme.color6,
                color: "white",
                width: 200,
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                fontWeight: "bold",
                "&:hover": {
                    background: DayBreakBlueTheme.color7,
                }
            }
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to={RecruiterRouter.newRecruitment}>Create New Recruitment</Link>
        </div>
    )
}

const RecruitmentTable = (props) => {

    const useStyles = makeStyles(({
        root: {
            borderCollapse: "collapse",
            width: "100%",
            fontSize: 16,
            "& th": {
                border: `1px solid ${NeutralGrayTheme.color6}`,
                padding: 12,
                textAlign: "left",
                backgroundColor: DayBreakBlueTheme.color5,
                color: "white"
            },
            "& td": {
                border: `1px solid ${NeutralGrayTheme.color6}`,
                padding: 12
            },
            "& tr":{
                transition: "0.3s",
                "&:nth-child(2n + 1)": {
                    backgroundColor: DayBreakBlueTheme.color1,
                },
                "&:hover":{
                    background: DayBreakBlueTheme.color2
                }
            },
        },
        detailBtn: {
            "& a": {
                width: 100,
                display: "flex",
                alignItems: "center",
                color: "white",
                borderRadius: 5,
                background: PolarGreenTheme.color6,
                transition: "0.3s",
                "& p": {
                    margin: "0px auto"
                },
                "& svg": {
                    color: "white",
                    fontSize: 30,
                    textAlign: "center",
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    background: PolarGreenTheme.color8,
                },
                "&:hover": {
                    background: PolarGreenTheme.color7,
                }
            }
        }
    }));

    const classes = useStyles();

    const {
        recruitments
    } = props

    return (
        <table className={classes.root}>
            <thead>
                <th width={"35%"}>Headline</th>
                <th width={"15%"}>Start Date</th>
                <th width={"15%"}>End Date</th>
                <th width={"10%"}>Position</th>
                <th width={"15%"}>Candidate Applied</th>
                <th width={"10%"}>Action</th>
            </thead>
            <tbody>
                {
                    recruitments.map((recruitment, index) => (
                        <tr key={index}>
                            <td>{recruitment.headline}</td>
                            <td>{recruitment.startDate}</td>
                            <td>{recruitment.endDate}</td>
                            <td>{recruitment.position.enTranslate}</td>
                            <td>5</td>
                            <td className={classes.detailBtn}>
                                <Link to={RecruiterRouter.editRecruitment}><InfoIcon/><p>Detail</p></Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

const RecruiterRecruitmentListManagementPage = () => {

    const useStyles = makeStyles(({
        root: {

        },
        content: {
        }
    }));

    const classes = useStyles();
    const dispatch = useDispatch();

    const currentUser = useSelector(getCurrentUser);

    const [recruitments, setRecruitments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRecruitments = async () => {
            const data = unwrapResult(await dispatch(fetchRecruitmentByCriteria(`keyword=company: ${currentUser.recruiterInfo.id}&page=1`)));
            setRecruitments(data);
            setIsLoading(false);
        }
        fetchRecruitments();
    }, [])

    return (
        <div className={classes.root}>
            <TopHeadLine headline={currentUser.recruiterInfo.name + " Recruitment List"}/>
            <div className={"content-list"}>
                <RecruitmentManagementHeader/>
                {
                    !isLoading && (
                        <RecruitmentTable recruitments={recruitments}/>
                    )
                }
            </div>
        </div>
    );
};

export default RecruiterRecruitmentListManagementPage;
