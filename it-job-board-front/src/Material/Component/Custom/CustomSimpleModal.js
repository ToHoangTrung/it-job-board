import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

const CustomSimpleModal = (props) => {

    const {
        heading,
        content,
        acceptBtnText,
        deniedBtnText,
        onDeniedValue,
        onAcceptValue,
        showHeader,
        showBody,
    } = props


    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    const handleCloseAccept = () => {
        handleClose();
        onAcceptValue();
    }

    const handleCloseDenied = () => {
        handleClose();
        onDeniedValue();
    }

    return (
        <Modal show={show} backdrop="static" keyboard={false} onHide={handleClose}>
            {
                showHeader && (
                    <Modal.Header>
                        <Modal.Title>{heading}</Modal.Title>
                    </Modal.Header>
                )
            }
            {
                showBody && (
                    <Modal.Body>
                        {content}
                    </Modal.Body>
                )
            }
            <Modal.Footer>
                <Button variant="danger" onClick={handleCloseAccept}>
                    {acceptBtnText}
                </Button>
                <Button variant="secondary" onClick={handleCloseDenied}>
                    {deniedBtnText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomSimpleModal;
