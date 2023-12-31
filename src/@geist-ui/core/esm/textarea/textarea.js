import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "disabled", "readOnly", "onFocus", "onBlur", "className", "initialValue", "onChange", "value", "placeholder", "resize"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useRef, useImperativeHandle, useEffect, useMemo, useState } from 'react';
import useTheme from '../use-theme';
import { tuple } from '../utils/prop-types';
import { getColors } from '../input/styles';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var resizeTypes = tuple('none', 'both', 'horizontal', 'vertical', 'initial', 'inherit');
var defaultProps = {
  initialValue: '',
  type: 'default',
  disabled: false,
  readOnly: false,
  className: '',
  resize: 'none'
};
var TextareaComponent = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var type = _ref.type,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      className = _ref.className,
      initialValue = _ref.initialValue,
      onChange = _ref.onChange,
      value = _ref.value,
      placeholder = _ref.placeholder,
      resize = _ref.resize,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var textareaRef = useRef(null);
  useImperativeHandle(ref, function () {
    return textareaRef.current;
  });
  var isControlledComponent = useMemo(function () {
    return value !== undefined;
  }, [value]);

  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      selfValue = _useState2[0],
      setSelfValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hover = _useState4[0],
      setHover = _useState4[1];

  var _useMemo = useMemo(function () {
    return getColors(theme.palette, type);
  }, [theme.palette, type]),
      color = _useMemo.color,
      borderColor = _useMemo.borderColor,
      hoverBorder = _useMemo.hoverBorder;

  var classes = useClasses('wrapper', {
    hover: hover,
    disabled: disabled
  }, className);

  var changeHandler = function changeHandler(event) {
    if (disabled || readOnly) return;
    setSelfValue(event.target.value);
    onChange && onChange(event);
  };

  var focusHandler = function focusHandler(e) {
    setHover(true);
    onFocus && onFocus(e);
  };

  var blurHandler = function blurHandler(e) {
    setHover(false);
    onBlur && onBlur(e);
  };

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

  var textareaProps = _extends({}, props, controlledValue);

  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["12276481", [theme.layout.radius, borderColor, color, SCALES.font(0.875), SCALES.height(1, 'auto'), SCALES.width(1, 'initial'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverBorder, theme.palette.accents_1, theme.palette.accents_2, theme.font.sans, SCALES.pt(0.5), SCALES.pr(0.5), SCALES.pb(0.5), SCALES.pl(0.5), resize, theme.palette.background]]]) + " " + (classes || "")
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    ref: textareaRef,
    disabled: disabled,
    placeholder: placeholder,
    readOnly: readOnly,
    onFocus: focusHandler,
    onBlur: blurHandler,
    onChange: changeHandler
  }, textareaProps, {
    className: _JSXStyle.dynamic([["12276481", [theme.layout.radius, borderColor, color, SCALES.font(0.875), SCALES.height(1, 'auto'), SCALES.width(1, 'initial'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverBorder, theme.palette.accents_1, theme.palette.accents_2, theme.font.sans, SCALES.pt(0.5), SCALES.pr(0.5), SCALES.pb(0.5), SCALES.pl(0.5), resize, theme.palette.background]]]) + " " + (textareaProps && textareaProps.className != null && textareaProps.className || "")
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "12276481",
    dynamic: [theme.layout.radius, borderColor, color, SCALES.font(0.875), SCALES.height(1, 'auto'), SCALES.width(1, 'initial'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverBorder, theme.palette.accents_1, theme.palette.accents_2, theme.font.sans, SCALES.pt(0.5), SCALES.pr(0.5), SCALES.pb(0.5), SCALES.pl(0.5), resize, theme.palette.background]
  }, ".wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:".concat(theme.layout.radius, ";border:1px solid ").concat(borderColor, ";color:").concat(color, ";-webkit-transition:border 0.2s ease 0s,color 0.2s ease 0s;transition:border 0.2s ease 0s,color 0.2s ease 0s;min-width:12.5rem;max-width:95vw;--textarea-font-size:").concat(SCALES.font(0.875), ";--textarea-height:").concat(SCALES.height(1, 'auto'), ";width:").concat(SCALES.width(1, 'initial'), ";height:var(--textarea-height);margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.wrapper.hover.__jsx-style-dynamic-selector{border-color:").concat(hoverBorder, ";}.wrapper.disabled.__jsx-style-dynamic-selector{background-color:").concat(theme.palette.accents_1, ";border-color:").concat(theme.palette.accents_2, ";cursor:not-allowed;}textarea.__jsx-style-dynamic-selector{background-color:transparent;box-shadow:none;display:block;font-family:").concat(theme.font.sans, ";font-size:var(--textarea-font-size);width:100%;height:var(--textarea-height);border:none;outline:none;padding:").concat(SCALES.pt(0.5), " ").concat(SCALES.pr(0.5), " ").concat(SCALES.pb(0.5), " ").concat(SCALES.pl(0.5), ";resize:").concat(resize, ";}.disabled.__jsx-style-dynamic-selector>textarea.__jsx-style-dynamic-selector{cursor:not-allowed;}textarea.__jsx-style-dynamic-selector:-webkit-autofill,textarea.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:hover,textarea.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:active,textarea.__jsx-style-dynamic-selector:-webkit-autofill.__jsx-style-dynamic-selector:focus{-webkit-box-shadow:0 0 0 30px ").concat(theme.palette.background, " inset !important;}")));
});
TextareaComponent.defaultProps = defaultProps;
TextareaComponent.displayName = 'GeistTextarea';
var Textarea = withScale(TextareaComponent);
export default Textarea;