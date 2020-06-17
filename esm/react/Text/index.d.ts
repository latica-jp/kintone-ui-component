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
    name?: string;
};
declare const _default: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLInputElement>>;
export default _default;
