import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useClasses from '../use-classes';
var defaultProps = {
  className: ''
};

var FieldsetTitle = function FieldsetTitle(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useClasses('title', className);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: "jsx-4105044205" + " " + (props && props.className != null && props.className || classes || "")
  }), children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4105044205"
  }, ".title.jsx-4105044205{line-height:1.5;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;word-break:break-word;font-weight:600;-webkit-letter-spacing:-0.020625em;-moz-letter-spacing:-0.020625em;-ms-letter-spacing:-0.020625em;letter-spacing:-0.020625em;font-size:1.25em;width:auto;}"));
};

FieldsetTitle.defaultProps = defaultProps;
FieldsetTitle.displayName = 'GeistFieldsetTitle';
export default FieldsetTitle;