import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';

var InputBlockLabelComponent = function InputBlockLabelComponent(_ref) {
  var children = _ref.children;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement("label", {
    className: _JSXStyle.dynamic([["1278828862", [theme.palette.accents_6]]])
  }, children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1278828862",
    dynamic: [theme.palette.accents_6]
  }, "label.__jsx-style-dynamic-selector{display:block;font-weight:normal;color:".concat(theme.palette.accents_6, ";padding:0 0 0 1px;margin-bottom:0.5em;font-size:1em;line-height:1.5;}label.__jsx-style-dynamic-selector>*:first-child{margin-top:0;}label.__jsx-style-dynamic-selector>*:last-child{margin-bottom:0;}")));
};

InputBlockLabelComponent.displayName = 'GeistInputBlockLabel';
var InputBlockLabel = /*#__PURE__*/React.memo(InputBlockLabelComponent);
export default InputBlockLabel;