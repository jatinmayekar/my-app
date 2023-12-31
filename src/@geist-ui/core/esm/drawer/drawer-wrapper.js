import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children", "visible", "placement"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useMemo, useRef } from 'react';
import useScale from '../use-scale';
import useTheme from '../use-theme';
import CssTransition from '../shared/css-transition';
import { isChildElement } from '../utils/collections';
import { getDrawerTransform } from './helper';
import useClasses from '../use-classes';
var defaultProps = {
  className: '',
  visible: false
};

var DrawerWrapper = function DrawerWrapper(_ref) {
  var className = _ref.className,
      children = _ref.children,
      visible = _ref.visible,
      placement = _ref.placement,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var modalContent = useRef(null);
  var tabStart = useRef(null);
  var tabEnd = useRef(null);
  var transform = useMemo(function () {
    return getDrawerTransform(placement);
  }, [placement]);
  var classes = useClasses('wrapper', placement, className);
  useEffect(function () {
    if (!visible) return;
    var activeElement = document.activeElement;
    var isChild = isChildElement(modalContent.current, activeElement);
    if (isChild) return;
    tabStart.current && tabStart.current.focus();
  }, [visible]);

  var onKeyDown = function onKeyDown(event) {
    var isTabDown = event.keyCode === 9;
    if (!visible || !isTabDown) return;
    var activeElement = document.activeElement;

    if (event.shiftKey) {
      if (activeElement === tabStart.current) {
        tabEnd.current && tabEnd.current.focus();
      }
    } else {
      if (activeElement === tabEnd.current) {
        tabStart.current && tabStart.current.focus();
      }
    }
  };

  return /*#__PURE__*/React.createElement(CssTransition, {
    name: "wrapper",
    visible: visible,
    clearTime: 300
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    tabIndex: -1,
    onKeyDown: onKeyDown,
    ref: modalContent
  }, props, {
    className: _JSXStyle.dynamic([["3022633861", [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, transform.initial, SCALES.font(1), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.width(1, 'auto'), SCALES.height(1, '100%'), transform.hidden, transform.visible, transform.visible, transform.hidden]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React.createElement("div", {
    tabIndex: 0,
    "aria-hidden": "true",
    ref: tabStart,
    className: _JSXStyle.dynamic([["3022633861", [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, transform.initial, SCALES.font(1), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.width(1, 'auto'), SCALES.height(1, '100%'), transform.hidden, transform.visible, transform.visible, transform.hidden]]]) + " " + "hide-tab start"
  }), children, /*#__PURE__*/React.createElement("div", {
    tabIndex: 0,
    "aria-hidden": "true",
    ref: tabEnd,
    className: _JSXStyle.dynamic([["3022633861", [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, transform.initial, SCALES.font(1), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.width(1, 'auto'), SCALES.height(1, '100%'), transform.hidden, transform.visible, transform.visible, transform.hidden]]]) + " " + "hide-tab end"
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3022633861",
    dynamic: [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, transform.initial, SCALES.font(1), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.width(1, 'auto'), SCALES.height(1, '100%'), transform.hidden, transform.visible, transform.visible, transform.hidden]
  }, ".wrapper.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;right:0;bottom:0;max-width:100%;vertical-align:middle;overflow:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:".concat(theme.palette.background, ";color:").concat(theme.palette.foreground, ";border-radius:calc(3 * ").concat(theme.layout.radius, ");box-shadow:").concat(theme.expressiveness.shadowLarge, ";opacity:0;outline:none;-webkit-transform:").concat(transform.initial, ";-ms-transform:").concat(transform.initial, ";transform:").concat(transform.initial, ";-webkit-transition:opacity,-webkit-transform 400ms cubic-bezier(0.1,0.6,0.1,1);-webkit-transition:opacity,transform 400ms cubic-bezier(0.1,0.6,0.1,1);transition:opacity,transform 400ms cubic-bezier(0.1,0.6,0.1,1);font-size:").concat(SCALES.font(1), ";--modal-wrapper-padding-left:").concat(SCALES.pl(1.3125), ";--modal-wrapper-padding-right:").concat(SCALES.pr(1.3125), ";padding:").concat(SCALES.pt(1.3125), " var(--modal-wrapper-padding-right) ").concat(SCALES.pb(1.3125), " var(--modal-wrapper-padding-left);margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.top.__jsx-style-dynamic-selector,.bottom.__jsx-style-dynamic-selector{width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, 'auto'), ";}.left.__jsx-style-dynamic-selector,.right.__jsx-style-dynamic-selector{width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, '100%'), ";}.top.__jsx-style-dynamic-selector{bottom:auto;border-top-left-radius:0;border-top-right-radius:0;}.left.__jsx-style-dynamic-selector{right:auto;border-top-left-radius:0;border-bottom-left-radius:0;}.bottom.__jsx-style-dynamic-selector{top:auto;border-bottom-left-radius:0;border-bottom-right-radius:0;}.right.__jsx-style-dynamic-selector{left:auto;border-top-right-radius:0;border-bottom-right-radius:0;}.wrapper-enter.__jsx-style-dynamic-selector{opacity:0;-webkit-transform:").concat(transform.hidden, ";-ms-transform:").concat(transform.hidden, ";transform:").concat(transform.hidden, ";}.wrapper-enter-active.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:").concat(transform.visible, ";-ms-transform:").concat(transform.visible, ";transform:").concat(transform.visible, ";}.wrapper-leave.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:").concat(transform.visible, ";-ms-transform:").concat(transform.visible, ";transform:").concat(transform.visible, ";-webkit-transition:opacity,-webkit-transform 400ms cubic-bezier(0.1,0.2,0.1,1);-webkit-transition:opacity,transform 400ms cubic-bezier(0.1,0.2,0.1,1);transition:opacity,transform 400ms cubic-bezier(0.1,0.2,0.1,1);}.wrapper-leave-active.__jsx-style-dynamic-selector{opacity:0.4;-webkit-transform:").concat(transform.hidden, ";-ms-transform:").concat(transform.hidden, ";transform:").concat(transform.hidden, ";}.hide-tab.__jsx-style-dynamic-selector{outline:none;overflow:hidden;width:0;height:0;opacity:0;}"))));
};

DrawerWrapper.defaultProps = defaultProps;
DrawerWrapper.displayName = 'GeistDrawerWrapper';
export default DrawerWrapper;