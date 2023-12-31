import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import useClasses from '../use-classes';
var defaultProps = {
  left: 0,
  disabled: false,
  isClick: false
};
var SliderDot = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      left = _ref.left,
      isClick = _ref.isClick;
  var theme = useTheme();
  var classes = useClasses('dot', {
    disabled: disabled,
    click: isClick
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: _JSXStyle.dynamic([["3479628597", [left, theme.palette.success, theme.palette.background, theme.palette.accents_2, theme.palette.accents_4]]]) + " " + (classes || "")
  }, children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3479628597",
    dynamic: [left, theme.palette.success, theme.palette.background, theme.palette.accents_2, theme.palette.accents_4]
  }, ".dot.__jsx-style-dynamic-selector{position:absolute;left:".concat(left, "%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:calc(var(--slider-font-size) * 1.25);min-width:calc(var(--slider-font-size) * 1.25);line-height:calc(var(--slider-font-size) * 1.25);border-radius:calc(var(--slider-font-size) * 0.625);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:700;font-size:calc(var(--slider-font-size) * 0.75);z-index:100;background-color:").concat(theme.palette.success, ";color:").concat(theme.palette.background, ";text-align:center;padding:0 calc(0.57 * var(--slider-font-size));}.dot.disabled.__jsx-style-dynamic-selector{cursor:not-allowed !important;background-color:").concat(theme.palette.accents_2, ";color:").concat(theme.palette.accents_4, ";}.dot.click.__jsx-style-dynamic-selector{-webkit-transition:all 200ms ease;transition:all 200ms ease;}.dot.__jsx-style-dynamic-selector:hover{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;}.dot.__jsx-style-dynamic-selector:active{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing;}")));
});
SliderDot.defaultProps = defaultProps;
SliderDot.displayName = 'GeistSliderDot';
export default SliderDot;