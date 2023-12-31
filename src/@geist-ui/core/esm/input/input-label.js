import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';

var InputLabel = function InputLabel(_ref) {
  var children = _ref.children,
      isRight = _ref.isRight;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["3089782703", [theme.layout.gapHalf, theme.palette.accents_4, theme.palette.accents_1, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border]]]) + " " + ((isRight ? 'right' : '') || "")
  }, children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3089782703",
    dynamic: [theme.layout.gapHalf, theme.palette.accents_4, theme.palette.accents_1, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border]
  }, "span.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:initial;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:none;margin:0;padding:0 ".concat(theme.layout.gapHalf, ";color:").concat(theme.palette.accents_4, ";background-color:").concat(theme.palette.accents_1, ";border-top-left-radius:").concat(theme.layout.radius, ";border-bottom-left-radius:").concat(theme.layout.radius, ";border-top:1px solid ").concat(theme.palette.border, ";border-left:1px solid ").concat(theme.palette.border, ";border-bottom:1px solid ").concat(theme.palette.border, ";font-size:inherit;line-height:1;}span.right.__jsx-style-dynamic-selector{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";border-left:0;border-right:1px solid ").concat(theme.palette.border, ";}")));
};

var MemoInputLabel = /*#__PURE__*/React.memo(InputLabel);
export default MemoInputLabel;