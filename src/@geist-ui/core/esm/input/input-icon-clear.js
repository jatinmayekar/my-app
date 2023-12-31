import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import useClasses from '../use-classes';

var InputIconClear = function InputIconClear(_ref) {
  var onClick = _ref.onClick,
      disabled = _ref.disabled,
      visible = _ref.visible;
  var theme = useTheme();
  var classes = useClasses('clear-icon', {
    visible: visible
  });

  var clickHandler = function clickHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    onClick && onClick(event);
  };

  return /*#__PURE__*/React.createElement("div", {
    onClick: clickHandler,
    className: _JSXStyle.dynamic([["1567030211", [disabled ? 'not-allowed' : 'pointer', theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]]]) + " " + (classes || "")
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: _JSXStyle.dynamic([["1567030211", [disabled ? 'not-allowed' : 'pointer', theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]]])
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18",
    className: _JSXStyle.dynamic([["1567030211", [disabled ? 'not-allowed' : 'pointer', theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]]])
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12",
    className: _JSXStyle.dynamic([["1567030211", [disabled ? 'not-allowed' : 'pointer', theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]]])
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1567030211",
    dynamic: [disabled ? 'not-allowed' : 'pointer', theme.palette.accents_3, disabled ? theme.palette.accents_3 : theme.palette.foreground]
  }, ".clear-icon.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:calc(var(--input-height) - 2px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:".concat(disabled ? 'not-allowed' : 'pointer', ";-webkit-transition:color 150ms ease 0s;transition:color 150ms ease 0s;margin:0;padding:0;color:").concat(theme.palette.accents_3, ";visibility:hidden;opacity:0;}.visible.__jsx-style-dynamic-selector{visibility:visible;opacity:1;}.clear-icon.__jsx-style-dynamic-selector:hover{color:").concat(disabled ? theme.palette.accents_3 : theme.palette.foreground, ";}svg.__jsx-style-dynamic-selector{color:currentColor;width:calc(var(--input-height) - 2px);height:calc(var(--input-height) - 2px);-webkit-transform:scale(0.44);-ms-transform:scale(0.44);transform:scale(0.44);}")));
};

var MemoInputIconClear = /*#__PURE__*/React.memo(InputIconClear);
export default MemoInputIconClear;