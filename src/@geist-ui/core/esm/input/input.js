import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["label", "labelRight", "type", "htmlType", "icon", "iconRight", "iconClickable", "onIconClick", "initialValue", "onChange", "readOnly", "value", "onClearClick", "clearable", "className", "onBlur", "onFocus", "autoComplete", "placeholder", "children", "disabled"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import useTheme from '../use-theme';
import InputLabel from './input-label';
import InputBlockLabel from './input-block-label';
import InputIcon from './input-icon';
import InputClearIcon from './input-icon-clear';
import { getColors } from './styles';
import { defaultProps } from './input-props';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';

var simulateChangeEvent = function simulateChangeEvent(el, event) {
  return _extends({}, event, {
    target: el,
    currentTarget: el
  });
};

var InputComponent = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      labelRight = _ref.labelRight,
      type = _ref.type,
      htmlType = _ref.htmlType,
      icon = _ref.icon,
      iconRight = _ref.iconRight,
      iconClickable = _ref.iconClickable,
      onIconClick = _ref.onIconClick,
      initialValue = _ref.initialValue,
      onChange = _ref.onChange,
      readOnly = _ref.readOnly,
      value = _ref.value,
      onClearClick = _ref.onClearClick,
      clearable = _ref.clearable,
      className = _ref.className,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autoComplete = _ref.autoComplete,
      placeholder = _ref.placeholder,
      children = _ref.children,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var inputRef = useRef(null);
  useImperativeHandle(ref, function () {
    return inputRef.current;
  });

  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      selfValue = _useState2[0],
      setSelfValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hover = _useState4[0],
      setHover = _useState4[1];

  var isControlledComponent = useMemo(function () {
    return value !== undefined;
  }, [value]);
  var labelClasses = useMemo(function () {
    return labelRight ? 'right-label' : label ? 'left-label' : '';
  }, [label, labelRight]);
  var iconClasses = useMemo(function () {
    return iconRight ? 'right-icon' : icon ? 'left-icon' : '';
  }, [icon, iconRight]);

  var _useMemo = useMemo(function () {
    return getColors(theme.palette, type);
  }, [theme.palette, type]),
      color = _useMemo.color,
      borderColor = _useMemo.borderColor,
      hoverBorder = _useMemo.hoverBorder;

  var changeHandler = function changeHandler(event) {
    if (disabled || readOnly) return;
    setSelfValue(event.target.value);
    onChange && onChange(event);
  };

  var clearHandler = function clearHandler(event) {
    setSelfValue('');
    onClearClick && onClearClick(event);
    /* istanbul ignore next */

    if (!inputRef.current) return;
    var changeEvent = simulateChangeEvent(inputRef.current, event);
    changeEvent.target.value = '';
    onChange && onChange(changeEvent);
    inputRef.current.focus();
  };

  var focusHandler = function focusHandler(e) {
    setHover(true);
    onFocus && onFocus(e);
  };

  var blurHandler = function blurHandler(e) {
    setHover(false);
    onBlur && onBlur(e);
  };

  var iconClickHandler = function iconClickHandler(e) {
    if (disabled) return;
    onIconClick && onIconClick(e);
  };

  var iconProps = useMemo(function () {
    return {
      clickable: iconClickable,
      onClick: iconClickHandler
    };
  }, [iconClickable, iconClickHandler]);
  useEffect(function () {
    if (isControlledComponent) {
      setSelfValue(value);
    }
  });
  var controlledValue = isControlledComponent ? {
    value: selfValue
  } : {
    defaultValue: initialValue
  };

  var inputProps = _extends({}, props, controlledValue);

  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["575189429", [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, 'initial'), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]]]) + " " + "with-label"
  }, children && /*#__PURE__*/React.createElement(InputBlockLabel, null, children), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["575189429", [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, 'initial'), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]]]) + " " + (useClasses('input-container', className) || "")
  }, label && /*#__PURE__*/React.createElement(InputLabel, null, label), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["575189429", [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, 'initial'), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]]]) + " " + (useClasses('input-wrapper', {
      hover: hover,
      disabled: disabled
    }, labelClasses) || "")
  }, icon && /*#__PURE__*/React.createElement(InputIcon, _extends({
    icon: icon
  }, iconProps)), /*#__PURE__*/React.createElement("input", _extends({
    type: htmlType,
    ref: inputRef,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    onFocus: focusHandler,
    onBlur: blurHandler,
    onChange: changeHandler,
    autoComplete: autoComplete
  }, inputProps, {
    className: _JSXStyle.dynamic([["575189429", [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, 'initial'), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]]]) + " " + (inputProps && inputProps.className != null && inputProps.className || useClasses({
      disabled: disabled
    }, iconClasses) || "")
  })), clearable && /*#__PURE__*/React.createElement(InputClearIcon, {
    visible: Boolean(inputRef.current && inputRef.current.value !== ''),
    disabled: disabled || readOnly,
    onClick: clearHandler
  }), iconRight && /*#__PURE__*/React.createElement(InputIcon, _extends({
    icon: iconRight
  }, iconProps))), labelRight && /*#__PURE__*/React.createElement(InputLabel, {
    isRight: true
  }, labelRight)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "575189429",
    dynamic: [SCALES.height(2.25), SCALES.font(0.875), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, 'initial'), theme.layout.radius, borderColor, theme.palette.accents_1, theme.palette.accents_2, hoverBorder, SCALES.font(0.875), color, theme.palette.accents_3, theme.palette.background, color]
  }, ".with-label.__jsx-style-dynamic-selector{display:inline-block;box-sizing:border-box;-webkit-box-align:center;--input-height:".concat(SCALES.height(2.25), ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'initial'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.input-container.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:").concat(SCALES.width(1, 'initial'), ";height:var(--input-height);}.input-wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:").concat(theme.layout.radius, ";border:1px solid ").concat(borderColor, ";-webkit-transition:border 0.2s ease 0s,color 0.2s ease 0s;transition:border 0.2s ease 0s,color 0.2s ease 0s;}.input-wrapper.left-label.__jsx-style-dynamic-selector{border-top-left-radius:0;border-bottom-left-radius:0;}.input-wrapper.right-label.__jsx-style-dynamic-selector{border-top-right-radius:0;border-bottom-right-radius:0;}.input-wrapper.disabled.__jsx-style-dynamic-selector{background-color:").concat(theme.palette.accents_1, ";border-color:").concat(theme.palette.accents_2, ";cursor:not-allowed;}input.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;}.input-wrapper.hover.__jsx-style-dynamic-selector{border-color:").concat(hoverBorder, ";}input.__jsx-style-dynamic-selector{margin:0.25em 0.625em;padding:0;box-shadow:none;font-size:").concat(SCALES.font(0.875), ";background-color:transparent;border:none;color:").concat(color, ";outline:none;border-radius:0;width:100%;min-width:0;-webkit-appearance:none;}input.left-icon.__jsx-style-dynamic-selector{margin-left:0;}input.right-icon.__jsx-style-dynamic-selector{margin-right:0;}.__jsx-style-dynamic-selector::-webkit-input-placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(theme.palette.accents_3, ";}.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(theme.palette.accents_3, ";}.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(theme.palette.accents_3, ";}.__jsx-style-dynamic-selector::placeholder,.__jsx-style-dynamic-selector::-moz-placeholder,.__jsx-style-dynamic-selector:-ms-input-placeholder,.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(theme.palette.accents_3, ";}.__jsx-style-dynamic-selector::-ms-reveal{display:none !important;}input.__jsx-style-dynamic-selector:-webkit-autofill,input.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:hover,input.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:active,input.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:focus{-webkit-box-shadow:0 0 0 30px ").concat(theme.palette.background, " inset !important;-webkit-text-fill-color:").concat(color, " !important;}")));
});
InputComponent.defaultProps = defaultProps;
InputComponent.displayName = 'GeistInput';
var Input = withScale(InputComponent);
export default Input;