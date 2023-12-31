import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["isRight", "isSingle", "children", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useClasses from '../use-classes';
var defaultProps = {
  isRight: false,
  className: ''
};

var ButtonIcon = function ButtonIcon(_ref) {
  var isRight = _ref.isRight,
      isSingle = _ref.isSingle,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useClasses('icon', {
    right: isRight,
    single: isSingle
  }, className);
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: "jsx-643337184" + " " + (props && props.className != null && props.className || classes || "")
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "643337184"
  }, ".icon.jsx-643337184{position:absolute;left:var(--geist-ui-button-icon-padding);right:auto;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--geist-ui-button-color);z-index:1;}.right.jsx-643337184{right:var(--geist-ui-button-icon-padding);left:auto;}.icon.jsx-643337184 svg{background:transparent;height:calc(var(--geist-ui-button-height) / 2.35);width:calc(var(--geist-ui-button-height) / 2.35);}.single.jsx-643337184{position:static;-webkit-transform:none;-ms-transform:none;transform:none;}"));
};

ButtonIcon.defaultProps = defaultProps;
ButtonIcon.displayName = 'GeistButtonIcon';
export default ButtonIcon;