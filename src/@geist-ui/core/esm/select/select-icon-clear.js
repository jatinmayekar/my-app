import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';

var SelectIconClear = function SelectIconClear(_ref) {
  var onClick = _ref.onClick;
  var theme = useTheme();

  var clickHandler = function clickHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    onClick && onClick(event);
  };

  return /*#__PURE__*/React.createElement("div", {
    onClick: clickHandler,
    className: _JSXStyle.dynamic([["1984024521", [theme.palette.accents_3, theme.palette.foreground]]]) + " " + "clear-icon"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: _JSXStyle.dynamic([["1984024521", [theme.palette.accents_3, theme.palette.foreground]]])
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18",
    className: _JSXStyle.dynamic([["1984024521", [theme.palette.accents_3, theme.palette.foreground]]])
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12",
    className: _JSXStyle.dynamic([["1984024521", [theme.palette.accents_3, theme.palette.foreground]]])
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1984024521",
    dynamic: [theme.palette.accents_3, theme.palette.foreground]
  }, ".clear-icon.__jsx-style-dynamic-selector{padding:0 0 0 0.5em;margin:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;cursor:pointer;box-sizing:border-box;-webkit-transition:color 150ms ease 0s;transition:color 150ms ease 0s;color:".concat(theme.palette.accents_3, ";visibility:visible;opacity:1;}.clear-icon.__jsx-style-dynamic-selector:hover{color:").concat(theme.palette.foreground, ";}svg.__jsx-style-dynamic-selector{color:currentColor;width:1em;height:1em;}")));
};

var MemoSelectIconClear = /*#__PURE__*/React.memo(SelectIconClear);
export default MemoSelectIconClear;