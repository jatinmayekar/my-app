import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["disabled", "onChange", "value", "children", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useMemo, useState } from 'react';
import { CheckboxContext } from './checkbox-context';
import useWarning from '../utils/use-warning';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  disabled: false,
  className: ''
};

var CheckboxGroupComponent = function CheckboxGroupComponent(_ref) {
  var disabled = _ref.disabled,
      onChange = _ref.onChange,
      value = _ref.value,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      selfVal = _useState2[0],
      setSelfVal = _useState2[1];

  var classes = useClasses('group', className);

  if (!value) {
    value = [];
    useWarning('Props "value" is required.', 'Checkbox Group');
  }

  var updateState = function updateState(val, checked) {
    var removed = selfVal.filter(function (v) {
      return v !== val;
    });
    var next = checked ? [].concat(_toConsumableArray(removed), [val]) : removed;
    setSelfVal(next);
    onChange && onChange(next);
  };

  var providerValue = useMemo(function () {
    return {
      updateState: updateState,
      disabledAll: disabled,
      inGroup: true,
      values: selfVal
    };
  }, [disabled, selfVal]);
  useEffect(function () {
    setSelfVal(value);
  }, [value.join(',')]);
  return /*#__PURE__*/React.createElement(CheckboxContext.Provider, {
    value: providerValue
  }, /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["1727163828", [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.font(1), SCALES.font(1)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1727163828",
    dynamic: [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.font(1), SCALES.font(1)]
  }, ".group.__jsx-style-dynamic-selector{width:".concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.group.__jsx-style-dynamic-selector label{margin-right:calc(").concat(SCALES.font(1), " * 2);--checkbox-size:").concat(SCALES.font(1), ";}.group.__jsx-style-dynamic-selector label:last-of-type{margin-right:0;}"))));
};

CheckboxGroupComponent.defaultProps = defaultProps;
CheckboxGroupComponent.displayName = 'GeistCheckboxGroup';
var CheckboxGroup = withScale(CheckboxGroupComponent);
export default CheckboxGroup;