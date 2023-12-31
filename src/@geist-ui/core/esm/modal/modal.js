import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import usePortal from '../utils/use-portal';
import ModalWrapper from './modal-wrapper';
import ModalAction from './modal-action';
import ModalActions from './modal-actions';
import Backdrop from '../shared/backdrop';
import { ModalContext } from './modal-context';
import { pickChild } from '../utils/collections';
import useBodyScroll from '../utils/use-body-scroll';
import useScale, { withScale } from '../use-scale';
import useKeyboard, { KeyCode } from '../use-keyboard';
var defaultProps = {
  wrapClassName: '',
  keyboard: true,
  disableBackdropClick: false,
  positionClassName: '',
  backdropClassName: '',
  layerClassName: ''
};

var ModalComponent = function ModalComponent(_ref) {
  var customVisible = _ref.visible,
      onClose = _ref.onClose,
      children = _ref.children,
      keyboard = _ref.keyboard,
      wrapClassName = _ref.wrapClassName,
      onContentClick = _ref.onContentClick,
      disableBackdropClick = _ref.disableBackdropClick,
      positionClassName = _ref.positionClassName,
      backdropClassName = _ref.backdropClassName,
      layerClassName = _ref.layerClassName;
  var portal = usePortal('modal');

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useBodyScroll = useBodyScroll(null, {
    delayReset: 300
  }),
      _useBodyScroll2 = _slicedToArray(_useBodyScroll, 2),
      setBodyHidden = _useBodyScroll2[1];

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _pickChild = pickChild(children, ModalAction),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      withoutActionsChildren = _pickChild2[0],
      ActionsChildren = _pickChild2[1];

  var hasActions = ActionsChildren && React.Children.count(ActionsChildren) > 0;

  var closeModal = function closeModal() {
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
    keyboard && closeModal();
  }, KeyCode.Escape, {
    disableGlobalEvent: true
  }),
      bindings = _useKeyboard.bindings;

  var closeFromBackdrop = function closeFromBackdrop() {
    if (disableBackdropClick) return;
    closeModal();
  };

  var modalConfig = useMemo(function () {
    return {
      close: closeModal
    };
  }, []);
  if (!portal) return null;
  return /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: modalConfig
  }, /*#__PURE__*/React.createElement(Backdrop, _extends({
    onClick: closeFromBackdrop,
    onContentClick: onContentClick,
    visible: visible,
    width: SCALES.width(26),
    positionClassName: positionClassName,
    backdropClassName: backdropClassName,
    layerClassName: layerClassName
  }, bindings), /*#__PURE__*/React.createElement(ModalWrapper, {
    visible: visible,
    className: wrapClassName
  }, withoutActionsChildren, hasActions && /*#__PURE__*/React.createElement(ModalActions, null, ActionsChildren)))), portal);
};

ModalComponent.defaultProps = defaultProps;
ModalComponent.displayName = 'GeistModal';
var Modal = withScale(ModalComponent);
export default Modal;