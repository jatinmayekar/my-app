import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["initialChecked", "checked", "disabled", "onChange", "type", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useTheme from '../use-theme';
import { getColors } from './styles';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  type: 'default',
  disabled: false,
  initialChecked: false,
  className: ''
};

var ToggleComponent = function ToggleComponent(_ref) {
  var initialChecked = _ref.initialChecked,
      checked = _ref.checked,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      type = _ref.type,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = useState(initialChecked),
      _useState2 = _slicedToArray(_useState, 2),
      selfChecked = _useState2[0],
      setSelfChecked = _useState2[1];

  var classes = useClasses('toggle', {
    checked: selfChecked,
    disabled: disabled
  });
  var changeHandle = useCallback(function (ev) {
    if (disabled) return;
    var selfEvent = {
      target: {
        checked: !selfChecked
      },
      stopPropagation: ev.stopPropagation,
      preventDefault: ev.preventDefault,
      nativeEvent: ev
    };
    setSelfChecked(!selfChecked);
    onChange && onChange(selfEvent);
  }, [disabled, selfChecked, onChange]);

  var _useMemo = useMemo(function () {
    return getColors(theme.palette, type);
  }, [theme.palette, type]),
      bg = _useMemo.bg;

  useEffect(function () {
    if (checked === undefined) return;
    setSelfChecked(checked);
  }, [checked]);
  return /*#__PURE__*/React.createElement("label", _extends({}, props, {
    className: _JSXStyle.dynamic([["4106206985", [disabled ? 'not-allowed' : 'pointer', SCALES.font(1), SCALES.height(0.875), SCALES.width(1.75), SCALES.pt(0.1875), SCALES.pr(0), SCALES.pb(0.1875), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_2, theme.palette.background, theme.palette.accents_2, theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_4, theme.palette.accents_4, bg]]]) + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    disabled: disabled,
    checked: selfChecked,
    onChange: changeHandle,
    className: _JSXStyle.dynamic([["4106206985", [disabled ? 'not-allowed' : 'pointer', SCALES.font(1), SCALES.height(0.875), SCALES.width(1.75), SCALES.pt(0.1875), SCALES.pr(0), SCALES.pb(0.1875), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_2, theme.palette.background, theme.palette.accents_2, theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_4, theme.palette.accents_4, bg]]])
  }), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["4106206985", [disabled ? 'not-allowed' : 'pointer', SCALES.font(1), SCALES.height(0.875), SCALES.width(1.75), SCALES.pt(0.1875), SCALES.pr(0), SCALES.pb(0.1875), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_2, theme.palette.background, theme.palette.accents_2, theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_4, theme.palette.accents_4, bg]]]) + " " + (classes || "")
  }, /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["4106206985", [disabled ? 'not-allowed' : 'pointer', SCALES.font(1), SCALES.height(0.875), SCALES.width(1.75), SCALES.pt(0.1875), SCALES.pr(0), SCALES.pb(0.1875), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_2, theme.palette.background, theme.palette.accents_2, theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_4, theme.palette.accents_4, bg]]]) + " " + "inner"
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4106206985",
    dynamic: [disabled ? 'not-allowed' : 'pointer', SCALES.font(1), SCALES.height(0.875), SCALES.width(1.75), SCALES.pt(0.1875), SCALES.pr(0), SCALES.pb(0.1875), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_2, theme.palette.background, theme.palette.accents_2, theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_4, theme.palette.accents_4, bg]
  }, "label.__jsx-style-dynamic-selector{-webkit-tap-highlight-color:transparent;display:inline-block;vertical-align:middle;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;cursor:".concat(disabled ? 'not-allowed' : 'pointer', ";--toggle-font-size:").concat(SCALES.font(1), ";--toggle-height:").concat(SCALES.height(0.875), ";width:").concat(SCALES.width(1.75), ";height:var(--toggle-height);padding:").concat(SCALES.pt(0.1875), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0.1875), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}input.__jsx-style-dynamic-selector{overflow:hidden;visibility:hidden;height:0;opacity:0;width:0;position:absolute;background-color:transparent;z-index:-1;}.toggle.__jsx-style-dynamic-selector{height:var(--toggle-height);width:100%;border-radius:var(--toggle-height);-webkit-transition-delay:0.12s;transition-delay:0.12s;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-transition-property:background,border;transition-property:background,border;-webkit-transition-timing-function:cubic-bezier(0,0,0.2,1);transition-timing-function:cubic-bezier(0,0,0.2,1);position:relative;border:1px solid transparent;background-color:").concat(theme.palette.accents_2, ";padding:0;}.inner.__jsx-style-dynamic-selector{width:calc(var(--toggle-height) - 2px);height:calc(var(--toggle-height) - 2px);position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:1px;box-shadow:rgba(0,0,0,0.2) 0 1px 2px 0,rgba(0,0,0,0.1) 0 1px 3px 0;-webkit-transition:left 280ms cubic-bezier(0,0,0.2,1);transition:left 280ms cubic-bezier(0,0,0.2,1);border-radius:50%;background-color:").concat(theme.palette.background, ";}.disabled.__jsx-style-dynamic-selector{border-color:").concat(theme.palette.accents_2, ";background-color:").concat(theme.palette.accents_1, ";}.disabled.__jsx-style-dynamic-selector>.inner.__jsx-style-dynamic-selector{background-color:").concat(theme.palette.accents_2, ";}.disabled.checked.__jsx-style-dynamic-selector{border-color:").concat(theme.palette.accents_4, ";background-color:").concat(theme.palette.accents_4, ";}.checked.__jsx-style-dynamic-selector{background-color:").concat(bg, ";}.checked.__jsx-style-dynamic-selector>.inner.__jsx-style-dynamic-selector{left:calc(100% - (var(--toggle-height) - 2px));box-shadow:none;}")));
};

ToggleComponent.defaultProps = defaultProps;
ToggleComponent.displayName = 'GeistToggle';
var Toggle = withScale(ToggleComponent);
export default Toggle;