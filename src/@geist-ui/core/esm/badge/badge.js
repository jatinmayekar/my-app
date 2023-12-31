import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "className", "children", "dot"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  type: 'default',
  dot: false,
  className: ''
};

var getBgColor = function getBgColor(type, palette) {
  var colors = {
    "default": palette.foreground,
    success: palette.success,
    warning: palette.warning,
    error: palette.error,
    secondary: palette.secondary
  };
  return colors[type];
};

var BadgeComponent = function BadgeComponent(_ref) {
  var type = _ref.type,
      className = _ref.className,
      children = _ref.children,
      dot = _ref.dot,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var bg = useMemo(function () {
    return getBgColor(type, theme.palette);
  }, [type, theme.palette]);
  var color = useMemo(function () {
    if (!type || type === 'default') return theme.palette.background;
    return 'white';
  }, [type, theme.palette.background]);
  var classes = useClasses('badge', {
    dot: dot
  }, className);
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: _JSXStyle.dynamic([["427831233", [bg, color, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.25), SCALES.pr(0.4375), SCALES.pb(0.25), SCALES.pl(0.4375), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.py(0.25), SCALES.px(0.25)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), !dot && children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "427831233",
    dynamic: [bg, color, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.25), SCALES.pr(0.4375), SCALES.pb(0.25), SCALES.pl(0.4375), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.py(0.25), SCALES.px(0.25)]
  }, ".badge.__jsx-style-dynamic-selector{display:inline-block;border-radius:16px;font-variant:tabular-nums;line-height:1;vertical-align:middle;background-color:".concat(bg, ";color:").concat(color, ";border:0;font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0.25), " ").concat(SCALES.pr(0.4375), " ").concat(SCALES.pb(0.25), " ").concat(SCALES.pl(0.4375), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.dot.__jsx-style-dynamic-selector{padding:").concat(SCALES.py(0.25), " ").concat(SCALES.px(0.25), ";border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}")));
};

BadgeComponent.defaultProps = defaultProps;
BadgeComponent.displayName = 'GeistBadge';
var Badge = withScale(BadgeComponent);
export default Badge;