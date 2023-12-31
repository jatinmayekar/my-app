import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "type", "auto", "className", "disabled", "loading", "icon"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useCallback, useMemo, useRef, useState } from 'react';
import useTheme from '../use-theme';
import useClickAway from '../utils/use-click-away';
import { getColor } from './styles';
import ButtonDropdownIcon from './icon';
import ButtonDropdownItem from './button-dropdown-item';
import { ButtonDropdownContext } from './button-dropdown-context';
import { pickChild, pickChildByProps } from '../utils/collections';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  type: 'default',
  auto: false,
  loading: false,
  disabled: false,
  className: ''
};

var stopPropagation = function stopPropagation(event) {
  event.stopPropagation();
  event.nativeEvent.stopImmediatePropagation();
};

var ButtonDropdownComponent = function ButtonDropdownComponent(_ref) {
  var children = _ref.children,
      type = _ref.type,
      auto = _ref.auto,
      className = _ref.className,
      disabled = _ref.disabled,
      loading = _ref.loading,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var ref = useRef(null);
  var theme = useTheme();
  var colors = getColor(theme.palette, type);
  var itemChildren = pickChild(children, ButtonDropdownItem)[1];

  var _pickChildByProps = pickChildByProps(itemChildren, 'main', true),
      _pickChildByProps2 = _slicedToArray(_pickChildByProps, 2),
      itemChildrenWithoutMain = _pickChildByProps2[0],
      mainItemChildren = _pickChildByProps2[1];

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var clickHandler = useCallback(function (event) {
    event.preventDefault();
    stopPropagation(event);
    if (disabled || loading) return;
    setVisible(!visible);
  }, [visible]);
  var initialValue = {
    type: type,
    auto: auto,
    disabled: disabled,
    loading: loading
  };
  var bgColor = useMemo(function () {
    if (disabled || loading) return theme.palette.accents_1;
    return visible ? colors.hoverBgColor : colors.bgColor;
  }, [visible, colors, theme.palette]);
  var paddingLeft = auto ? SCALES.pl(1.15) : SCALES.pl(1.375),
      paddingRight = auto ? SCALES.pr(1.15) : SCALES.pr(1.375);
  useClickAway(ref, function () {
    return setVisible(false);
  });
  return /*#__PURE__*/React.createElement(ButtonDropdownContext.Provider, {
    value: initialValue
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    onClick: stopPropagation
  }, props, {
    className: _JSXStyle.dynamic([["1706659335", [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]]]) + " " + (props && props.className != null && props.className || useClasses('btn-dropdown', className) || "")
  }), mainItemChildren, /*#__PURE__*/React.createElement("details", {
    open: visible,
    className: _JSXStyle.dynamic([["1706659335", [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]]])
  }, /*#__PURE__*/React.createElement("summary", {
    onClick: clickHandler,
    className: _JSXStyle.dynamic([["1706659335", [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]]])
  }, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["1706659335", [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]]]) + " " + "dropdown-box"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.color,
      height: SCALES.height(2.5),
      width: SCALES.height(2.5)
    },
    className: _JSXStyle.dynamic([["1706659335", [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]]]) + " " + "dropdown-icon"
  }, icon) : /*#__PURE__*/React.createElement(ButtonDropdownIcon, {
    color: colors.color,
    height: SCALES.height(2.5)
  }))), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["1706659335", [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]]]) + " " + "content"
  }, itemChildrenWithoutMain)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1706659335",
    dynamic: [theme.palette.border, theme.layout.radius, SCALES.height(2.5), auto ? 'min-content' : SCALES.width(10.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.font(0.875), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, SCALES.height(2.5), colors.color, bgColor, SCALES.height(2.5), colors.borderLeftColor, disabled || loading ? 'not-allowed' : 'pointer', colors.hoverBorder, colors.hoverBgColor, theme.layout.radius, theme.expressiveness.shadowLarge, theme.layout.gapHalf, theme.palette.background, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius]
  }, ".btn-dropdown.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;box-sizing:border-box;border:1px solid ".concat(theme.palette.border, ";border-radius:").concat(theme.layout.radius, ";--geist-ui-dropdown-height:").concat(SCALES.height(2.5), ";--geist-ui-dropdown-min-width:").concat(auto ? 'min-content' : SCALES.width(10.5), ";--geist-ui-dropdown-padding:").concat(SCALES.pt(0), " ").concat(paddingRight, " ").concat(SCALES.pb(0), " ").concat(paddingLeft, ";--geist-ui-dropdown-font-size:").concat(SCALES.font(0.875), ";}.btn-dropdown.__jsx-style-dynamic-selector>button{border-top-left-radius:").concat(theme.layout.radius, ";border-bottom-left-radius:").concat(theme.layout.radius, ";}details.__jsx-style-dynamic-selector{border-top-right-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";overflow:hidden;}.dropdown-box.__jsx-style-dynamic-selector{height:").concat(SCALES.height(2.5), ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:auto;}summary.__jsx-style-dynamic-selector{box-sizing:border-box;-webkit-tap-highlight-color:transparent;list-style:none;outline:none;color:").concat(colors.color, ";background-color:").concat(bgColor, ";height:").concat(SCALES.height(2.5), ";border-left:1px solid ").concat(colors.borderLeftColor, ";cursor:").concat(disabled || loading ? 'not-allowed' : 'pointer', ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:auto;padding:0 1px;-webkit-transition:background 0.2s ease 0s,border-color 0.2s ease 0s;transition:background 0.2s ease 0s,border-color 0.2s ease 0s;}summary.__jsx-style-dynamic-selector:hover{border-color:").concat(colors.hoverBorder, ";background-color:").concat(colors.hoverBgColor, ";}.content.__jsx-style-dynamic-selector{position:absolute;right:0;left:0;z-index:90;width:100%;border-radius:").concat(theme.layout.radius, ";box-shadow:").concat(theme.expressiveness.shadowLarge, ";-webkit-transform:translateY(").concat(theme.layout.gapHalf, ");-ms-transform:translateY(").concat(theme.layout.gapHalf, ");transform:translateY(").concat(theme.layout.gapHalf, ");background-color:").concat(theme.palette.background, ";}.content.__jsx-style-dynamic-selector>button:first-of-type{border-top-left-radius:").concat(theme.layout.radius, ";border-top-right-radius:").concat(theme.layout.radius, ";}.content.__jsx-style-dynamic-selector>button:last-of-type{border-bottom-left-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";}.dropdown-icon.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:scale(0.6);-ms-transform:scale(0.6);transform:scale(0.6);}"))));
};

ButtonDropdownComponent.displayName = 'GeistButtonDropdown';
ButtonDropdownComponent.defaultProps = defaultProps;
var ButtonDropdown = withScale(ButtonDropdownComponent);
export default ButtonDropdown;