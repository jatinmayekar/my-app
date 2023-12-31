import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["value", "max", "className", "type", "colors", "fixedTop", "fixedBottom"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import { useProportions } from '../utils/calculations';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  value: 0,
  max: 100,
  type: 'default',
  fixedTop: false,
  fixedBottom: false,
  className: ''
};

var getCurrentColor = function getCurrentColor(ratio, palette, type) {
  var colors = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var defaultColors = {
    "default": palette.foreground,
    success: palette.success,
    secondary: palette.secondary,
    warning: palette.warning,
    error: palette.error
  };
  var colorKeys = Object.keys(colors);
  if (colorKeys.length === 0) return defaultColors[type];
  var customColorKey = colorKeys.find(function (key) {
    return ratio <= +key;
  });
  if (!customColorKey || Number.isNaN(+customColorKey)) return defaultColors[type];
  return colors[+customColorKey];
};

var ProgressComponent = function ProgressComponent(_ref) {
  var value = _ref.value,
      max = _ref.max,
      className = _ref.className,
      type = _ref.type,
      colors = _ref.colors,
      fixedTop = _ref.fixedTop,
      fixedBottom = _ref.fixedBottom,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var percentValue = useProportions(value, max);
  var currentColor = getCurrentColor(percentValue, theme.palette, type, colors);
  var fixed = fixedTop || fixedBottom;
  var classes = useClasses('progress', {
    fixed: fixed
  }, className);
  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["1239801602", [theme.palette.accents_2, theme.layout.radius, SCALES.width(1, '100%'), SCALES.height(0.625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), fixedTop ? 0 : 'unset', fixedBottom ? 0 : 'unset', theme.layout.radius, currentColor, percentValue]]]) + " " + (classes || "")
  }, /*#__PURE__*/React.createElement("div", {
    title: "".concat(percentValue, "%"),
    className: _JSXStyle.dynamic([["1239801602", [theme.palette.accents_2, theme.layout.radius, SCALES.width(1, '100%'), SCALES.height(0.625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), fixedTop ? 0 : 'unset', fixedBottom ? 0 : 'unset', theme.layout.radius, currentColor, percentValue]]]) + " " + "inner"
  }), /*#__PURE__*/React.createElement("progress", _extends({
    value: value,
    max: max
  }, props, {
    className: _JSXStyle.dynamic([["1239801602", [theme.palette.accents_2, theme.layout.radius, SCALES.width(1, '100%'), SCALES.height(0.625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), fixedTop ? 0 : 'unset', fixedBottom ? 0 : 'unset', theme.layout.radius, currentColor, percentValue]]]) + " " + (props && props.className != null && props.className || className || "")
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1239801602",
    dynamic: [theme.palette.accents_2, theme.layout.radius, SCALES.width(1, '100%'), SCALES.height(0.625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), fixedTop ? 0 : 'unset', fixedBottom ? 0 : 'unset', theme.layout.radius, currentColor, percentValue]
  }, "progress.__jsx-style-dynamic-selector{position:fixed;top:-1000px;opacity:0;visibility:hidden;pointer-events:none;}.progress.__jsx-style-dynamic-selector{position:relative;background-color:".concat(theme.palette.accents_2, ";border-radius:").concat(theme.layout.radius, ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(0.625), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.fixed.__jsx-style-dynamic-selector{position:fixed;top:").concat(fixedTop ? 0 : 'unset', ";bottom:").concat(fixedBottom ? 0 : 'unset', ";left:0;border-radius:0;}.fixed.__jsx-style-dynamic-selector>.inner.__jsx-style-dynamic-selector{border-radius:0;}.inner.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;height:100%;bottom:0;-webkit-transition:all 100ms ease-in;transition:all 100ms ease-in;border-radius:").concat(theme.layout.radius, ";background-color:").concat(currentColor, ";width:").concat(percentValue, "%;}")));
};

ProgressComponent.defaultProps = defaultProps;
ProgressComponent.displayName = 'GeistProgress';
var Progress = withScale(ProgressComponent);
export default Progress;