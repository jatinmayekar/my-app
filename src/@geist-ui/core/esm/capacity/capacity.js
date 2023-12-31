import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["value", "limit", "color", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import { useProportions } from '../utils/calculations';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  value: 0,
  limit: 100,
  color: '',
  className: ''
};

var getColor = function getColor(val, palette) {
  if (val < 33) return palette.cyan;
  if (val < 66) return palette.warning;
  return palette.errorDark;
};

var CapacityComponent = function CapacityComponent(_ref) {
  var value = _ref.value,
      limit = _ref.limit,
      userColor = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var percentValue = useProportions(value, limit);
  var classes = useClasses('capacity', className);
  var color = useMemo(function () {
    if (userColor && userColor !== '') return userColor;
    return getColor(percentValue, theme.palette);
  }, [userColor, percentValue, theme.palette]);
  return /*#__PURE__*/React.createElement("div", _extends({
    title: "".concat(percentValue, "%")
  }, props, {
    className: _JSXStyle.dynamic([["2706946339", [SCALES.width(3.125), SCALES.height(0.625), theme.layout.radius, theme.palette.accents_2, SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), percentValue, color]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["2706946339", [SCALES.width(3.125), SCALES.height(0.625), theme.layout.radius, theme.palette.accents_2, SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), percentValue, color]]])
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2706946339",
    dynamic: [SCALES.width(3.125), SCALES.height(0.625), theme.layout.radius, theme.palette.accents_2, SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), percentValue, color]
  }, ".capacity.__jsx-style-dynamic-selector{width:".concat(SCALES.width(3.125), ";height:").concat(SCALES.height(0.625), ";border-radius:").concat(theme.layout.radius, ";overflow:hidden;background-color:").concat(theme.palette.accents_2, ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}span.__jsx-style-dynamic-selector{width:").concat(percentValue, "%;background-color:").concat(color, ";height:100%;margin:0;padding:0;display:block;}")));
};

CapacityComponent.defaultProps = defaultProps;
CapacityComponent.displayName = 'GeistCapacity';
var Capacity = withScale(CapacityComponent);
export default Capacity;