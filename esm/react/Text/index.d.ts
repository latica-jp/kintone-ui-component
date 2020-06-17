import React from 'react';
import '../../css/font.css';
import '../../css/Text.css';
declare type TextProps = {
    value?: string;
    isDisabled?: boolean;
    isVisible?: boolean;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
    ref?: any;
};
declare const Text: ({ value, isDisabled, isVisible, placeholder, onChange, onClick, ref }: TextProps) => JSX.Element | null;
export default Text;
