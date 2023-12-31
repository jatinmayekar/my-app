import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "children", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  type: 'default',
  className: ''
};

var getColor = function getColor(type, theme) {
  var colors = {
    "default": theme.palette.accents_2,
    success: theme.palette.success,
    warning: theme.palette.warning,
    error: theme.palette.error
  };
  return colors[type] || colors["default"];
};

var DotComponent = function DotComponent(_ref) {
  var type = _ref.type,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var color = useMemo(function () {
    return getColor(type, theme);
  }, [type, theme]);
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: _JSXStyle.dynamic([["4077256937", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color]]]) + " " + (props && props.className != null && props.className || useClasses('dot', className) || "")
  }), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["4077256937", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color]]]) + " " + "icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["4077256937", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color]]]) + " " + "label"
  }, children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4077256937",
    dynamic: [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color]
  }, ".dot.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.icon.__jsx-style-dynamic-selector{width:0.625em;height:0.625em;min-width:calc(0.625 * 12px);min-height:calc(0.625 * 12px);line-height:0.625em;border-radius:50%;background-color:").concat(color, ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.label.__jsx-style-dynamic-selector{margin-left:0.5em;font-size:1em;line-height:1em;text-transform:capitalize;}")));
};

DotComponent.defaultProps = defaultProps;
DotComponent.displayName = 'GeistDot';
var Dot = withScale(DotComponent);
export default Dot;