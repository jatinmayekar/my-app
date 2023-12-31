import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "disableAutoMargin"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  disableAutoMargin: false,
  className: ''
};

var CardFooterComponent = function CardFooterComponent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disableAutoMargin = _ref.disableAutoMargin,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses({
    'auto-margin': !disableAutoMargin
  }, className);
  return /*#__PURE__*/React.createElement("footer", _extends({}, props, {
    className: _JSXStyle.dynamic([["1602358380", [SCALES.py(0.66), SCALES.px(1.31), SCALES.font(0.875), theme.palette.border, theme.layout.radius, theme.layout.radius, SCALES.height(3.3), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapQuarter]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1602358380",
    dynamic: [SCALES.py(0.66), SCALES.px(1.31), SCALES.font(0.875), theme.palette.border, theme.layout.radius, theme.layout.radius, SCALES.height(3.3), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapQuarter]
  }, "footer.__jsx-style-dynamic-selector{padding:".concat(SCALES.py(0.66), " ").concat(SCALES.px(1.31), ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;color:inherit;background-color:inherit;font-size:").concat(SCALES.font(0.875), ";border-top:1px solid ").concat(theme.palette.border, ";border-bottom-left-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";min-height:").concat(SCALES.height(3.3), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.auto-margin.__jsx-style-dynamic-selector *{margin-top:0;margin-bottom:0;margin-right:").concat(theme.layout.gapQuarter, ";}")));
};

CardFooterComponent.defaultProps = defaultProps;
CardFooterComponent.displayName = 'GeistCardFooter';
var CardFooter = withScale(CardFooterComponent);
export default CardFooter;