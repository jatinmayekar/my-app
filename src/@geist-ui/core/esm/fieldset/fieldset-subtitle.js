import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
var defaultProps = {
  className: ''
};

var FieldsetSubtitle = function FieldsetSubtitle(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: "jsx-2265168013" + " " + (props && props.className != null && props.className || className || "")
  }), children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2265168013"
  }, "div.jsx-2265168013{font-size:0.875em;line-height:1.6;-webkit-letter-spacing:-0.005625em;-moz-letter-spacing:-0.005625em;-ms-letter-spacing:-0.005625em;letter-spacing:-0.005625em;margin:0.75em 0;}"));
};

FieldsetSubtitle.defaultProps = defaultProps;
FieldsetSubtitle.displayName = 'GeistFieldsetSubtitle';
export default FieldsetSubtitle;