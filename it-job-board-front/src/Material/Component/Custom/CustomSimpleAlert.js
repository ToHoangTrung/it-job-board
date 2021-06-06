import React from 'react';
import {Alert} from "react-bootstrap";
import {Divider} from "@material-ui/core";

const CustomSimpleAlert = ((props) => {

    const {
        variant,
        heading,
        content,
        onHandleClose
    } = props;

    return(
        <Alert variant={variant} dismissible onClose={onHandleClose}>
            <Alert.Heading>{heading}</Alert.Heading>
            <Divider light style={{margin: '8px 0px'}}/>
            {content}
        </Alert>
    );
});

export default CustomSimpleAlert;