import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "onClick", "visible", "width", "onContentClick", "backdropClassName", "positionClassName", "layerClassName"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import CssTransition from './css-transition';
import useCurrentState from '../utils/use-current-state';
import useClasses from '../use-classes';
var defaultProps = {
  onClick: function onClick() {},
  visible: false,
  onContentClick: function onContentClick() {},
  backdropClassName: '',
  positionClassName: '',
  layerClassName: ''
};
var Backdrop = /*#__PURE__*/React.memo(function (_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      visible = _ref.visible,
      width = _ref.width,
      onContentClick = _ref.onContentClick,
      backdropClassName = _ref.backdropClassName,
      positionClassName = _ref.positionClassName,
      layerClassName = _ref.layerClassName,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useCurrentState = useCurrentState(false),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      setIsContentMouseDown = _useCurrentState2[1],
      IsContentMouseDownRef = _useCurrentState2[2];

  var clickHandler = function clickHandler(event) {
    if (IsContentMouseDownRef.current) return;
    onClick && onClick(event);
  };

  var mouseUpHandler = function mouseUpHandler() {
    if (!IsContentMouseDownRef.current) return;
    var timer = setTimeout(function () {
      setIsContentMouseDown(false);
      clearTimeout(timer);
    }, 0);
  };

  return /*#__PURE__*/React.createElement(CssTransition, {
    name: "backdrop-wrapper",
    visible: visible,
    clearTime: 300
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: clickHandler,
    onMouseUp: mouseUpHandler
  }, props, {
    className: _JSXStyle.dynamic([["2021762493", [width, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity]]]) + " " + (props && props.className != null && props.className || useClasses('backdrop', backdropClassName) || "")
  }), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["2021762493", [width, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity]]]) + " " + (useClasses('layer', layerClassName) || "")
  }), /*#__PURE__*/React.createElement("div", {
    onClick: onContentClick,
    onMouseDown: function onMouseDown() {
      return setIsContentMouseDown(true);
    },
    className: _JSXStyle.dynamic([["2021762493", [width, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity]]]) + " " + (useClasses('position', positionClassName) || "")
  }, children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2021762493",
    dynamic: [width, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity, theme.expressiveness.portalOpacity]
  }, ".backdrop.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;right:0;bottom:0;overflow:auto;z-index:1000;-webkit-overflow-scrolling:touch;box-sizing:border-box;text-align:center;}.position.__jsx-style-dynamic-selector{position:relative;z-index:1001;outline:none;max-width:90%;width:".concat(width, ";margin:20px auto;vertical-align:middle;display:inline-block;}.backdrop.__jsx-style-dynamic-selector:before{display:inline-block;width:0;height:100%;vertical-align:middle;content:'';}.layer.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;opacity:").concat(theme.expressiveness.portalOpacity, ";background-color:black;-webkit-transition:opacity 0.35s cubic-bezier(0.4,0,0.2,1);transition:opacity 0.35s cubic-bezier(0.4,0,0.2,1);pointer-events:none;z-index:1000;}.backdrop-wrapper-enter.__jsx-style-dynamic-selector .layer.__jsx-style-dynamic-selector{opacity:0;}.backdrop-wrapper-enter-active.__jsx-style-dynamic-selector .layer.__jsx-style-dynamic-selector{opacity:").concat(theme.expressiveness.portalOpacity, ";}.backdrop-wrapper-leave.__jsx-style-dynamic-selector .layer.__jsx-style-dynamic-selector{opacity:").concat(theme.expressiveness.portalOpacity, ";}.backdrop-wrapper-leave-active.__jsx-style-dynamic-selector .layer.__jsx-style-dynamic-selector{opacity:0;}"))));
});
Backdrop.defaultProps = defaultProps;
Backdrop.displayName = 'GeistBackdrop';
export default Backdrop;