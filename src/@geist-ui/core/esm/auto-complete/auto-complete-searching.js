import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
var defaultProps = {
  className: ''
};

var AutoCompleteSearchComponent = function AutoCompleteSearchComponent(_ref) {
  var children = _ref.children,
      className = _ref.className;
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["2266351824", [theme.layout.gapHalf, theme.palette.background, theme.palette.accents_5, theme.layout.radius, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.875), SCALES.pr(0.875), SCALES.pb(0.875), SCALES.pl(0.875), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (className || "")
  }, children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2266351824",
    dynamic: [theme.layout.gapHalf, theme.palette.background, theme.palette.accents_5, theme.layout.radius, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0.875), SCALES.pr(0.875), SCALES.pb(0.875), SCALES.pl(0.875), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:normal;white-space:pre;padding:".concat(theme.layout.gapHalf, ";line-height:1;background-color:").concat(theme.palette.background, ";color:").concat(theme.palette.accents_5, ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;border-radius:").concat(theme.layout.radius, ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0.875), " ").concat(SCALES.pr(0.875), " ").concat(SCALES.pb(0.875), " ").concat(SCALES.pl(0.875), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

AutoCompleteSearchComponent.defaultProps = defaultProps;
AutoCompleteSearchComponent.displayName = 'GeistAutoCompleteSearch';
var AutoCompleteSearch = withScale(AutoCompleteSearchComponent);
export default AutoCompleteSearch;