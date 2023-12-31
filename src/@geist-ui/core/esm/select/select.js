import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "type", "disabled", "initialValue", "value", "icon", "onChange", "pure", "multiple", "clearable", "placeholder", "className", "dropdownClassName", "dropdownStyle", "disableMatchWidth", "getPopupContainer", "onDropdownVisibleChange"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import useTheme from '../use-theme';
import useCurrentState from '../utils/use-current-state';
import { pickChildByProps } from '../utils/collections';
import SelectIcon from './select-icon';
import SelectDropdown from './select-dropdown';
import SelectMultipleValue from './select-multiple-value';
import Grid from '../grid';
import { SelectContext } from './select-context';
import { getColors } from './styles';
import Ellipsis from '../shared/ellipsis';
import SelectInput from './select-input';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  disabled: false,
  type: 'default',
  icon: SelectIcon,
  pure: false,
  multiple: false,
  clearable: true,
  className: '',
  disableMatchWidth: false,
  onDropdownVisibleChange: function onDropdownVisibleChange() {}
};
var SelectComponent = /*#__PURE__*/React.forwardRef(function (_ref, selectRef) {
  var children = _ref.children,
      type = _ref.type,
      disabled = _ref.disabled,
      init = _ref.initialValue,
      customValue = _ref.value,
      Icon = _ref.icon,
      onChange = _ref.onChange,
      pure = _ref.pure,
      multiple = _ref.multiple,
      clearable = _ref.clearable,
      placeholder = _ref.placeholder,
      className = _ref.className,
      dropdownClassName = _ref.dropdownClassName,
      dropdownStyle = _ref.dropdownStyle,
      disableMatchWidth = _ref.disableMatchWidth,
      getPopupContainer = _ref.getPopupContainer,
      onDropdownVisibleChange = _ref.onDropdownVisibleChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var ref = useRef(null);
  var inputRef = useRef(null);
  var dropdownRef = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      selectFocus = _useState4[0],
      setSelectFocus = _useState4[1];

  var _useCurrentState = useCurrentState(function () {
    if (!multiple) return init;
    if (Array.isArray(init)) return init;
    return typeof init === 'undefined' ? [] : [init];
  }),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      value = _useCurrentState2[0],
      setValue = _useCurrentState2[1],
      valueRef = _useCurrentState2[2];

  var isEmpty = useMemo(function () {
    if (!Array.isArray(value)) return !value;
    return value.length === 0;
  }, [value]);

  var _useMemo = useMemo(function () {
    return getColors(theme.palette, type);
  }, [theme.palette, type]),
      border = _useMemo.border,
      borderActive = _useMemo.borderActive,
      iconBorder = _useMemo.iconBorder,
      placeholderColor = _useMemo.placeholderColor;

  var updateVisible = function updateVisible(next) {
    onDropdownVisibleChange(next);
    setVisible(next);
  };

  var updateValue = function updateValue(next) {
    setValue(function (last) {
      if (!Array.isArray(last)) return next;
      if (!last.includes(next)) return [].concat(_toConsumableArray(last), [next]);
      return last.filter(function (item) {
        return item !== next;
      });
    });
    onChange && onChange(valueRef.current);

    if (!multiple) {
      updateVisible(false);
    }
  };

  var initialValue = useMemo(function () {
    return {
      value: value,
      visible: visible,
      updateValue: updateValue,
      updateVisible: updateVisible,
      ref: ref,
      disableAll: disabled
    };
  }, [visible, disabled, ref, value, multiple]);

  var clickHandler = function clickHandler(event) {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    event.preventDefault();
    if (disabled) return;
    updateVisible(!visible);
    event.preventDefault();
  };

  var mouseDownHandler = function mouseDownHandler(event) {
    /* istanbul ignore next */
    if (visible) {
      event.preventDefault();
    }
  };

  useEffect(function () {
    if (customValue === undefined) return;
    setValue(customValue);
  }, [customValue]);
  useImperativeHandle(selectRef, function () {
    return {
      focus: function focus() {
        var _inputRef$current;

        return (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
      },
      blur: function blur() {
        var _inputRef$current2;

        return (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.blur();
      },
      scrollTo: function scrollTo(options) {
        var _dropdownRef$current;

        return (_dropdownRef$current = dropdownRef.current) === null || _dropdownRef$current === void 0 ? void 0 : _dropdownRef$current.scrollTo(options);
      }
    };
  }, [inputRef, dropdownRef]);
  var selectedChild = useMemo(function () {
    var _pickChildByProps = pickChildByProps(children, 'value', value),
        _pickChildByProps2 = _slicedToArray(_pickChildByProps, 2),
        optionChildren = _pickChildByProps2[1];

    return React.Children.map(optionChildren, function (child) {
      if (! /*#__PURE__*/React.isValidElement(child)) return null;
      var el = /*#__PURE__*/React.cloneElement(child, {
        preventAllEvents: true
      });
      if (!multiple) return el;
      return /*#__PURE__*/React.createElement(SelectMultipleValue, {
        disabled: disabled,
        onClear: clearable ? function () {
          return updateValue(child.props.value);
        } : null
      }, el);
    });
  }, [value, children, multiple]);

  var onInputBlur = function onInputBlur() {
    updateVisible(false);
    setSelectFocus(false);
  };

  var classes = useClasses('select', {
    active: selectFocus || visible,
    multiple: multiple
  }, className);
  return /*#__PURE__*/React.createElement(SelectContext.Provider, {
    value: initialValue
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    onClick: clickHandler,
    onMouseDown: mouseDownHandler
  }, props, {
    className: _JSXStyle.dynamic([["3282295248", [disabled ? 'not-allowed' : 'pointer', border, theme.layout.radius, disabled ? theme.palette.accents_1 : theme.palette.background, SCALES.font(0.875), SCALES.height(2.25), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0.334), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.334), SCALES.pr(0.334), SCALES.pb(0.334), SCALES.pl(0.667), disabled ? theme.palette.border : borderActive, disabled ? theme.palette.accents_5 : borderActive, disabled ? theme.palette.accents_4 : theme.palette.foreground, placeholderColor, theme.layout.gapQuarter, visible ? '180' : '0', iconBorder]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React.createElement(SelectInput, {
    ref: inputRef,
    visible: visible,
    onBlur: onInputBlur,
    onFocus: function onFocus() {
      return setSelectFocus(true);
    }
  }), isEmpty && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["3282295248", [disabled ? 'not-allowed' : 'pointer', border, theme.layout.radius, disabled ? theme.palette.accents_1 : theme.palette.background, SCALES.font(0.875), SCALES.height(2.25), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0.334), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.334), SCALES.pr(0.334), SCALES.pb(0.334), SCALES.pl(0.667), disabled ? theme.palette.border : borderActive, disabled ? theme.palette.accents_5 : borderActive, disabled ? theme.palette.accents_4 : theme.palette.foreground, placeholderColor, theme.layout.gapQuarter, visible ? '180' : '0', iconBorder]]]) + " " + "value placeholder"
  }, /*#__PURE__*/React.createElement(Ellipsis, {
    height: "var(--select-height)"
  }, placeholder)), value && !multiple && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["3282295248", [disabled ? 'not-allowed' : 'pointer', border, theme.layout.radius, disabled ? theme.palette.accents_1 : theme.palette.background, SCALES.font(0.875), SCALES.height(2.25), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0.334), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.334), SCALES.pr(0.334), SCALES.pb(0.334), SCALES.pl(0.667), disabled ? theme.palette.border : borderActive, disabled ? theme.palette.accents_5 : borderActive, disabled ? theme.palette.accents_4 : theme.palette.foreground, placeholderColor, theme.layout.gapQuarter, visible ? '180' : '0', iconBorder]]]) + " " + "value"
  }, selectedChild), value && multiple && /*#__PURE__*/React.createElement(Grid.Container, {
    gap: 0.5
  }, selectedChild), /*#__PURE__*/React.createElement(SelectDropdown, {
    ref: dropdownRef,
    visible: visible,
    className: dropdownClassName,
    dropdownStyle: dropdownStyle,
    disableMatchWidth: disableMatchWidth,
    getPopupContainer: getPopupContainer
  }, children), !pure && /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3282295248", [disabled ? 'not-allowed' : 'pointer', border, theme.layout.radius, disabled ? theme.palette.accents_1 : theme.palette.background, SCALES.font(0.875), SCALES.height(2.25), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0.334), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.334), SCALES.pr(0.334), SCALES.pb(0.334), SCALES.pl(0.667), disabled ? theme.palette.border : borderActive, disabled ? theme.palette.accents_5 : borderActive, disabled ? theme.palette.accents_4 : theme.palette.foreground, placeholderColor, theme.layout.gapQuarter, visible ? '180' : '0', iconBorder]]]) + " " + "icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    className: _JSXStyle.dynamic([["3282295248", [disabled ? 'not-allowed' : 'pointer', border, theme.layout.radius, disabled ? theme.palette.accents_1 : theme.palette.background, SCALES.font(0.875), SCALES.height(2.25), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0.334), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.334), SCALES.pr(0.334), SCALES.pb(0.334), SCALES.pl(0.667), disabled ? theme.palette.border : borderActive, disabled ? theme.palette.accents_5 : borderActive, disabled ? theme.palette.accents_4 : theme.palette.foreground, placeholderColor, theme.layout.gapQuarter, visible ? '180' : '0', iconBorder]]])
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3282295248",
    dynamic: [disabled ? 'not-allowed' : 'pointer', border, theme.layout.radius, disabled ? theme.palette.accents_1 : theme.palette.background, SCALES.font(0.875), SCALES.height(2.25), SCALES.width(1, 'initial'), SCALES.pt(0), SCALES.pr(0.334), SCALES.pb(0), SCALES.pl(0.667), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.334), SCALES.pr(0.334), SCALES.pb(0.334), SCALES.pl(0.667), disabled ? theme.palette.border : borderActive, disabled ? theme.palette.accents_5 : borderActive, disabled ? theme.palette.accents_4 : theme.palette.foreground, placeholderColor, theme.layout.gapQuarter, visible ? '180' : '0', iconBorder]
  }, ".select.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;position:relative;cursor:".concat(disabled ? 'not-allowed' : 'pointer', ";max-width:90vw;overflow:hidden;-webkit-transition:border 150ms ease-in 0s,color 200ms ease-out 0s, box-shadow 200ms ease 0s;transition:border 150ms ease-in 0s,color 200ms ease-out 0s, box-shadow 200ms ease 0s;border:1px solid ").concat(border, ";border-radius:").concat(theme.layout.radius, ";background-color:").concat(disabled ? theme.palette.accents_1 : theme.palette.background, ";--select-font-size:").concat(SCALES.font(0.875), ";--select-height:").concat(SCALES.height(2.25), ";min-width:11.5em;width:").concat(SCALES.width(1, 'initial'), ";height:var(--select-height);padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0.334), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0.667), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.multiple.__jsx-style-dynamic-selector{height:auto;min-height:var(--select-height);padding:").concat(SCALES.pt(0.334), " ").concat(SCALES.pr(0.334), " ").concat(SCALES.pb(0.334), " ").concat(SCALES.pl(0.667), ";}.select.active.__jsx-style-dynamic-selector,.select.__jsx-style-dynamic-selector:hover{border-color:").concat(disabled ? theme.palette.border : borderActive, ";}.select.active.icon.__jsx-style-dynamic-selector,.select.__jsx-style-dynamic-selector:hover .icon.__jsx-style-dynamic-selector{color:").concat(disabled ? theme.palette.accents_5 : borderActive, ";}.value.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex:1;-ms-flex:1;flex:1;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1;padding:0;margin-right:1.25em;font-size:var(--select-font-size);color:").concat(disabled ? theme.palette.accents_4 : theme.palette.foreground, ";width:calc(100% - 1.25em);}.value.__jsx-style-dynamic-selector>div,.value.__jsx-style-dynamic-selector>div:hover{border-radius:0;background-color:transparent;padding:0;margin:0;color:inherit;}.placeholder.__jsx-style-dynamic-selector{color:").concat(placeholderColor, ";}.icon.__jsx-style-dynamic-selector{position:absolute;right:").concat(theme.layout.gapQuarter, ";font-size:var(--select-font-size);top:50%;bottom:0;-webkit-transform:translateY(-50%) rotate(").concat(visible ? '180' : '0', "deg);-ms-transform:translateY(-50%) rotate(").concat(visible ? '180' : '0', "deg);transform:translateY(-50%) rotate(").concat(visible ? '180' : '0', "deg);pointer-events:none;-webkit-transition:-webkit-transform 200ms ease;-webkit-transition:transform 200ms ease;transition:transform 200ms ease;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:").concat(iconBorder, ";}"))));
});
SelectComponent.defaultProps = defaultProps;
SelectComponent.displayName = 'GeistSelect';
var Select = withScale(SelectComponent);
export default Select;