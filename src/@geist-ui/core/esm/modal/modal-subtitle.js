import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
var defaultProps = {
  className: ''
};

var ModalSubtitleComponent = function ModalSubtitleComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", _extends({}, props, {
    className: _JSXStyle.dynamic([["2550488204", [theme.palette.accents_5, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, '1.5em'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2550488204",
    dynamic: [theme.palette.accents_5, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, '1.5em'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "p.__jsx-style-dynamic-selector{font-weight:normal;display:inline-block;text-align:center;word-break:break-word;text-transform:uppercase;color:".concat(theme.palette.accents_5, ";font-size:").concat(SCALES.font(0.875), ";line-height:1.5em;width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, '1.5em'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

ModalSubtitleComponent.defaultProps = defaultProps;
ModalSubtitleComponent.displayName = 'GeistModalSubtitle';
var ModalSubtitle = withScale(ModalSubtitleComponent);
export default ModalSubtitle;