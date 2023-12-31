import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "initialVisible", "text", "offset", "placement", "portalClassName", "enterDelay", "leaveDelay", "trigger", "type", "className", "onVisibleChange", "hideArrow", "visible"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import TooltipContent from './tooltip-content';
import useClickAway from '../utils/use-click-away';
import { withScale } from '../use-scale';
import { getRect } from './helper';
import useClasses from '../use-classes';
var defaultProps = {
  initialVisible: false,
  hideArrow: false,
  type: 'default',
  trigger: 'hover',
  placement: 'top',
  enterDelay: 100,
  leaveDelay: 150,
  offset: 12,
  className: '',
  portalClassName: '',
  onVisibleChange: function () {}
};

var TooltipComponent = function TooltipComponent(_ref) {
  var children = _ref.children,
      initialVisible = _ref.initialVisible,
      text = _ref.text,
      offset = _ref.offset,
      placement = _ref.placement,
      portalClassName = _ref.portalClassName,
      enterDelay = _ref.enterDelay,
      leaveDelay = _ref.leaveDelay,
      trigger = _ref.trigger,
      type = _ref.type,
      className = _ref.className,
      onVisibleChange = _ref.onVisibleChange,
      hideArrow = _ref.hideArrow,
      customVisible = _ref.visible,
      props = _objectWithoutProperties(_ref, _excluded);

  var timer = useRef();
  var ref = useRef(null);

  var _useState = useState(initialVisible),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var iconOffset = useMemo(function () {
    if (!(ref !== null && ref !== void 0 && ref.current)) return {
      x: '0.75em',
      y: '0.75em'
    };
    var rect = getRect(ref);
    return {
      x: "".concat(rect.width ? rect.width / 2 : 0, "px"),
      y: "".concat(rect.height ? rect.height / 2 : 0, "px")
    };
  }, [ref === null || ref === void 0 ? void 0 : ref.current]);
  var contentProps = {
    type: type,
    visible: visible,
    offset: offset,
    placement: placement,
    hideArrow: hideArrow,
    iconOffset: iconOffset,
    parent: ref,
    className: portalClassName
  };

  var changeVisible = function changeVisible(nextState) {
    var clear = function clear() {
      clearTimeout(timer.current);
      timer.current = undefined;
    };

    var handler = function handler(nextState) {
      setVisible(nextState);
      onVisibleChange(nextState);
      clear();
    };

    clear();

    if (nextState) {
      timer.current = window.setTimeout(function () {
        return handler(true);
      }, enterDelay);
      return;
    }

    var leaveDelayWithoutClick = trigger === 'click' ? 0 : leaveDelay;
    timer.current = window.setTimeout(function () {
      return handler(false);
    }, leaveDelayWithoutClick);
  };

  var mouseEventHandler = function mouseEventHandler(next) {
    return trigger === 'hover' && changeVisible(next);
  };

  var clickEventHandler = function clickEventHandler() {
    return trigger === 'click' && changeVisible(!visible);
  };

  useClickAway(ref, function () {
    return trigger === 'click' && changeVisible(false);
  });
  useEffect(function () {
    if (customVisible === undefined) return;
    changeVisible(customVisible);
  }, [customVisible]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    onClick: clickEventHandler,
    onMouseEnter: function onMouseEnter() {
      return mouseEventHandler(true);
    },
    onMouseLeave: function onMouseLeave() {
      return mouseEventHandler(false);
    }
  }, props, {
    className: "jsx-418573366" + " " + (props && props.className != null && props.className || useClasses('tooltip', className) || "")
  }), children, /*#__PURE__*/React.createElement(TooltipContent, contentProps, text), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "418573366"
  }, ".tooltip.jsx-418573366{width:-webkit-max-content;width:-moz-max-content;width:max-content;display:inline-block;}"));
};

TooltipComponent.defaultProps = defaultProps;
TooltipComponent.displayName = 'GeistTooltip';
var Tooltip = withScale(TooltipComponent);
export default Tooltip;