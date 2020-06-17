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
    ref?: any;
};
declare const TextArea: ({ value, placeholder, isVisible, isDisabled, onChange, onClick, ref }: TextAreaProps) => JSX.Element | null;
export default TextArea;
