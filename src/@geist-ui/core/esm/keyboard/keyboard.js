import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["command", "shift", "option", "ctrl", "children", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
var defaultProps = {
  command: false,
  shift: false,
  option: false,
  ctrl: false,
  className: ''
};

var KeyboardComponent = function KeyboardComponent(_ref) {
  var command = _ref.command,
      shift = _ref.shift,
      option = _ref.option,
      ctrl = _ref.ctrl,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React.createElement("kbd", _extends({}, props, {
    className: _JSXStyle.dynamic([["921453049", [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), command && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["921453049", [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]])
  }, "\u2318"), shift && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["921453049", [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]])
  }, "\u21E7"), option && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["921453049", [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]])
  }, "\u2325"), ctrl && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["921453049", [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]])
  }, "\u2303"), children && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["921453049", [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]])
  }, children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "921453049",
    dynamic: [theme.palette.accents_5, theme.palette.accents_1, theme.font.sans, theme.layout.radius, theme.palette.accents_2, SCALES.font(0.875), SCALES.width(1, 'fit-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.34), SCALES.pb(0), SCALES.pl(0.34), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "kbd.__jsx-style-dynamic-selector{line-height:2em;text-align:center;display:inline-block;color:".concat(theme.palette.accents_5, ";background-color:").concat(theme.palette.accents_1, ";font-family:").concat(theme.font.sans, ";border-radius:").concat(theme.layout.radius, ";border:1px solid ").concat(theme.palette.accents_2, ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'fit-content'), ";height:").concat(SCALES.height(1, 'auto'), ";min-width:2em;min-height:2em;padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0.34), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0.34), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}span.__jsx-style-dynamic-selector{line-height:2em;font-size:1em;text-align:center;}span.__jsx-style-dynamic-selector+span.__jsx-style-dynamic-selector{margin-left:0.3em;}")));
};

KeyboardComponent.defaultProps = defaultProps;
KeyboardComponent.displayName = 'GeistKeyboard';
var Keyboard = withScale(KeyboardComponent);
export default Keyboard;