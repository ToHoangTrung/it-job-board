import React from 'react';
import {makeStyles} from "@material-ui/core";
import RecruitmentCard from "../../Component/Candidate/RecruitmentCard";

const useStyles = makeStyles((props) => ({
    root: {
        margin: '30px 0px'
    }
}))

const Recruitment = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <RecruitmentCard/>
        </div>
    );
};

export default Recruitment;
