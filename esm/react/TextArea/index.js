import React, { useState, useEffect, forwardRef } from 'react';
import '../../css/font.css';
import '../../css/TextArea.css';
var TextArea = function (_a, ref) {
    var value = _a.value, placeholder = _a.placeholder, isVisible = _a.isVisible, isDisabled = _a.isDisabled, onChange = _a.onChange, onClick = _a.onClick, _b = _a.name, name = _b === void 0 ? '' : _b;
    var mixTextAreaWidth = 297;
    var mixtTextAreaHeight = 123;
    var _c = useState({ translateX: 0, translateY: 0, textAreaWidth: mixTextAreaWidth, textAreaHeight: mixtTextAreaHeight }), sizeConfig = _c[0], setSizeConfig = _c[1];
    var _d = useState(false), isResizing = _d[0], setIsResizing = _d[1];
    useEffect(function () {
        var currentX;
        var currentY;
        document.onmousemove = function (event) {
            if (isResizing && currentX && currentY) {
                var dx = event.clientX - currentX;
                if (sizeConfig.textAreaWidth + dx < mixTextAreaWidth) {
                    dx = 0;
                }
                var dy = event.clientY - currentY;
                if (sizeConfig.textAreaHeight + dy < mixtTextAreaHeight) {
                    dy = 0;
                }
                var config = {
                    translateX: sizeConfig.translateX + dx,
                    translateY: sizeConfig.translateY + dy,
                    textAreaWidth: sizeConfig.textAreaWidth + dx,
                    textAreaHeight: sizeConfig.textAreaHeight + dy
                };
                setSizeConfig(config);
            }
            currentX = event.clientX;
            currentY = event.clientY;
        };
        document.onmouseup = function () {
            if (isResizing) {
                setIsResizing(false);
                currentX = null;
                currentX = null;
            }
        };
    });
    if (isVisible === false) {
        return null;
    }
    return (React.createElement("div", { className: "kuc-textarea-outer" },
        React.createElement("textarea", { value: value, placeholder: placeholder, className: "kuc-textarea", onClick: onClick, onChange: onChange, disabled: isDisabled, style: { width: sizeConfig.textAreaWidth + 'px', height: sizeConfig.textAreaHeight + 'px' }, name: name, ref: ref }),
        React.createElement("div", { className: "kuc-textarea-resize", style: { transform: "translate(" + sizeConfig.translateX + "px, " + sizeConfig.translateY + "px)" }, role: "button", tabIndex: 0, onMouseDown: function () {
                setIsResizing(true);
            } })));
};
export default forwardRef(TextArea);
