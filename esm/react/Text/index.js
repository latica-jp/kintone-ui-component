import React, { forwardRef } from 'react';
import '../../css/font.css';
import '../../css/Text.css';
var Text = function (_a, ref) {
    var value = _a.value, _b = _a.isDisabled, isDisabled = _b === void 0 ? false : _b, _c = _a.isVisible, isVisible = _c === void 0 ? true : _c, _d = _a.placeholder, placeholder = _d === void 0 ? '' : _d, onChange = _a.onChange, onClick = _a.onClick, _e = _a.name, name = _e === void 0 ? '' : _e;
    if (isVisible === false) {
        return null;
    }
    return (React.createElement("input", { type: "text", value: value, placeholder: placeholder, className: "kuc-input-text", onClick: onClick, onChange: onChange, disabled: isDisabled, name: name, ref: ref }));
};
export default forwardRef(Text);
