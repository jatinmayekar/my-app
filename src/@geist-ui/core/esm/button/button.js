import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["children", "disabled", "type", "loading", "shadow", "ghost", "effect", "onClick", "auto", "icon", "htmlType", "iconRight", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useRef, useState, useMemo, useImperativeHandle } from 'react';
import useScale, { withScale } from '../use-scale';
import useTheme from '../use-theme';
import ButtonDrip from './button.drip';
import ButtonLoading from './button-loading';
import { filterPropsWithGroup, getButtonChildrenWithIcon } from './utils';
import { useButtonGroupContext } from '../button-group/button-group-context';
import { getButtonColors, getButtonCursor, getButtonDripColor, getButtonHoverColors } from './styles';
import useClasses from '../use-classes';
var defaultProps = {
  type: 'default',
  htmlType: 'button',
  ghost: false,
  loading: false,
  shadow: false,
  auto: false,
  effect: true,
  disabled: false,
  className: ''
};
var ButtonComponent = /*#__PURE__*/React.forwardRef(function (btnProps, ref) {
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var buttonRef = useRef(null);
  useImperativeHandle(ref, function () {
    return buttonRef.current;
  });

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      dripShow = _useState2[0],
      setDripShow = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      dripX = _useState4[0],
      setDripX = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      dripY = _useState6[0],
      setDripY = _useState6[1];

  var groupConfig = useButtonGroupContext();
  var filteredProps = filterPropsWithGroup(btnProps, groupConfig);
  /* eslint-disable @typescript-eslint/no-unused-vars */

  var children = filteredProps.children,
      disabled = filteredProps.disabled,
      type = filteredProps.type,
      loading = filteredProps.loading,
      shadow = filteredProps.shadow,
      ghost = filteredProps.ghost,
      effect = filteredProps.effect,
      onClick = filteredProps.onClick,
      auto = filteredProps.auto,
      icon = filteredProps.icon,
      htmlType = filteredProps.htmlType,
      iconRight = filteredProps.iconRight,
      className = filteredProps.className,
      props = _objectWithoutProperties(filteredProps, _excluded);
  /* eslint-enable @typescript-eslint/no-unused-vars */


  var _useMemo = useMemo(function () {
    return getButtonColors(theme.palette, filteredProps);
  }, [theme.palette, filteredProps]),
      bg = _useMemo.bg,
      border = _useMemo.border,
      color = _useMemo.color;

  var hover = useMemo(function () {
    return getButtonHoverColors(theme.palette, filteredProps);
  }, [theme.palette, filteredProps]);

  var _useMemo2 = useMemo(function () {
    return getButtonCursor(disabled, loading);
  }, [disabled, loading]),
      cursor = _useMemo2.cursor,
      events = _useMemo2.events;

  var dripColor = useMemo(function () {
    return getButtonDripColor(theme.palette, filteredProps);
  }, [theme.palette, filteredProps]);
  /* istanbul ignore next */

  var dripCompletedHandle = function dripCompletedHandle() {
    setDripShow(false);
    setDripX(0);
    setDripY(0);
  };

  var clickHandler = function clickHandler(event) {
    if (disabled || loading) return;
    var showDrip = !shadow && !ghost && effect;
    /* istanbul ignore next */

    if (showDrip && buttonRef.current) {
      var rect = buttonRef.current.getBoundingClientRect();
      setDripShow(true);
      setDripX(event.clientX - rect.left);
      setDripY(event.clientY - rect.top);
    }

    onClick && onClick(event);
  };

  var childrenWithIcon = useMemo(function () {
    return getButtonChildrenWithIcon(auto, children, {
      icon: icon,
      iconRight: iconRight
    });
  }, [auto, children, icon, iconRight]);
  var paddingLeft = auto ? SCALES.pl(1.15) : SCALES.pl(1.375),
      paddingRight = auto ? SCALES.pr(1.15) : SCALES.pr(1.375);
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: buttonRef,
    type: htmlType,
    disabled: disabled,
    onClick: clickHandler
  }, props, {
    className: _JSXStyle.dynamic([["86551275", [SCALES.height(2.5), theme.layout.radius, SCALES.font(0.875), color, bg, border, cursor, events, shadow ? theme.expressiveness.shadowSmall : 'none', SCALES.pl(0.727), SCALES.height(2.5), color, bg, auto ? 'min-content' : SCALES.width(10.5), auto ? 'auto' : 'initial', SCALES.height(2.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hover.color, hover.color, hover.bg, hover.border, cursor, events, shadow ? theme.expressiveness.shadowMedium : 'none', shadow ? '-1px' : '0px']]]) + " " + (props && props.className != null && props.className || useClasses('btn', className) || "")
  }), loading && /*#__PURE__*/React.createElement(ButtonLoading, {
    color: color
  }), childrenWithIcon, dripShow && /*#__PURE__*/React.createElement(ButtonDrip, {
    x: dripX,
    y: dripY,
    color: dripColor,
    onCompleted: dripCompletedHandle
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "86551275",
    dynamic: [SCALES.height(2.5), theme.layout.radius, SCALES.font(0.875), color, bg, border, cursor, events, shadow ? theme.expressiveness.shadowSmall : 'none', SCALES.pl(0.727), SCALES.height(2.5), color, bg, auto ? 'min-content' : SCALES.width(10.5), auto ? 'auto' : 'initial', SCALES.height(2.5), SCALES.pt(0), paddingRight, SCALES.pb(0), paddingLeft, SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hover.color, hover.color, hover.bg, hover.border, cursor, events, shadow ? theme.expressiveness.shadowMedium : 'none', shadow ? '-1px' : '0px']
  }, ".btn.__jsx-style-dynamic-selector{box-sizing:border-box;display:inline-block;line-height:".concat(SCALES.height(2.5), ";border-radius:").concat(theme.layout.radius, ";font-weight:400;font-size:").concat(SCALES.font(0.875), ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;text-transform:capitalize;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;white-space:nowrap;-webkit-transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms, border 200ms ease 0ms,color 200ms ease 0ms;transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms, border 200ms ease 0ms,color 200ms ease 0ms;position:relative;overflow:hidden;color:").concat(color, ";background-color:").concat(bg, ";border:1px solid ").concat(border, ";cursor:").concat(cursor, ";pointer-events:").concat(events, ";box-shadow:").concat(shadow ? theme.expressiveness.shadowSmall : 'none', ";--geist-ui-button-icon-padding:").concat(SCALES.pl(0.727), ";--geist-ui-button-height:").concat(SCALES.height(2.5), ";--geist-ui-button-color:").concat(color, ";--geist-ui-button-bg:").concat(bg, ";min-width:").concat(auto ? 'min-content' : SCALES.width(10.5), ";width:").concat(auto ? 'auto' : 'initial', ";height:").concat(SCALES.height(2.5), ";padding:").concat(SCALES.pt(0), " ").concat(paddingRight, " ").concat(SCALES.pb(0), " ").concat(paddingLeft, ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.btn.__jsx-style-dynamic-selector:hover,.btn.__jsx-style-dynamic-selector:focus{color:").concat(hover.color, ";--geist-ui-button-color:").concat(hover.color, ";background-color:").concat(hover.bg, ";border-color:").concat(hover.border, ";cursor:").concat(cursor, ";pointer-events:").concat(events, ";box-shadow:").concat(shadow ? theme.expressiveness.shadowMedium : 'none', ";-webkit-transform:translate3d(0px,").concat(shadow ? '-1px' : '0px', ",0px);-ms-transform:translate3d(0px,").concat(shadow ? '-1px' : '0px', ",0px);transform:translate3d(0px,").concat(shadow ? '-1px' : '0px', ",0px);}.btn.__jsx-style-dynamic-selector .text{position:relative;z-index:1;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;line-height:inherit;top:-1px;}.btn.__jsx-style-dynamic-selector .text p,.btn.__jsx-style-dynamic-selector .text pre,.btn.__jsx-style-dynamic-selector .text div{margin:0;}")));
});
ButtonComponent.defaultProps = defaultProps;
ButtonComponent.displayName = 'GeistButton';
var Button = withScale(ButtonComponent);
export default Button;