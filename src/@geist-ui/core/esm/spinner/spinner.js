import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
var _excluded = ["className"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  className: ''
};

var getSpans = function getSpans(theme) {
  return _toConsumableArray(new Array(12)).map(function (_, index) {
    return /*#__PURE__*/React.createElement("span", {
      key: "spinner-".concat(index),
      className: _JSXStyle.dynamic([["3296107463", [theme.palette.foreground, theme.layout.radius]]])
    }, /*#__PURE__*/React.createElement(_JSXStyle, {
      id: "3296107463",
      dynamic: [theme.palette.foreground, theme.layout.radius]
    }, "span.__jsx-style-dynamic-selector{background-color:".concat(theme.palette.foreground, ";position:absolute;top:-3.9%;width:24%;height:8%;left:-10%;border-radius:").concat(theme.layout.radius, ";-webkit-animation:spinner-__jsx-style-dynamic-selector 1.2s linear 0s infinite normal none running;animation:spinner-__jsx-style-dynamic-selector 1.2s linear 0s infinite normal none running;}span.__jsx-style-dynamic-selector:nth-child(1){-webkit-animation-delay:-1.2s;animation-delay:-1.2s;-webkit-transform:rotate(0deg) translate(146%);-ms-transform:rotate(0deg) translate(146%);transform:rotate(0deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s;-webkit-transform:rotate(30deg) translate(146%);-ms-transform:rotate(30deg) translate(146%);transform:rotate(30deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s;-webkit-transform:rotate(60deg) translate(146%);-ms-transform:rotate(60deg) translate(146%);transform:rotate(60deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(4){-webkit-animation-delay:-0.9s;animation-delay:-0.9s;-webkit-transform:rotate(90deg) translate(146%);-ms-transform:rotate(90deg) translate(146%);transform:rotate(90deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(5){-webkit-animation-delay:-0.8s;animation-delay:-0.8s;-webkit-transform:rotate(120deg) translate(146%);-ms-transform:rotate(120deg) translate(146%);transform:rotate(120deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(6){-webkit-animation-delay:-0.7s;animation-delay:-0.7s;-webkit-transform:rotate(150deg) translate(146%);-ms-transform:rotate(150deg) translate(146%);transform:rotate(150deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(7){-webkit-animation-delay:-0.6s;animation-delay:-0.6s;-webkit-transform:rotate(180deg) translate(146%);-ms-transform:rotate(180deg) translate(146%);transform:rotate(180deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(8){-webkit-animation-delay:-0.5s;animation-delay:-0.5s;-webkit-transform:rotate(210deg) translate(146%);-ms-transform:rotate(210deg) translate(146%);transform:rotate(210deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(9){-webkit-animation-delay:-0.4s;animation-delay:-0.4s;-webkit-transform:rotate(240deg) translate(146%);-ms-transform:rotate(240deg) translate(146%);transform:rotate(240deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(10){-webkit-animation-delay:-0.3s;animation-delay:-0.3s;-webkit-transform:rotate(270deg) translate(146%);-ms-transform:rotate(270deg) translate(146%);transform:rotate(270deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(11){-webkit-animation-delay:-0.2s;animation-delay:-0.2s;-webkit-transform:rotate(300deg) translate(146%);-ms-transform:rotate(300deg) translate(146%);transform:rotate(300deg) translate(146%);}span.__jsx-style-dynamic-selector:nth-child(12){-webkit-animation-delay:-0.1s;animation-delay:-0.1s;-webkit-transform:rotate(330deg) translate(146%);-ms-transform:rotate(330deg) translate(146%);transform:rotate(330deg) translate(146%);}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{0%{opacity:1;}100%{opacity:0.15;}}@keyframes spinner-__jsx-style-dynamic-selector{0%{opacity:1;}100%{opacity:0.15;}}")));
  });
};

var SpinnerComponent = function SpinnerComponent(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses('spinner', className);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["1153799566", [SCALES.width(1.25), SCALES.height(1.25), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["1153799566", [SCALES.width(1.25), SCALES.height(1.25), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + "container"
  }, getSpans(theme)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1153799566",
    dynamic: [SCALES.width(1.25), SCALES.height(1.25), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".spinner.__jsx-style-dynamic-selector{display:block;box-sizing:border-box;width:".concat(SCALES.width(1.25), ";height:").concat(SCALES.height(1.25), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.container.__jsx-style-dynamic-selector{width:100%;height:100%;position:relative;left:50%;top:50%;}")));
};

SpinnerComponent.defaultProps = defaultProps;
SpinnerComponent.displayName = 'GeistSpinner';
var Spinner = withScale(SpinnerComponent);
export default Spinner;