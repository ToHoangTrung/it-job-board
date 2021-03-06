import React from "react";
import {makeStyles} from "@material-ui/core";
import '../../Style/CustomFormGroup.scss';
import Select from 'react-select';

const useStyles = makeStyles(props => ({
    formGroup: {
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
        checked,
    } = props

    const classes = useStyles();

    let customInput;

    if (type === "select") {
        customInput =
            <Select
                defaultValue={defaultValue}
                value={value}
                placeholder={placeholder}
                isSearchable
                name="color"
                options={data}
                onChange={onChangeValue}
            />
    } else if (type === "multi-select") {

        let selectedOptions = [];

        const handleChange = (options) => {
            if(options === null) selectedOptions = [];
            else{
                options.map(option => {
                    selectedOptions.push(option.value);
                });
            }
            onChangeValue(name, selectedOptions);
        }

        customInput =
            <div style={{width: '100%', zIndex: 1000}}>
                <Select
                    value={value}
                    placeholder={placeholder}
                    isMulti = {true}
                    options={data}
                    closeMenuOnSelect={false}
                    onChange={handleChange}/>
            </div>
    }
    else {
        customInput =
            <input
                  style={inputStyle}
                  checked={checked}
                  type={type || "text"}
                  name={name}
                  value={value || ""}
                  disabled={disabled || false}
                  placeholder={placeholder}
                  onChange={onChangeValue}
                  onFocus={onFocusValue}/>
    }
    return (
        <div className={classes.formGroup} style={customStyle}>
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
