import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "checked", "onChange", "disabled", "type", "value", "children"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useMemo, useState } from 'react';
import useTheme from '../use-theme';
import { useRadioContext } from './radio-context';
import RadioDescription from './radio-description';
import { pickChild } from '../utils/collections';
import useWarning from '../utils/use-warning';
import { getColors } from './styles';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  type: 'default',
  disabled: false,
  className: ''
};

var RadioComponent = function RadioComponent(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      type = _ref.type,
      radioValue = _ref.value,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = useState(!!checked),
      _useState2 = _slicedToArray(_useState, 2),
      selfChecked = _useState2[0],
      setSelfChecked = _useState2[1];

  var _useRadioContext = useRadioContext(),
      groupValue = _useRadioContext.value,
      disabledAll = _useRadioContext.disabledAll,
      inGroup = _useRadioContext.inGroup,
      updateState = _useRadioContext.updateState;

  var _pickChild = pickChild(children, RadioDescription),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      withoutDescChildren = _pickChild2[0],
      DescChildren = _pickChild2[1];

  if (inGroup) {
    if (checked !== undefined) {
      useWarning('Remove props "checked" if in the Radio.Group.', 'Radio');
    }

    if (radioValue === undefined) {
      useWarning('Props "value" must be deinfed if in the Radio.Group.', 'Radio');
    }

    useEffect(function () {
      setSelfChecked(groupValue === radioValue);
    }, [groupValue, radioValue]);
  }

  var _useMemo = useMemo(function () {
    return getColors(theme.palette, type);
  }, [theme.palette, type]),
      label = _useMemo.label,
      border = _useMemo.border,
      bg = _useMemo.bg;

  var isDisabled = useMemo(function () {
    return disabled || disabledAll;
  }, [disabled, disabledAll]);

  var changeHandler = function changeHandler(event) {
    if (isDisabled) return;
    var selfEvent = {
      target: {
        checked: !selfChecked
      },
      stopPropagation: event.stopPropagation,
      preventDefault: event.preventDefault,
      nativeEvent: event
    };
    setSelfChecked(!selfChecked);

    if (inGroup) {
      updateState && updateState(radioValue);
    }

    onChange && onChange(selfEvent);
  };

  useEffect(function () {
    if (checked === undefined) return;
    setSelfChecked(Boolean(checked));
  }, [checked]);
  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? 'not-allowed' : 'pointer', border, isDisabled ? theme.palette.accents_4 : bg]]]) + " " + (useClasses('radio', className) || "")
  }, /*#__PURE__*/React.createElement("label", {
    className: _JSXStyle.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? 'not-allowed' : 'pointer', border, isDisabled ? theme.palette.accents_4 : bg]]])
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    value: radioValue,
    checked: selfChecked,
    onChange: changeHandler
  }, props, {
    className: _JSXStyle.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? 'not-allowed' : 'pointer', border, isDisabled ? theme.palette.accents_4 : bg]]]) + " " + (props && props.className != null && props.className || "")
  })), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? 'not-allowed' : 'pointer', border, isDisabled ? theme.palette.accents_4 : bg]]]) + " " + "name"
  }, /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["2664604043", [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? 'not-allowed' : 'pointer', border, isDisabled ? theme.palette.accents_4 : bg]]]) + " " + (useClasses('point', {
      active: selfChecked
    }) || "")
  }), withoutDescChildren), DescChildren && DescChildren), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2664604043",
    dynamic: [SCALES.font(1), SCALES.width(1, 'initial'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? theme.palette.accents_4 : label, isDisabled ? 'not-allowed' : 'pointer', border, isDisabled ? theme.palette.accents_4 : bg]
  }, "input.__jsx-style-dynamic-selector{opacity:0;visibility:hidden;overflow:hidden;width:1px;height:1px;top:-1000px;right:-1000px;position:fixed;font-size:0;}.radio.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;--radio-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'initial'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}label.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;color:").concat(isDisabled ? theme.palette.accents_4 : label, ";cursor:").concat(isDisabled ? 'not-allowed' : 'pointer', ";}.name.__jsx-style-dynamic-selector{font-size:var(--radio-size);font-weight:bold;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.point.__jsx-style-dynamic-selector{height:var(--radio-size);width:var(--radio-size);border-radius:50%;border:1px solid ").concat(border, ";-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;position:relative;display:inline-block;-webkit-transform:scale(0.875);-ms-transform:scale(0.875);transform:scale(0.875);margin-right:calc(var(--radio-size) * 0.375);}.point.__jsx-style-dynamic-selector:before{content:'';position:absolute;left:-1px;top:-1px;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);height:var(--radio-size);width:var(--radio-size);border-radius:50%;background-color:").concat(isDisabled ? theme.palette.accents_4 : bg, ";}.active.__jsx-style-dynamic-selector:before{-webkit-transform:scale(0.875);-ms-transform:scale(0.875);transform:scale(0.875);-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;}")));
};

RadioComponent.defaultProps = defaultProps;
RadioComponent.displayName = 'GeistRadio';
var Radio = withScale(RadioComponent);
export default Radio;