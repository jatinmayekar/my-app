import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["visible", "keyboard", "disableBackdropClick", "onClose", "onContentClick", "wrapClassName", "children"];
import React, { useEffect, useState } from 'react';
import { withScale } from '../use-scale';
import usePortal from '../utils/use-portal';
import useBodyScroll from '../utils/use-body-scroll';
import useKeyboard, { KeyCode } from '../use-keyboard';
import { createPortal } from 'react-dom';
import Backdrop from '../shared/backdrop';
import DrawerWrapper from './drawer-wrapper';
var defaultProps = {
  wrapClassName: '',
  keyboard: true,
  disableBackdropClick: false,
  placement: 'right'
};

var DrawerComponent = function DrawerComponent(_ref) {
  var customVisible = _ref.visible,
      keyboard = _ref.keyboard,
      disableBackdropClick = _ref.disableBackdropClick,
      onClose = _ref.onClose,
      onContentClick = _ref.onContentClick,
      wrapClassName = _ref.wrapClassName,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var portal = usePortal('drawer');

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useBodyScroll = useBodyScroll(null, {
    delayReset: 300
  }),
      _useBodyScroll2 = _slicedToArray(_useBodyScroll, 2),
      setBodyHidden = _useBodyScroll2[1];

  var closeDrawer = function closeDrawer() {
    onClose && onClose();
    setVisible(false);
    setBodyHidden(false);
  };

  useEffect(function () {
    if (typeof customVisible === 'undefined') return;
    setVisible(customVisible);
    setBodyHidden(customVisible);
  }, [customVisible]);

  var _useKeyboard = useKeyboard(function () {
    keyboard && closeDrawer();
  }, KeyCode.Escape, {
    disableGlobalEvent: true
  }),
      bindings = _useKeyboard.bindings;

  var closeFromBackdrop = function closeFromBackdrop() {
    if (disableBackdropClick) return;
    closeDrawer();
  };

  if (!portal) return null;
  return /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(Backdrop, _extends({
    onClick: closeFromBackdrop,
    onContentClick: onContentClick,
    visible: visible,
    width: "100%"
  }, bindings), /*#__PURE__*/React.createElement(DrawerWrapper, _extends({
    visible: visible,
    className: wrapClassName
  }, props), children)), portal);
};

DrawerComponent.defaultProps = defaultProps;
DrawerComponent.displayName = 'GeistDrawer';
var Drawer = withScale(DrawerComponent);
export default Drawer;