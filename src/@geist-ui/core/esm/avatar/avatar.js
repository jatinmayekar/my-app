import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["src", "stacked", "text", "isSquare", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  stacked: false,
  text: '',
  isSquare: false,
  className: ''
};

var safeText = function safeText(text) {
  if (text.length <= 4) return text;
  return text.slice(0, 3);
};

var AvatarComponent = function AvatarComponent(_ref) {
  var src = _ref.src,
      stacked = _ref.stacked,
      text = _ref.text,
      isSquare = _ref.isSquare,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var showText = !src;
  var radius = isSquare ? theme.layout.radius : '50%';
  var marginLeft = stacked ? SCALES.ml(-0.625) : SCALES.ml(0);
  var classes = useClasses('avatar', className);
  return /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["2295275975", [theme.palette.accents_2, radius, theme.palette.background, SCALES.width(1.75) || SCALES.height(1.75), SCALES.height(1.75) || SCALES.width(1.75), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), marginLeft, radius, SCALES.font(1)]]]) + " " + (classes || "")
  }, !showText && /*#__PURE__*/React.createElement("img", _extends({
    alt: "avatar",
    src: src,
    draggable: false
  }, props, {
    className: _JSXStyle.dynamic([["2295275975", [theme.palette.accents_2, radius, theme.palette.background, SCALES.width(1.75) || SCALES.height(1.75), SCALES.height(1.75) || SCALES.width(1.75), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), marginLeft, radius, SCALES.font(1)]]]) + " " + (props && props.className != null && props.className || "avatar-img")
  })), showText && /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: _JSXStyle.dynamic([["2295275975", [theme.palette.accents_2, radius, theme.palette.background, SCALES.width(1.75) || SCALES.height(1.75), SCALES.height(1.75) || SCALES.width(1.75), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), marginLeft, radius, SCALES.font(1)]]]) + " " + (props && props.className != null && props.className || "avatar-text")
  }), safeText(text)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2295275975",
    dynamic: [theme.palette.accents_2, radius, theme.palette.background, SCALES.width(1.75) || SCALES.height(1.75), SCALES.height(1.75) || SCALES.width(1.75), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), marginLeft, radius, SCALES.font(1)]
  }, ".avatar.__jsx-style-dynamic-selector{display:inline-block;position:relative;overflow:hidden;border:1px solid ".concat(theme.palette.accents_2, ";border-radius:").concat(radius, ";vertical-align:top;background-color:").concat(theme.palette.background, ";box-sizing:border-box;width:").concat(SCALES.width(1.75) || SCALES.height(1.75), ";height:").concat(SCALES.height(1.75) || SCALES.width(1.75), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(marginLeft, ";}.avatar-img.__jsx-style-dynamic-selector{display:inline-block;object-fit:cover;width:100%;height:100%;border-radius:").concat(radius, ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.avatar-text.__jsx-style-dynamic-selector{position:absolute;left:50%;top:50%;font-size:").concat(SCALES.font(1), ";text-align:center;-webkit-transform:translate(-50%,-50%) scale(0.65);-ms-transform:translate(-50%,-50%) scale(0.65);transform:translate(-50%,-50%) scale(0.65);white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}")));
};

AvatarComponent.defaultProps = defaultProps;
AvatarComponent.displayName = 'GeistAvatar';
var Avatar = withScale(AvatarComponent);
export default Avatar;