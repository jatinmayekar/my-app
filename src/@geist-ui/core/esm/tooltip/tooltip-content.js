import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import useTheme from '../use-theme';
import usePortal from '../utils/use-portal';
import useResize from '../utils/use-resize';
import CssTransition from '../shared/css-transition';
import useClickAnyWhere from '../utils/use-click-anywhere';
import { getColors } from './styles';
import { getPosition, defaultTooltipPosition } from './placement';
import TooltipIcon from './tooltip-icon';
import useScale from '../use-scale';
import { getRect } from './helper';
import useClasses from '../use-classes';

var TooltipContent = function TooltipContent(_ref) {
  var children = _ref.children,
      parent = _ref.parent,
      visible = _ref.visible,
      offset = _ref.offset,
      iconOffset = _ref.iconOffset,
      placement = _ref.placement,
      type = _ref.type,
      className = _ref.className,
      hideArrow = _ref.hideArrow;
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var el = usePortal('tooltip');
  var selfRef = useRef(null);

  var _useState = useState(defaultTooltipPosition),
      _useState2 = _slicedToArray(_useState, 2),
      rect = _useState2[0],
      setRect = _useState2[1];

  var colors = useMemo(function () {
    return getColors(type, theme.palette);
  }, [type, theme.palette]);
  var hasShadow = type === 'default';
  var classes = useClasses('tooltip-content', className);
  if (!parent) return null;

  var updateRect = function updateRect() {
    var position = getPosition(placement, getRect(parent), offset);
    setRect(position);
  };

  useResize(updateRect);
  useClickAnyWhere(function () {
    return updateRect();
  });
  useEffect(function () {
    updateRect();
  }, [visible]);

  var preventHandler = function preventHandler(event) {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  if (!el) return null;
  return /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(CssTransition, {
    visible: visible
  }, /*#__PURE__*/React.createElement("div", {
    ref: selfRef,
    onClick: preventHandler,
    className: _JSXStyle.dynamic([["2387841858", [iconOffset.x, iconOffset.y, colors.bgColor, rect.top, rect.left, rect.transform, colors.color, theme.layout.radius, hasShadow ? theme.expressiveness.shadowMedium : 'none', SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.font(1), SCALES.pt(0.65), SCALES.pr(0.9), SCALES.pb(0.65), SCALES.pl(0.9)]]]) + " " + (classes || "")
  }, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["2387841858", [iconOffset.x, iconOffset.y, colors.bgColor, rect.top, rect.left, rect.transform, colors.color, theme.layout.radius, hasShadow ? theme.expressiveness.shadowMedium : 'none', SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.font(1), SCALES.pt(0.65), SCALES.pr(0.9), SCALES.pb(0.65), SCALES.pl(0.9)]]]) + " " + "inner"
  }, !hideArrow && /*#__PURE__*/React.createElement(TooltipIcon, {
    placement: placement,
    shadow: hasShadow
  }), children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2387841858",
    dynamic: [iconOffset.x, iconOffset.y, colors.bgColor, rect.top, rect.left, rect.transform, colors.color, theme.layout.radius, hasShadow ? theme.expressiveness.shadowMedium : 'none', SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.font(1), SCALES.pt(0.65), SCALES.pr(0.9), SCALES.pb(0.65), SCALES.pl(0.9)]
  }, ".tooltip-content.__jsx-style-dynamic-selector{--tooltip-icon-offset-x:".concat(iconOffset.x, ";--tooltip-icon-offset-y:").concat(iconOffset.y, ";--tooltip-content-bg:").concat(colors.bgColor, ";box-sizing:border-box;position:absolute;top:").concat(rect.top, ";left:").concat(rect.left, ";-webkit-transform:").concat(rect.transform, ";-ms-transform:").concat(rect.transform, ";transform:").concat(rect.transform, ";background-color:var(--tooltip-content-bg);color:").concat(colors.color, ";border-radius:").concat(theme.layout.radius, ";padding:0;z-index:1000;box-shadow:").concat(hasShadow ? theme.expressiveness.shadowMedium : 'none', ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";}.inner.__jsx-style-dynamic-selector{box-sizing:border-box;position:relative;font-size:").concat(SCALES.font(1), ";padding:").concat(SCALES.pt(0.65), " ").concat(SCALES.pr(0.9), " ").concat(SCALES.pb(0.65), " ").concat(SCALES.pl(0.9), ";height:100%;}")))), el);
};

export default TooltipContent;