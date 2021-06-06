import {Col, Form, InputGroup, Row} from "react-bootstrap";
import React from "react";
import {makeStyles} from "@material-ui/core";
import '../../Style/CustomFormGroup.scss';
import Select from "react-select";


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

const CustomSimpleFormGroup = ((props) => {


    const {
        type,
        name,
        value,
        placeholder,
        label,
        required,
        disabled,
        onChangeValue,
        defaultOption,
        defaultValue,
        defaultLabel,
        validMessage,
        invalidMessage,
        data,
        lbWidth,
        ipWidth,
        labelStyle,
        inputStyle,
        formControlStyle,
        grid,
    } = props

    const classes = useStyles();

    let customFormControl;

    if (type === "select") {

        customFormControl =
            <>
                <Form.Control as={"select"} custom
                              name={name}
                              value={value}
                              style={{background: `url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px`}}
                              onChange={onChangeValue}>
                    {
                        defaultOption && (
                            <option value={defaultValue}>{defaultLabel}</option>
                        )
                    }
                    {
                        data.map((item, index)=>
                            <option key={index} value={item.value}>{item.label}</option>
                        )
                    }
                </Form.Control>
            </>
    }
    else if (type === "multi-select") {

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

        customFormControl =
            <div style={{width: '100%'}}>
                <Select
                    value={value}
                    isMulti = {true}
                    options={data}
                    closeMenuOnSelect={false}
                    onChange={handleChange}/>
            </div>
    }
    else {
        customFormControl =
            <>
                <Form.Control required={required !== false}
                              type={type || "text"}
                              name={name}
                              style={{backgroundImage: 'none'}}
                              value={value || ""}
                              disabled={disabled || false}
                              placeholder={placeholder}
                              onChange={onChangeValue}/>
                {
                    invalidMessage && (
                        <Form.Control.Feedback type="invalid">
                            {invalidMessage}
                        </Form.Control.Feedback>
                    )
                }
            </>
    }
    return (
        <Form.Group as={grid || Row} className={classes.formGroup} noGutters>
            {
                label && (
                    <Form.Label column sm={lbWidth || "2"} className={required !== false ? "required" : ""} style={labelStyle}>{label}</Form.Label>
                )
            }
            <Col sm={ipWidth}>
                <InputGroup hasValidation style={inputStyle}>
                    {customFormControl}
                </InputGroup>
            </Col>
        </Form.Group>
    )
});

export default CustomSimpleFormGroup;
