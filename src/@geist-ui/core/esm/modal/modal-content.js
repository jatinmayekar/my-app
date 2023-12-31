import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  className: ''
};

var ModalContentComponent = function ModalContentComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["498745028", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.3125), SCALES.pr(1.3125), SCALES.pb(0.6625), SCALES.pl(1.3125), SCALES.mt(0), SCALES.mr(0, 'calc(var(--modal-wrapper-padding-right) * -1)'), SCALES.mb(0), SCALES.ml(0, 'calc(var(--modal-wrapper-padding-left) * -1)')]]]) + " " + (props && props.className != null && props.className || useClasses('content', className) || "")
  }), children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "498745028",
    dynamic: [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.3125), SCALES.pr(1.3125), SCALES.pb(0.6625), SCALES.pl(1.3125), SCALES.mt(0), SCALES.mr(0, 'calc(var(--modal-wrapper-padding-right) * -1)'), SCALES.mb(0), SCALES.ml(0, 'calc(var(--modal-wrapper-padding-left) * -1)')]
  }, ".content.__jsx-style-dynamic-selector{position:relative;text-align:left;font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(1.3125), " ").concat(SCALES.pr(1.3125), " ").concat(SCALES.pb(0.6625), " ").concat(SCALES.pl(1.3125), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0, 'calc(var(--modal-wrapper-padding-right) * -1)'), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0, 'calc(var(--modal-wrapper-padding-left) * -1)'), ";}.content.__jsx-style-dynamic-selector>*:first-child{margin-top:0;}.content.__jsx-style-dynamic-selector>*:last-child{margin-bottom:0;}")));
};

ModalContentComponent.defaultProps = defaultProps;
ModalContentComponent.displayName = 'GeistModalContent';
var ModalContent = withScale(ModalContentComponent);
export default ModalContent;