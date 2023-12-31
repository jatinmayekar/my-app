import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children", "onClick", "passive", "disabled"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useImperativeHandle, useMemo, useRef } from 'react';
import useTheme from '../use-theme';
import { useModalContext } from './modal-context';
import Button from '../button/button';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  className: '',
  passive: false,
  disabled: false
};
var ModalActionComponent = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      onClick = _ref.onClick,
      passive = _ref.passive,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var btnRef = useRef(null);

  var _useModalContext = useModalContext(),
      _close = _useModalContext.close;

  useImperativeHandle(ref, function () {
    return btnRef.current;
  });

  var clickHandler = function clickHandler(event) {
    if (disabled) return;
    var actionEvent = Object.assign({}, event, {
      close: function close() {
        return _close && _close();
      }
    });
    onClick && onClick(actionEvent);
  };

  var color = useMemo(function () {
    return passive ? theme.palette.accents_5 : theme.palette.foreground;
  }, [theme.palette, passive, disabled]);
  var bgColor = useMemo(function () {
    return disabled ? theme.palette.accents_1 : theme.palette.background;
  }, [theme.palette, disabled]);
  var _styles$className = {
    styles: /*#__PURE__*/React.createElement(_JSXStyle, {
      id: "930885138",
      dynamic: [SCALES.font(0.75), color, theme.palette.background, SCALES.height(3.5625), disabled ? color : theme.palette.foreground, disabled ? bgColor : theme.palette.accents_1]
    }, "button.btn.__jsx-style-dynamic-selector{font-size:".concat(SCALES.font(0.75), ";border:none;color:").concat(color, ";background-color:").concat(theme.palette.background, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1;-ms-flex:1;flex:1;height:").concat(SCALES.height(3.5625), ";border-radius:0;min-width:0;}button.btn.__jsx-style-dynamic-selector:hover,button.btn.__jsx-style-dynamic-selector:focus{color:").concat(disabled ? color : theme.palette.foreground, ";background-color:").concat(disabled ? bgColor : theme.palette.accents_1, ";}")),
    className: _JSXStyle.dynamic([["930885138", [SCALES.font(0.75), color, theme.palette.background, SCALES.height(3.5625), disabled ? color : theme.palette.foreground, disabled ? bgColor : theme.palette.accents_1]]])
  },
      resolveClassName = _styles$className.className,
      styles = _styles$className.styles;
  var classes = useClasses(resolveClassName, className);

  var overrideProps = _extends({}, props, {
    effect: false,
    ref: btnRef
  });

  return /*#__PURE__*/React.createElement(Button, _extends({
    className: classes,
    onClick: clickHandler,
    disabled: disabled
  }, overrideProps), children, styles);
});
ModalActionComponent.defaultProps = defaultProps;
ModalActionComponent.displayName = 'GeistModalAction';
var ModalAction = withScale(ModalActionComponent);
export default ModalAction;