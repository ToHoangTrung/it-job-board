import React from "react";
import {makeStyles} from "@material-ui/core";
import '../../Style/CustomFormGroup.scss';


const useStyles = makeStyles(props => ({
    formGroup: {
        margin: 0,
        padding: 0,
        height: 30,
        breakAfter: 'always',
        '& input': {
            height: 30,
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
        },
        '& select':{
            height: 30,
            fontSize: 14,
            paddingTop: 0,
            paddingBottom: 0,
        },
        '& label': {
            padding: 0,
            height: 30,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
        },
    },
}));

const CustomFormGroup = ((props) => {

    const {
        type,
        name,
        value,
        placeholder,
        label,
        required,
        disabled,
        onChangeValue,
        onFocusValue,
        defaultOption,
        defaultValue,
        defaultLabel,
        validMessage,
        invalidMessage,
        data,
        customStyle,
        labelStyle,
        inputStyle,
    } = props

    const classes = useStyles();

    let customInput;

    if (type === "select") {

    }
    else {
        customInput =
            <input
                  style={inputStyle}
                  type={type || "text"}
                  name={name}
                  value={value || ""}
                  disabled={disabled || false}
                  placeholder={placeholder}
                  onChange={onChangeValue}
                  onFocus={onFocusValue}/>
    }
    return (
        <div className={customStyle}>
             {
                 label && (
                     <label style={labelStyle}>{label}</label>
                 )
             }
            {customInput}
        </div>
    )
});

export default CustomFormGroup;
