import React from 'react';
import {Modal, Row, Col, Button} from 'react-bootstrap';

export type BootstrapButtonVariant = 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-info'
    | 'outline-dark'
    | 'outline-light';

export interface TwoButtonDialogProps {
    show: boolean;
    onHide: () => void;
    title: string;
    message: string;
    firstButtonText: string;
    firstButtonVariant?: BootstrapButtonVariant;
    onFirstButtonClick: () => void;
    secondButtonText: string;
    secondButtonVariant?: BootstrapButtonVariant;
    onSecondButtonClick: () => void;
}

export function TwoButtonDialog(props: TwoButtonDialogProps) {

    return <Modal show={props.show} onHide={props.onHide} centered>
        <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.message}
        </Modal.Body>
        <Modal.Footer>
            <Row className="w-100">
                <Col md="auto">
                    <Button
                        onClick={props.onFirstButtonClick}
                        variant={props.firstButtonVariant}
                    >
                        {props.firstButtonText}
                    </Button>
                </Col>
                <Col/>
                <Col md="auto">
                    <Button
                        onClick={props.onSecondButtonClick}
                        variant={props.secondButtonVariant}
                    >
                        {props.secondButtonText}
                    </Button>
                </Col>
            </Row>
        </Modal.Footer>
    </Modal>
}