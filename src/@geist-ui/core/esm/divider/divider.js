import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "align", "children", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  align: 'center',
  type: 'default',
  className: ''
};

var getColor = function getColor(type, palette) {
  var colors = {
    "default": palette.border,
    lite: palette.accents_1,
    success: palette.successLight,
    warning: palette.warningLight,
    error: palette.errorLight,
    secondary: palette.secondary,
    dark: palette.foreground
  };
  return colors[type];
};

var DividerComponent = function DividerComponent(_ref) {
  var type = _ref.type,
      align = _ref.align,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses('divider', className);
  var color = useMemo(function () {
    return getColor(type, theme.palette);
  }, [type, theme.palette]);
  var alignClassName = useMemo(function () {
    if (!align || align === 'center') return '';
    if (align === 'left' || align === 'start') return 'start';
    return 'end';
  }, [align]);
  var alignClasses = useClasses('text', alignClassName);
  var textColor = type === 'default' ? theme.palette.foreground : color;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator"
  }, props, {
    className: _JSXStyle.dynamic([["3410666717", [color, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(0.0625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0.5), SCALES.mr(0), SCALES.mb(0.5), SCALES.ml(0), theme.palette.background, textColor]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["3410666717", [color, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(0.0625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0.5), SCALES.mr(0), SCALES.mb(0.5), SCALES.ml(0), theme.palette.background, textColor]]]) + " " + (alignClasses || "")
  }, children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3410666717",
    dynamic: [color, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(0.0625), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0.5), SCALES.mr(0), SCALES.mb(0.5), SCALES.ml(0), theme.palette.background, textColor]
  }, ".divider.__jsx-style-dynamic-selector{max-width:100%;background-color:".concat(color, ";position:relative;font-size:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(0.0625), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0.5), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0.5), " ").concat(SCALES.ml(0), ";}.text.__jsx-style-dynamic-selector{position:absolute;left:50%;top:50%;min-height:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:0 0.75em;font-size:inherit;font-weight:bold;text-transform:capitalize;background-color:").concat(theme.palette.background, ";color:").concat(textColor, ";z-index:10;}.text.start.__jsx-style-dynamic-selector{-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:7%;}.text.end.__jsx-style-dynamic-selector{-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:auto;right:7%;}")));
};

DividerComponent.defaultProps = defaultProps;
DividerComponent.displayName = 'GeistDivider';
var Divider = withScale(DividerComponent);
export default Divider;