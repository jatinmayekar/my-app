import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["component", "children", "span", "offset", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
var defaultProps = {
  span: 24,
  offset: 0,
  component: 'div',
  className: ''
};

var Col = function Col(_ref) {
  var component = _ref.component,
      children = _ref.children,
      span = _ref.span,
      offset = _ref.offset,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var Component = component;
  return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    className: _JSXStyle.dynamic([["540733280", [100 / 24 * span, 100 / 24 * offset]]]) + " " + (props && props.className != null && props.className || "col ".concat(className))
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "540733280",
    dynamic: [100 / 24 * span, 100 / 24 * offset]
  }, ".col.__jsx-style-dynamic-selector{float:left;box-sizing:border-box;padding-left:calc(var(--row-gap) / 2);padding-right:calc(var(--row-gap) / 2);width:".concat(100 / 24 * span, "%;margin-left:").concat(100 / 24 * offset, "%;}")));
};

Col.defaultProps = defaultProps;
Col.displayName = 'GeistCol';
export default Col;