import React from 'react';
import {TwoButtonDialog} from './TwoButtonDialog';

interface DeleteDialogProps {
    show: boolean;
    onHide: () => void;
    title: string;
    message: string;
    onDelete: () => void;
}

export function DeleteDialog(props: DeleteDialogProps) {
    return <TwoButtonDialog
        show={props.show}
        onHide={props.onHide}
        title={props.title}
        message={props.message}
        firstButtonText="Отмена"
        firstButtonVariant="secondary"
        onFirstButtonClick={props.onHide}
        secondButtonText="Удалить"
        secondButtonVariant="danger"
        onSecondButtonClick={() => {
            props.onDelete();
            props.onHide();
        }}
    />
}