import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["disabled", "onChange", "value", "children", "className", "initialValue", "useRow"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useMemo, useState } from 'react';
import { RadioContext } from './radio-context';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  disabled: false,
  className: '',
  useRow: false
};

var RadioGroupComponent = function RadioGroupComponent(_ref) {
  var disabled = _ref.disabled,
      onChange = _ref.onChange,
      value = _ref.value,
      children = _ref.children,
      className = _ref.className,
      initialValue = _ref.initialValue,
      useRow = _ref.useRow,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      selfVal = _useState2[0],
      setSelfVal = _useState2[1];

  var updateState = function updateState(nextValue) {
    setSelfVal(nextValue);
    onChange && onChange(nextValue);
  };

  var providerValue = useMemo(function () {
    return {
      updateState: updateState,
      disabledAll: disabled,
      inGroup: true,
      value: selfVal
    };
  }, [disabled, selfVal]);
  useEffect(function () {
    if (value === undefined) return;
    setSelfVal(value);
  }, [value]);
  return /*#__PURE__*/React.createElement(RadioContext.Provider, {
    value: providerValue
  }, /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["1223822443", [useRow ? 'col' : 'column', SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), useRow ? 0 : 'var(--radio-group-gap)', useRow ? 'var(--radio-group-gap)' : 0, SCALES.font(1)]]]) + " " + (props && props.className != null && props.className || useClasses('radio-group', className) || "")
  }), children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1223822443",
    dynamic: [useRow ? 'col' : 'column', SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), useRow ? 0 : 'var(--radio-group-gap)', useRow ? 'var(--radio-group-gap)' : 0, SCALES.font(1)]
  }, ".radio-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:".concat(useRow ? 'col' : 'column', ";-ms-flex-direction:").concat(useRow ? 'col' : 'column', ";flex-direction:").concat(useRow ? 'col' : 'column', ";--radio-group-gap:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.radio-group.__jsx-style-dynamic-selector .radio{margin-top:").concat(useRow ? 0 : 'var(--radio-group-gap)', ";margin-left:").concat(useRow ? 'var(--radio-group-gap)' : 0, ";--radio-size:").concat(SCALES.font(1), ";}.radio-group.__jsx-style-dynamic-selector .radio:first-of-type{margin:0;}")));
};

RadioGroupComponent.defaultProps = defaultProps;
RadioGroupComponent.displayName = 'GeistRadioGroup';
var RadioGroup = withScale(RadioGroupComponent);
export default RadioGroup;