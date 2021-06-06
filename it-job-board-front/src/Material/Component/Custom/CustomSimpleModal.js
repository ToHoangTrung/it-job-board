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
            <Modal.Header>
                <Modal.Title>{heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDenied}>
                    {deniedBtnText}
                </Button>
                <Button variant="danger" onClick={handleCloseAccept}>
                    {acceptBtnText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomSimpleModal;