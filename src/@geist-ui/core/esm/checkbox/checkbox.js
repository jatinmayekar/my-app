import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["checked", "initialChecked", "disabled", "onChange", "className", "children", "type", "value"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useCheckbox } from './checkbox-context';
import CheckboxIcon from './checkbox.icon';
import useWarning from '../utils/use-warning';
import { getColors } from './styles';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  disabled: false,
  type: 'default',
  initialChecked: false,
  className: '',
  value: ''
};

var CheckboxComponent = function CheckboxComponent(_ref) {
  var checked = _ref.checked,
      initialChecked = _ref.initialChecked,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      className = _ref.className,
      children = _ref.children,
      type = _ref.type,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = useState(initialChecked),
      _useState2 = _slicedToArray(_useState, 2),
      selfChecked = _useState2[0],
      setSelfChecked = _useState2[1];

  var _useCheckbox = useCheckbox(),
      updateState = _useCheckbox.updateState,
      inGroup = _useCheckbox.inGroup,
      disabledAll = _useCheckbox.disabledAll,
      values = _useCheckbox.values;

  var isDisabled = inGroup ? disabledAll || disabled : disabled;
  var classes = useClasses('checkbox', className);

  if (inGroup && checked) {
    useWarning('Remove props "checked" when [Checkbox] component is in the group.', 'Checkbox');
  }

  if (inGroup) {
    useEffect(function () {
      var next = values.includes(value);
      if (next === selfChecked) return;
      setSelfChecked(next);
    }, [values.join(',')]);
  }

  var _useMemo = useMemo(function () {
    return getColors(theme.palette, type);
  }, [theme.palette, type]),
      fill = _useMemo.fill,
      bg = _useMemo.bg;

  var changeHandle = useCallback(function (ev) {
    if (isDisabled) return;
    var selfEvent = {
      target: {
        checked: !selfChecked
      },
      stopPropagation: ev.stopPropagation,
      preventDefault: ev.preventDefault,
      nativeEvent: ev
    };

    if (inGroup && updateState) {
      updateState && updateState(value, !selfChecked);
    }

    setSelfChecked(!selfChecked);
    onChange && onChange(selfEvent);
  }, [updateState, onChange, isDisabled, selfChecked]);
  useEffect(function () {
    if (checked === undefined) return;
    setSelfChecked(checked);
  }, [checked]);
  return /*#__PURE__*/React.createElement("label", {
    className: _JSXStyle.dynamic([["4126727675", [SCALES.font(0.875), isDisabled ? 'not-allowed' : 'pointer', isDisabled ? 0.75 : 1, SCALES.width(1, 'auto'), SCALES.height(1, 'var(--checkbox-size)'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? 'not-allowed' : 'pointer']]]) + " " + (classes || "")
  }, /*#__PURE__*/React.createElement(CheckboxIcon, {
    fill: fill,
    bg: bg,
    disabled: isDisabled,
    checked: selfChecked
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: isDisabled,
    checked: selfChecked,
    onChange: changeHandle
  }, props, {
    className: _JSXStyle.dynamic([["4126727675", [SCALES.font(0.875), isDisabled ? 'not-allowed' : 'pointer', isDisabled ? 0.75 : 1, SCALES.width(1, 'auto'), SCALES.height(1, 'var(--checkbox-size)'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? 'not-allowed' : 'pointer']]]) + " " + (props && props.className != null && props.className || "")
  })), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["4126727675", [SCALES.font(0.875), isDisabled ? 'not-allowed' : 'pointer', isDisabled ? 0.75 : 1, SCALES.width(1, 'auto'), SCALES.height(1, 'var(--checkbox-size)'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? 'not-allowed' : 'pointer']]]) + " " + "text"
  }, children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4126727675",
    dynamic: [SCALES.font(0.875), isDisabled ? 'not-allowed' : 'pointer', isDisabled ? 0.75 : 1, SCALES.width(1, 'auto'), SCALES.height(1, 'var(--checkbox-size)'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), isDisabled ? 'not-allowed' : 'pointer']
  }, ".checkbox.__jsx-style-dynamic-selector{--checkbox-size:".concat(SCALES.font(0.875), ";display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:").concat(isDisabled ? 'not-allowed' : 'pointer', ";opacity:").concat(isDisabled ? 0.75 : 1, ";line-height:var(--checkbox-size);width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'var(--checkbox-size)'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.text.__jsx-style-dynamic-selector{font-size:var(--checkbox-size);line-height:var(--checkbox-size);padding-left:calc(var(--checkbox-size) * 0.5);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:").concat(isDisabled ? 'not-allowed' : 'pointer', ";}input.__jsx-style-dynamic-selector{opacity:0;outline:none;position:absolute;width:0;height:0;margin:0;padding:0;z-index:-1;font-size:0;background-color:transparent;}")));
};

CheckboxComponent.defaultProps = defaultProps;
CheckboxComponent.displayName = 'GeistCheckbox';
var Checkbox = withScale(CheckboxComponent);
export default Checkbox;