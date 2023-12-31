import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["src", "text", "name", "children", "className", "altText"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import Avatar from '../avatar';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  className: ''
};

var UserComponent = function UserComponent(_ref) {
  var src = _ref.src,
      text = _ref.text,
      name = _ref.name,
      children = _ref.children,
      className = _ref.className,
      altText = _ref.altText,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES,
      getScaleProps = _useScale.getScaleProps;

  var scale = getScaleProps('scale');
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["3188576998", [SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.5), SCALES.pb(0), SCALES.pl(0.5), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapHalf, theme.palette.accents_8, theme.palette.accents_6]]]) + " " + (props && props.className != null && props.className || useClasses('user', className) || "")
  }), /*#__PURE__*/React.createElement(Avatar, {
    src: src,
    scale: scale,
    text: text,
    alt: altText
  }), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3188576998", [SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.5), SCALES.pb(0), SCALES.pl(0.5), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapHalf, theme.palette.accents_8, theme.palette.accents_6]]]) + " " + "names"
  }, /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["3188576998", [SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.5), SCALES.pb(0), SCALES.pl(0.5), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapHalf, theme.palette.accents_8, theme.palette.accents_6]]]) + " " + "name"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["3188576998", [SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.5), SCALES.pb(0), SCALES.pl(0.5), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapHalf, theme.palette.accents_8, theme.palette.accents_6]]]) + " " + "social"
  }, children)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3188576998",
    dynamic: [SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.5), SCALES.pb(0), SCALES.pl(0.5), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.gapHalf, theme.palette.accents_8, theme.palette.accents_6]
  }, ".user.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%;--user-font-size:".concat(SCALES.font(1), ";font-size:var(--user-font-size);width:").concat(SCALES.width(1, 'max-content'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0.5), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0.5), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.names.__jsx-style-dynamic-selector{font-size:inherit;margin-left:").concat(theme.layout.gapHalf, ";display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;white-space:nowrap;}.name.__jsx-style-dynamic-selector{font-size:calc(0.89 * var(--user-font-size));color:").concat(theme.palette.accents_8, ";line-height:1.1em;text-transform:capitalize;font-weight:500;max-width:15rem;text-overflow:ellipsis;overflow:hidden;}.social.__jsx-style-dynamic-selector{font-size:calc(0.75 * var(--user-font-size));color:").concat(theme.palette.accents_6, ";}.social.__jsx-style-dynamic-selector *:first-child{margin-top:0;}.social.__jsx-style-dynamic-selector *:last-child{margin-bottom:0;}")));
};

UserComponent.defaultProps = defaultProps;
UserComponent.displayName = 'GeistUser';
var User = withScale(UserComponent);
export default User;