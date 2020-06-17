import React, {forwardRef} from 'react';
import '../../css/font.css';
import '../../css/Text.css';

type TextProps = {
  value?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
  name?: string;
}

const Text = ({value, isDisabled = false, isVisible = true, placeholder = '', onChange, onClick, name = ''}: TextProps, ref: any) => {
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
      name={name}
      ref={ref}
    />
  );
};

export default forwardRef<HTMLInputElement, TextProps>(Text);
