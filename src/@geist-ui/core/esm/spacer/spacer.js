import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["inline", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useScale, { withScale } from '../use-scale';
var defaultProps = {
  inline: false,
  className: ''
};

var SpacerComponent = function SpacerComponent(_ref) {
  var inline = _ref.inline,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: _JSXStyle.dynamic([["1994396435", [inline ? 'inline-block' : 'block', SCALES.width(1), SCALES.height(1), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1994396435",
    dynamic: [inline ? 'inline-block' : 'block', SCALES.width(1), SCALES.height(1), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "span.__jsx-style-dynamic-selector{display:".concat(inline ? 'inline-block' : 'block', ";width:").concat(SCALES.width(1), ";height:").concat(SCALES.height(1), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

SpacerComponent.defaultProps = defaultProps;
SpacerComponent.displayName = 'GeistSpacer';
var Spacer = withScale(SpacerComponent);
export default Spacer;