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

var RadioDescriptionComponent = function RadioDescriptionComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: _JSXStyle.dynamic([["2489497926", [theme.palette.accents_3, SCALES.font(0.85, 'calc(var(--radio-size) * 0.85)'), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0, 'calc(var(--radio-size) + var(--radio-size) * 0.375)')]]]) + " " + (props && props.className != null && props.className || className || "")
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2489497926",
    dynamic: [theme.palette.accents_3, SCALES.font(0.85, 'calc(var(--radio-size) * 0.85)'), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0, 'calc(var(--radio-size) + var(--radio-size) * 0.375)')]
  }, "span.__jsx-style-dynamic-selector{color:".concat(theme.palette.accents_3, ";font-size:").concat(SCALES.font(0.85, 'calc(var(--radio-size) * 0.85)'), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0, 'calc(var(--radio-size) + var(--radio-size) * 0.375)'), ";}")));
};

RadioDescriptionComponent.defaultProps = defaultProps;
RadioDescriptionComponent.displayName = 'GeistRadioDescription';
var RadioDescription = withScale(RadioDescriptionComponent);
export default RadioDescription;