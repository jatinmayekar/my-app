import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["content", "children", "trigger", "placement", "initialVisible", "portalClassName", "disableItemsAutoClose", "onVisibleChange", "visible"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useMemo, useState } from 'react';
import Tooltip from '../tooltip/tooltip';
import { getReactNode } from '../utils/collections';
import useScale, { withScale } from '../use-scale';
import { PopoverContext } from './popover-context';
import useClasses from '../use-classes';
var defaultProps = {
  disableItemsAutoClose: false,
  trigger: 'click',
  placement: 'bottom',
  portalClassName: '',
  initialVisible: false,
  hideArrow: false,
  type: 'default',
  enterDelay: 100,
  leaveDelay: 150,
  offset: 12,
  className: '',
  onVisibleChange: function () {}
};

var PopoverComponent = function PopoverComponent(_ref) {
  var content = _ref.content,
      children = _ref.children,
      trigger = _ref.trigger,
      placement = _ref.placement,
      initialVisible = _ref.initialVisible,
      portalClassName = _ref.portalClassName,
      disableItemsAutoClose = _ref.disableItemsAutoClose,
      onVisibleChange = _ref.onVisibleChange,
      customVisible = _ref.visible,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = useState(initialVisible),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var textNode = useMemo(function () {
    return getReactNode(content);
  }, [content]);

  var onChildClick = function onChildClick() {
    onPopoverVisibleChange(false);
  };

  var value = useMemo(function () {
    return {
      onItemClick: onChildClick,
      disableItemsAutoClose: disableItemsAutoClose
    };
  }, [disableItemsAutoClose]);
  var classes = useClasses('popover', portalClassName);

  var onPopoverVisibleChange = function onPopoverVisibleChange(next) {
    setVisible(next);
    onVisibleChange(next);
  };

  useEffect(function () {
    if (customVisible === undefined) return;
    onPopoverVisibleChange(customVisible);
  }, [customVisible]);
  return /*#__PURE__*/React.createElement(PopoverContext.Provider, {
    value: value
  }, /*#__PURE__*/React.createElement(Tooltip, _extends({
    text: textNode,
    trigger: trigger,
    placement: placement,
    portalClassName: classes,
    visible: visible,
    onVisibleChange: onPopoverVisibleChange
  }, props), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "622655983",
    dynamic: [SCALES.pt(0.9), SCALES.pr(0), SCALES.pb(0.9), SCALES.pl(0)]
  }, ".tooltip-content.popover > .inner{padding:".concat(SCALES.pt(0.9), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0.9), " ").concat(SCALES.pl(0), ";}"))));
};

PopoverComponent.defaultProps = defaultProps;
PopoverComponent.displayName = 'GeistPopover';
var Popover = withScale(PopoverComponent);
export default Popover;