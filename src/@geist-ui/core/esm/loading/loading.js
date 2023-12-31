import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "type", "color", "className", "spaceRatio"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  type: 'default',
  className: '',
  spaceRatio: 1
};

var getIconBgColor = function getIconBgColor(type, palette, color) {
  var colors = {
    "default": palette.accents_6,
    secondary: palette.secondary,
    success: palette.success,
    warning: palette.warning,
    error: palette.error
  };
  return color ? color : colors[type];
};

var LoadingComponent = function LoadingComponent(_ref) {
  var children = _ref.children,
      type = _ref.type,
      color = _ref.color,
      className = _ref.className,
      spaceRatio = _ref.spaceRatio,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses('loading-container', className);
  var bgColor = useMemo(function () {
    return getIconBgColor(type, theme.palette, color);
  }, [type, theme.palette, color]);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]]) + " " + "loading"
  }, children && /*#__PURE__*/React.createElement("label", {
    className: _JSXStyle.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]])
  }, children), /*#__PURE__*/React.createElement("i", {
    className: _JSXStyle.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]])
  }), /*#__PURE__*/React.createElement("i", {
    className: _JSXStyle.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]])
  }), /*#__PURE__*/React.createElement("i", {
    className: _JSXStyle.dynamic([["2201634259", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]]])
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2201634259",
    dynamic: [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, bgColor, spaceRatio]
  }, ".loading-container.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, '100%'), ";min-height:1em;padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}label.__jsx-style-dynamic-selector{margin-right:0.5em;color:").concat(theme.palette.accents_5, ";line-height:1;}label.__jsx-style-dynamic-selector *{margin:0;}.loading.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;width:100%;height:100%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}i.__jsx-style-dynamic-selector{width:0.25em;height:0.25em;border-radius:50%;background-color:").concat(bgColor, ";margin:0 calc(0.25em / 2 * ").concat(spaceRatio, ");display:inline-block;-webkit-animation:loading-blink-__jsx-style-dynamic-selector 1.4s infinite both;animation:loading-blink-__jsx-style-dynamic-selector 1.4s infinite both;}i.__jsx-style-dynamic-selector:nth-child(2){-webkit-animation-delay:0.2s;animation-delay:0.2s;}i.__jsx-style-dynamic-selector:nth-child(3){-webkit-animation-delay:0.4s;animation-delay:0.4s;}@-webkit-keyframes loading-blink-__jsx-style-dynamic-selector{0%{opacity:0.2;}20%{opacity:1;}100%{opacity:0.2;}}@keyframes loading-blink-__jsx-style-dynamic-selector{0%{opacity:0.2;}20%{opacity:1;}100%{opacity:0.2;}}")));
};

LoadingComponent.defaultProps = defaultProps;
LoadingComponent.displayName = 'GeistLoading';
var Loading = withScale(LoadingComponent);
export default Loading;