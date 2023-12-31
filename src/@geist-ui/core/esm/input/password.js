import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["hideToggle", "children"];
import React, { useImperativeHandle, useMemo, useRef, useState } from 'react';
import { defaultProps } from './input-props';
import PasswordIcon from './password-icon';
import Input from './input';
import { useScale, withScale } from '../use-scale';

var passwordDefaultProps = _extends({}, defaultProps, {
  hideToggle: false
});

var InputPasswordComponent = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var hideToggle = _ref.hideToggle,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useScale = useScale(),
      getAllScaleProps = _useScale.getAllScaleProps;

  var inputRef = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  useImperativeHandle(ref, function () {
    return inputRef.current;
  });

  var iconClickHandler = function iconClickHandler() {
    setVisible(function (v) {
      return !v;
    });
    /* istanbul ignore next */

    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  var inputProps = useMemo(function () {
    return _extends({}, props, {
      ref: inputRef,
      iconClickable: true,
      onIconClick: iconClickHandler,
      htmlType: visible ? 'text' : 'password'
    });
  }, [props, iconClickHandler, visible, inputRef]);
  var icon = useMemo(function () {
    if (hideToggle) return null;
    return /*#__PURE__*/React.createElement(PasswordIcon, {
      visible: visible
    });
  }, [hideToggle, visible]);
  return /*#__PURE__*/React.createElement(Input, _extends({
    iconRight: icon
  }, getAllScaleProps(), inputProps), children);
});
InputPasswordComponent.defaultProps = passwordDefaultProps;
InputPasswordComponent.displayName = 'GeistInputPassword';
var InputPassword = withScale(InputPasswordComponent);
export default InputPassword;