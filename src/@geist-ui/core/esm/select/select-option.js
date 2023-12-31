import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["value", "className", "children", "disabled", "divider", "label", "preventAllEvents"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import { useSelectContext } from './select-context';
import useWarning from '../utils/use-warning';
import Ellipsis from '../shared/ellipsis';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  disabled: false,
  divider: false,
  label: false,
  className: '',
  preventAllEvents: false
};

var SelectOptionComponent = function SelectOptionComponent(_ref) {
  var identValue = _ref.value,
      className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      divider = _ref.divider,
      label = _ref.label,
      preventAllEvents = _ref.preventAllEvents,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useSelectContext = useSelectContext(),
      updateValue = _useSelectContext.updateValue,
      value = _useSelectContext.value,
      disableAll = _useSelectContext.disableAll;

  var isDisabled = useMemo(function () {
    return disabled || disableAll;
  }, [disabled, disableAll]);
  var isLabel = useMemo(function () {
    return label || divider;
  }, [label, divider]);
  var classes = useClasses('option', {
    divider: divider,
    label: label
  }, className);

  if (!isLabel && identValue === undefined) {
    useWarning('The props "value" is required.', 'Select Option');
  }

  var selected = useMemo(function () {
    if (!value) return false;

    if (typeof value === 'string') {
      return identValue === value;
    }

    return value.includes("".concat(identValue));
  }, [identValue, value]);
  var bgColor = useMemo(function () {
    if (isDisabled) return theme.palette.accents_1;
    return selected ? theme.palette.accents_2 : theme.palette.background;
  }, [selected, isDisabled, theme.palette]);
  var hoverBgColor = useMemo(function () {
    if (isDisabled || isLabel || selected) return bgColor;
    return theme.palette.accents_1;
  }, [selected, isDisabled, theme.palette, isLabel, bgColor]);
  var color = useMemo(function () {
    if (isDisabled) return theme.palette.accents_4;
    return selected ? theme.palette.foreground : theme.palette.accents_5;
  }, [selected, isDisabled, theme.palette]);

  var clickHandler = function clickHandler(event) {
    if (preventAllEvents) return;
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    event.preventDefault();
    if (isDisabled || isLabel) return;
    updateValue && updateValue(identValue);
  };

  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: clickHandler
  }, props, {
    className: _JSXStyle.dynamic([["199367556", [bgColor, color, isDisabled ? 'not-allowed' : 'pointer', SCALES.font(0.75), SCALES.width(1, '100%'), SCALES.height(2.25), SCALES.pt(0), SCALES.pr(0.667), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverBgColor, theme.palette.accents_7, theme.palette.border, SCALES.width(1, '100%'), SCALES.height(1, 0), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0.5), SCALES.mr(0), SCALES.mb(0.5), SCALES.ml(0), theme.palette.accents_7, theme.palette.border, SCALES.font(0.875), SCALES.width(1, '100%')]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React.createElement(Ellipsis, {
    height: SCALES.height(2.25)
  }, children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "199367556",
    dynamic: [bgColor, color, isDisabled ? 'not-allowed' : 'pointer', SCALES.font(0.75), SCALES.width(1, '100%'), SCALES.height(2.25), SCALES.pt(0), SCALES.pr(0.667), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverBgColor, theme.palette.accents_7, theme.palette.border, SCALES.width(1, '100%'), SCALES.height(1, 0), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0.5), SCALES.mr(0), SCALES.mb(0.5), SCALES.ml(0), theme.palette.accents_7, theme.palette.border, SCALES.font(0.875), SCALES.width(1, '100%')]
  }, ".option.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:100%;box-sizing:border-box;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:normal;background-color:".concat(bgColor, ";color:").concat(color, ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;cursor:").concat(isDisabled ? 'not-allowed' : 'pointer', ";-webkit-transition:background 0.2s ease 0s,border-color 0.2s ease 0s;transition:background 0.2s ease 0s,border-color 0.2s ease 0s;--select-font-size:").concat(SCALES.font(0.75), ";font-size:var(--select-font-size);width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(2.25), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0.667), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0.667), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.option.__jsx-style-dynamic-selector:hover{background-color:").concat(hoverBgColor, ";color:").concat(theme.palette.accents_7, ";}.divider.__jsx-style-dynamic-selector{line-height:0;overflow:hidden;border-top:1px solid ").concat(theme.palette.border, ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, 0), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0.5), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0.5), " ").concat(SCALES.ml(0), ";}.label.__jsx-style-dynamic-selector{color:").concat(theme.palette.accents_7, ";border-bottom:1px solid ").concat(theme.palette.border, ";text-transform:capitalize;cursor:default;font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, '100%'), ";font-weight:500;}")));
};

SelectOptionComponent.defaultProps = defaultProps;
SelectOptionComponent.displayName = 'GeistSelectOption';
var SelectOption = withScale(SelectOptionComponent);
export default SelectOption;