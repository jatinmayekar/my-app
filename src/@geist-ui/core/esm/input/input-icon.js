import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';

var InputIconComponent = function InputIconComponent(_ref) {
  var icon = _ref.icon,
      clickable = _ref.clickable,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    className: _JSXStyle.dynamic([["4247656379", [clickable ? 'pointer' : 'default', clickable ? 'auto' : 'none']]]) + " " + "input-icon"
  }, icon, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4247656379",
    dynamic: [clickable ? 'pointer' : 'default', clickable ? 'auto' : 'none']
  }, ".input-icon.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:calc(var(--input-height) - 2px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:0;line-height:1;position:relative;cursor:".concat(clickable ? 'pointer' : 'default', ";pointer-events:").concat(clickable ? 'auto' : 'none', ";}.input-icon.__jsx-style-dynamic-selector svg{width:calc(var(--input-height) - 2px);height:calc(var(--input-height) - 2px);-webkit-transform:scale(0.44);-ms-transform:scale(0.44);transform:scale(0.44);}")));
};

InputIconComponent.displayName = 'GeistInputIcon';
var InputIcon = /*#__PURE__*/React.memo(InputIconComponent);
export default InputIcon;