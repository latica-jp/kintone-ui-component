import React from 'react';
import '../../css/font.css';
import '../../css/Text.css';

type TextProps = {
  value?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
  ref?: any;
}

const Text = ({value, isDisabled = false, isVisible = true, placeholder = '', onChange, onClick, ref}: TextProps) => {
  if (isVisible === false) {
    return null;
  }

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className="kuc-input-text"
      onClick={onClick}
      onChange={onChange}
      disabled={isDisabled}
      ref={ref}
    />
  );
};

export default Text;
