import React from 'react';
import {makeStyles} from "@material-ui/core";
import {DayBreakBlueTheme} from "../../../theme";

const TopHeadLine = (props) => {

    const {
        headline
    } = props

    const useStyles = makeStyles(({
        root: {
            margin: "14px 0px",
            "& p": {
                margin: "auto 0px",
                color: DayBreakBlueTheme.color7,
                fontSize: 30,
                fontWeight: "bold"
            }
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p>{headline}</p>
        </div>
    );
};

export default TopHeadLine;
