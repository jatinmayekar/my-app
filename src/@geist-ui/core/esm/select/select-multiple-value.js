import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import Grid from '../grid';
import SelectClearIcon from './select-icon-clear';

var SelectMultipleValue = function SelectMultipleValue(_ref) {
  var disabled = _ref.disabled,
      onClear = _ref.onClear,
      children = _ref.children;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3357578496", [theme.layout.radius, theme.palette.accents_2, disabled ? theme.palette.accents_4 : theme.palette.accents_6]]]) + " " + "item"
  }, children, !!onClear && /*#__PURE__*/React.createElement(SelectClearIcon, {
    onClick: onClear
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3357578496",
    dynamic: [theme.layout.radius, theme.palette.accents_2, disabled ? theme.palette.accents_4 : theme.palette.accents_6]
  }, ".item.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1;padding:0 0.5em;font-size:var(--select-font-size);height:calc(var(--select-font-size) * 2);border-radius:".concat(theme.layout.radius, ";background-color:").concat(theme.palette.accents_2, ";color:").concat(disabled ? theme.palette.accents_4 : theme.palette.accents_6, ";}.item.__jsx-style-dynamic-selector>div:not(.clear-icon),.item.__jsx-style-dynamic-selector>div:not(.clear-icon):hover{border-radius:0;background-color:transparent;padding:0;margin:0;color:inherit;}")));
};

SelectMultipleValue.displayName = 'GeistSelectMultipleValue';
export default SelectMultipleValue;