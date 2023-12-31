import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "tag", "className", "type"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import useScale from '../use-scale';
var defaultProps = {
  type: 'default',
  className: ''
};

var getTypeColor = function getTypeColor(type, palette) {
  var colors = {
    "default": 'inherit',
    secondary: palette.secondary,
    success: palette.success,
    warning: palette.warning,
    error: palette.error
  };
  return colors[type] || colors["default"];
};

var TextChild = function TextChild(_ref) {
  var children = _ref.children,
      tag = _ref.tag,
      className = _ref.className,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, _excluded);

  var Component = tag;
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES,
      getScaleProps = _useScale.getScaleProps;

  var font = getScaleProps('font');
  var mx = getScaleProps(['margin', 'marginLeft', 'marginRight', 'mx', 'ml', 'mr']);
  var my = getScaleProps(['margin', 'marginTop', 'marginBottom', 'my', 'mt', 'mb']);
  var px = getScaleProps(['padding', 'paddingLeft', 'paddingRight', 'pl', 'pr', 'px']);
  var py = getScaleProps(['padding', 'paddingTop', 'paddingBottom', 'pt', 'pb', 'py']);
  var color = useMemo(function () {
    return getTypeColor(type, theme.palette);
  }, [type, theme.palette]);
  var classNames = useMemo(function () {
    var keys = [{
      value: mx,
      className: 'mx'
    }, {
      value: my,
      className: 'my'
    }, {
      value: px,
      className: 'px'
    }, {
      value: py,
      className: 'py'
    }, {
      value: font,
      className: 'font'
    }];
    var scaleClassNames = keys.reduce(function (pre, next) {
      if (typeof next.value === 'undefined') return pre;
      return "".concat(pre, " ").concat(next.className);
    }, '');
    return "".concat(scaleClassNames, " ").concat(className).trim();
  }, [mx, my, px, py, font, className]);
  return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    className: _JSXStyle.dynamic([["3155699851", [tag, color, SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.font(1, 'inherit'), SCALES.ml(0, 'revert'), SCALES.mr(0, 'revert'), SCALES.mt(0, 'revert'), SCALES.mb(0, 'revert'), SCALES.pl(0, 'revert'), SCALES.pr(0, 'revert'), SCALES.pt(0, 'revert'), SCALES.pb(0, 'revert')]]]) + " " + (props && props.className != null && props.className || classNames || "")
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3155699851",
    dynamic: [tag, color, SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.font(1, 'inherit'), SCALES.ml(0, 'revert'), SCALES.mr(0, 'revert'), SCALES.mt(0, 'revert'), SCALES.mb(0, 'revert'), SCALES.pl(0, 'revert'), SCALES.pr(0, 'revert'), SCALES.pt(0, 'revert'), SCALES.pb(0, 'revert')]
  }, "".concat(tag, ".__jsx-style-dynamic-selector{color:").concat(color, ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";}.font.__jsx-style-dynamic-selector{font-size:").concat(SCALES.font(1, 'inherit'), ";}.mx.__jsx-style-dynamic-selector{margin-left:").concat(SCALES.ml(0, 'revert'), ";margin-right:").concat(SCALES.mr(0, 'revert'), ";}.my.__jsx-style-dynamic-selector{margin-top:").concat(SCALES.mt(0, 'revert'), ";margin-bottom:").concat(SCALES.mb(0, 'revert'), ";}.px.__jsx-style-dynamic-selector{padding-left:").concat(SCALES.pl(0, 'revert'), ";padding-right:").concat(SCALES.pr(0, 'revert'), ";}.py.__jsx-style-dynamic-selector{padding-top:").concat(SCALES.pt(0, 'revert'), ";padding-bottom:").concat(SCALES.pb(0, 'revert'), ";}")));
};

TextChild.defaultProps = defaultProps;
TextChild.displayName = 'GeistTextChild';
export default TextChild;