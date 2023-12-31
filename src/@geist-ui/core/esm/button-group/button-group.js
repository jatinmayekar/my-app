import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["disabled", "type", "ghost", "vertical", "children", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import { ButtonGroupContext } from './button-group-context';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  disabled: false,
  vertical: false,
  ghost: false,
  type: 'default',
  className: ''
};

var getGroupBorderColors = function getGroupBorderColors(palette, props) {
  var ghost = props.ghost,
      type = props.type;
  if (!ghost && type !== 'default') return palette.background;
  var colors = {
    "default": palette.border,
    success: palette.success,
    secondary: palette.secondary,
    error: palette.error,
    warning: palette.warning
  };
  var withoutLightType = type.replace('-light', '');
  return colors[withoutLightType] || colors["default"];
};

var ButtonGroupComponent = function ButtonGroupComponent(groupProps) {
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var disabled = groupProps.disabled,
      type = groupProps.type,
      ghost = groupProps.ghost,
      vertical = groupProps.vertical,
      children = groupProps.children,
      className = groupProps.className,
      props = _objectWithoutProperties(groupProps, _excluded);

  var initialValue = useMemo(function () {
    return {
      disabled: disabled,
      type: type,
      ghost: ghost,
      isButtonGroup: true
    };
  }, [disabled, type]);
  var border = useMemo(function () {
    return getGroupBorderColors(theme.palette, groupProps);
  }, [theme, type, disabled, ghost]);
  var classes = useClasses('btn-group', {
    vertical: vertical,
    horizontal: !vertical
  }, className);
  return /*#__PURE__*/React.createElement(ButtonGroupContext.Provider, {
    value: initialValue
  }, /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["3616385743", [theme.layout.radius, border, SCALES.width(1, 'auto'), SCALES.height(1, 'min-content'), SCALES.mt(0.313), SCALES.mr(0.313), SCALES.mb(0.313), SCALES.ml(0.313), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), border, border]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3616385743",
    dynamic: [theme.layout.radius, border, SCALES.width(1, 'auto'), SCALES.height(1, 'min-content'), SCALES.mt(0.313), SCALES.mr(0.313), SCALES.mb(0.313), SCALES.ml(0.313), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), border, border]
  }, ".btn-group.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;border-radius:".concat(theme.layout.radius, ";border:1px solid ").concat(border, ";background-color:transparent;overflow:hidden;width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'min-content'), ";margin:").concat(SCALES.mt(0.313), " ").concat(SCALES.mr(0.313), " ").concat(SCALES.mb(0.313), " ").concat(SCALES.ml(0.313), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";}.vertical.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.btn-group.__jsx-style-dynamic-selector .btn{border:none;}.btn-group.__jsx-style-dynamic-selector .btn .text{top:0;}.horizontal.__jsx-style-dynamic-selector .btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;border-left:1px solid ").concat(border, ";}.horizontal.__jsx-style-dynamic-selector .btn:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;}.vertical.__jsx-style-dynamic-selector .btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-top:1px solid ").concat(border, ";}.vertical.__jsx-style-dynamic-selector .btn:not(:last-child){border-bottom-left-radius:0;border-bottom-right-radius:0;}"))));
};

ButtonGroupComponent.defaultProps = defaultProps;
ButtonGroupComponent.displayName = 'GeistButtonGroup';
var ButtonGroup = withScale(ButtonGroupComponent);
export default ButtonGroup;