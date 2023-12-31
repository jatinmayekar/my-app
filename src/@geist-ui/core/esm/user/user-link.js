import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["href", "className", "children"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import Link from '../link';
var defaultProps = {
  className: ''
};
var UserLink = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var href = _ref.href,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: "jsx-3263947648" + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/React.createElement(Link, {
    ref: ref,
    href: href,
    color: true,
    target: "_blank",
    rel: "noopener"
  }, children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3263947648"
  }, "div.jsx-3263947648 a:hover{opacity:0.7;}"));
});
UserLink.defaultProps = defaultProps;
UserLink.displayName = 'GeistUserLink';
export default UserLink;