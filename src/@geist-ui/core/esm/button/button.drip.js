import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useRef } from 'react';
var defaultProps = {
  x: 0,
  y: 0
};

var ButtonDrip = function ButtonDrip(_ref) {
  var x = _ref.x,
      y = _ref.y,
      color = _ref.color,
      onCompleted = _ref.onCompleted;
  var dripRef = useRef(null);
  /* istanbul ignore next */

  var top = Number.isNaN(+y) ? 0 : y - 10;
  /* istanbul ignore next */

  var left = Number.isNaN(+x) ? 0 : x - 10;
  useEffect(function () {
    /* istanbul ignore next */
    if (!dripRef.current) return;
    dripRef.current.addEventListener('animationend', onCompleted);
    return function () {
      /* istanbul ignore next */
      if (!dripRef.current) return;
      dripRef.current.removeEventListener('animationend', onCompleted);
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: dripRef,
    className: "jsx-3424889537" + " " + "drip"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    style: {
      top: top,
      left: left
    },
    className: "jsx-3424889537"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    className: "jsx-3424889537"
  }, /*#__PURE__*/React.createElement("g", {
    fill: color,
    className: "jsx-3424889537"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    rx: "10",
    className: "jsx-3424889537"
  })))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3424889537"
  }, ".drip.jsx-3424889537{position:absolute;left:0;right:0;top:0;bottom:0;}svg.jsx-3424889537{position:absolute;-webkit-animation:350ms ease-in expand-jsx-3424889537;animation:350ms ease-in expand-jsx-3424889537;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;width:1rem;height:1rem;}@-webkit-keyframes expand-jsx-3424889537{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}30%{opacity:1;}80%{opacity:0.5;}100%{-webkit-transform:scale(28);-ms-transform:scale(28);transform:scale(28);opacity:0;}}@keyframes expand-jsx-3424889537{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}30%{opacity:1;}80%{opacity:0.5;}100%{-webkit-transform:scale(28);-ms-transform:scale(28);transform:scale(28);opacity:0;}}"));
};

ButtonDrip.defaultProps = defaultProps;
ButtonDrip.displayName = 'GeistButtonDrip';
export default ButtonDrip;