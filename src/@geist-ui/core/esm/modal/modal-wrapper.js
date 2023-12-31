import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children", "visible"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useRef } from 'react';
import useTheme from '../use-theme';
import CssTransition from '../shared/css-transition';
import { isChildElement } from '../utils/collections';
import useScale from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  className: '',
  visible: false
};

var ModalWrapper = function ModalWrapper(_ref) {
  var className = _ref.className,
      children = _ref.children,
      visible = _ref.visible,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var modalContent = useRef(null);
  var tabStart = useRef(null);
  var tabEnd = useRef(null);
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
    className: _JSXStyle.dynamic([["4268738715", [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, SCALES.font(1), SCALES.height(1, 'auto'), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || useClasses('wrapper', className) || "")
  }), /*#__PURE__*/React.createElement("div", {
    tabIndex: 0,
    "aria-hidden": "true",
    ref: tabStart,
    className: _JSXStyle.dynamic([["4268738715", [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, SCALES.font(1), SCALES.height(1, 'auto'), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + "hide-tab"
  }), children, /*#__PURE__*/React.createElement("div", {
    tabIndex: 0,
    "aria-hidden": "true",
    ref: tabEnd,
    className: _JSXStyle.dynamic([["4268738715", [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, SCALES.font(1), SCALES.height(1, 'auto'), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + "hide-tab"
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4268738715",
    dynamic: [theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.expressiveness.shadowLarge, SCALES.font(1), SCALES.height(1, 'auto'), SCALES.pl(1.3125), SCALES.pr(1.3125), SCALES.pt(1.3125), SCALES.pb(1.3125), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".wrapper.__jsx-style-dynamic-selector{max-width:100%;vertical-align:middle;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;box-sizing:border-box;background-color:".concat(theme.palette.background, ";color:").concat(theme.palette.foreground, ";border-radius:").concat(theme.layout.radius, ";box-shadow:").concat(theme.expressiveness.shadowLarge, ";opacity:0;outline:none;-webkit-transform:translate3d(0px,-30px,0px);-ms-transform:translate3d(0px,-30px,0px);transform:translate3d(0px,-30px,0px);-webkit-transition:opacity 0.35s cubic-bezier(0.4,0,0.2,1) 0s, -webkit-transform 0.35s cubic-bezier(0.4,0,0.2,1) 0s;-webkit-transition:opacity 0.35s cubic-bezier(0.4,0,0.2,1) 0s, transform 0.35s cubic-bezier(0.4,0,0.2,1) 0s;transition:opacity 0.35s cubic-bezier(0.4,0,0.2,1) 0s, transform 0.35s cubic-bezier(0.4,0,0.2,1) 0s;width:100%;font-size:").concat(SCALES.font(1), ";height:").concat(SCALES.height(1, 'auto'), ";--modal-wrapper-padding-left:").concat(SCALES.pl(1.3125), ";--modal-wrapper-padding-right:").concat(SCALES.pr(1.3125), ";padding:").concat(SCALES.pt(1.3125), " var(--modal-wrapper-padding-right) ").concat(SCALES.pb(1.3125), " var(--modal-wrapper-padding-left);margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.wrapper-enter.__jsx-style-dynamic-selector{opacity:0;-webkit-transform:translate3d(0px,-30px,0px);-ms-transform:translate3d(0px,-30px,0px);transform:translate3d(0px,-30px,0px);}.wrapper-enter-active.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:translate3d(0px,0px,0px);-ms-transform:translate3d(0px,0px,0px);transform:translate3d(0px,0px,0px);}.wrapper-leave.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:translate3d(0px,0px,0px);-ms-transform:translate3d(0px,0px,0px);transform:translate3d(0px,0px,0px);}.wrapper-leave-active.__jsx-style-dynamic-selector{opacity:0;-webkit-transform:translate3d(0px,-30px,0px);-ms-transform:translate3d(0px,-30px,0px);transform:translate3d(0px,-30px,0px);}.hide-tab.__jsx-style-dynamic-selector{outline:none;overflow:hidden;width:0;height:0;opacity:0;}"))));
};

ModalWrapper.defaultProps = defaultProps;
ModalWrapper.displayName = 'GeistModalWrapper';
export default ModalWrapper;