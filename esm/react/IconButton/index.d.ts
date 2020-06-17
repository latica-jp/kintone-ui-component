import React from 'react';
import '../../css/IconButton.css';
declare type IconButtonProps = {
    type?: 'insert' | 'remove' | 'close' | 'file' | 'right' | 'left';
    htmlType?: 'submit' | 'reset' | 'button';
    size?: 'normal' | 'small';
    color?: 'gray' | 'blue' | 'red' | 'green' | 'transparent';
    isDisabled?: boolean;
    isVisible?: boolean;
    shape?: 'circle' | 'square';
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
};
declare const IconButton: ({ type, htmlType, size, color, isDisabled, isVisible, shape, onClick }: IconButtonProps) => JSX.Element | null;
export default IconButton;
