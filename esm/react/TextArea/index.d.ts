import React from 'react';
import '../../css/font.css';
import '../../css/TextArea.css';
declare type TextAreaProps = {
    value?: string;
    placeholder?: string;
    isVisible?: boolean;
    isDisabled?: boolean;
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name?: string;
};
declare const _default: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default _default;
