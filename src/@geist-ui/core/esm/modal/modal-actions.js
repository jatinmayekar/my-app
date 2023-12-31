import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useRef, useState } from 'react';
import useTheme from '../use-theme';

var ModalActionsComponent = function ModalActionsComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();
  var ref = useRef(null);

  var _useState = useState('auto'),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  useEffect(function () {
    if (!ref.current) return;
    setHeight("".concat(ref.current.clientHeight, "px"));
  }, [ref]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["2914444644", [theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, height]]])
  }), /*#__PURE__*/React.createElement("footer", _extends({
    ref: ref
  }, props, {
    className: _JSXStyle.dynamic([["2914444644", [theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, height]]]) + " " + (props && props.className != null && props.className || "")
  }), children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2914444644",
    dynamic: [theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, height]
  }, "footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;width:100%;height:auto;position:absolute;bottom:0;left:0;right:0;border-top:1px solid ".concat(theme.palette.border, ";border-bottom-left-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";}footer.__jsx-style-dynamic-selector>button.btn + button.btn{border-left:1px solid ").concat(theme.palette.border, ";}div.__jsx-style-dynamic-selector{height:").concat(height, ";-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}")));
};

ModalActionsComponent.displayName = 'GeistModalActions';
var ModalActions = /*#__PURE__*/React.memo(ModalActionsComponent);
export default ModalActions;