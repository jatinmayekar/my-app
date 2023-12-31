import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
var defaultProps = {
  className: ''
};

var FieldsetFooterComponent = function FieldsetFooterComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React.createElement("footer", _extends({}, props, {
    className: _JSXStyle.dynamic([["903731644", [theme.palette.accents_1, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.accents_6, theme.layout.gapHalf, theme.layout.gap, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(2.875), SCALES.pt(0.625), SCALES.pr(1.31), SCALES.pb(0.625), SCALES.pl(1.31), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "903731644",
    dynamic: [theme.palette.accents_1, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.accents_6, theme.layout.gapHalf, theme.layout.gap, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(2.875), SCALES.pt(0.625), SCALES.pr(1.31), SCALES.pb(0.625), SCALES.pl(1.31), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "footer.__jsx-style-dynamic-selector{background-color:".concat(theme.palette.accents_1, ";border-top:1px solid ").concat(theme.palette.border, ";border-bottom-left-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;color:").concat(theme.palette.accents_6, ";padding:").concat(theme.layout.gapHalf, " ").concat(theme.layout.gap, ";box-sizing:border-box;font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(2.875), ";padding:").concat(SCALES.pt(0.625), " ").concat(SCALES.pr(1.31), " ").concat(SCALES.pb(0.625), " ").concat(SCALES.pl(1.31), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

FieldsetFooterComponent.defaultProps = defaultProps;
FieldsetFooterComponent.displayName = 'GeistFieldsetFooter';
var FieldsetFooter = withScale(FieldsetFooterComponent);
export default FieldsetFooter;