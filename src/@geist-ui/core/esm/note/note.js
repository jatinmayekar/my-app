import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "type", "label", "filled", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  type: 'default',
  label: 'note',
  filled: false,
  className: ''
};

var getStatusColor = function getStatusColor(type, filled, theme) {
  var colors = {
    secondary: theme.palette.secondary,
    success: theme.palette.success,
    warning: theme.palette.warning,
    error: theme.palette.error
  };
  var statusColor = colors[type];
  if (!filled) return {
    color: statusColor || theme.palette.foreground,
    borderColor: statusColor || theme.palette.border,
    bgColor: theme.palette.background
  };
  var filledColor = statusColor ? 'white' : theme.palette.background;
  return {
    color: filledColor,
    borderColor: statusColor || theme.palette.foreground,
    bgColor: statusColor || theme.palette.foreground
  };
};

export var NoteComponent = function NoteComponent(_ref) {
  var children = _ref.children,
      type = _ref.type,
      label = _ref.label,
      filled = _ref.filled,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useMemo = useMemo(function () {
    return getStatusColor(type, filled, theme);
  }, [type, filled, theme]),
      color = _useMemo.color,
      borderColor = _useMemo.borderColor,
      bgColor = _useMemo.bgColor;

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["1082065680", [borderColor, color, bgColor, theme.layout.radius, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.667), SCALES.pr(1.32), SCALES.pb(0.667), SCALES.pl(1.32), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || useClasses('note', className) || "")
  }), label && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["1082065680", [borderColor, color, bgColor, theme.layout.radius, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.667), SCALES.pr(1.32), SCALES.pb(0.667), SCALES.pl(1.32), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + "label"
  }, /*#__PURE__*/React.createElement("b", {
    className: _JSXStyle.dynamic([["1082065680", [borderColor, color, bgColor, theme.layout.radius, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.667), SCALES.pr(1.32), SCALES.pb(0.667), SCALES.pl(1.32), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]])
  }, label, ":")), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1082065680",
    dynamic: [borderColor, color, bgColor, theme.layout.radius, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.667), SCALES.pr(1.32), SCALES.pb(0.667), SCALES.pl(1.32), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".note.__jsx-style-dynamic-selector{line-height:1.8;border:1px solid ".concat(borderColor, ";color:").concat(color, ";background-color:").concat(bgColor, ";border-radius:").concat(theme.layout.radius, ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0.667), " ").concat(SCALES.pr(1.32), " ").concat(SCALES.pb(0.667), " ").concat(SCALES.pl(1.32), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.note.__jsx-style-dynamic-selector p{margin:0;}.label.__jsx-style-dynamic-selector{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:1.5;padding-right:0.38em;}")));
};
NoteComponent.defaultProps = defaultProps;
NoteComponent.displayName = 'GeistNote';
var Note = withScale(NoteComponent);
export default Note;