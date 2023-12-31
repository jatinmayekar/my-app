import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "caption", "shadow", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  caption: '',
  shadow: false,
  className: ''
};

var DisplayComponent = function DisplayComponent(_ref) {
  var children = _ref.children,
      caption = _ref.caption,
      shadow = _ref.shadow,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses('display', className);
  var showShadow = useMemo(function () {
    return shadow && theme.type !== 'dark';
  }, [theme.type, shadow]);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["2213400331", [SCALES.font(0.875), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(2.5), SCALES.mr(0, 'auto'), SCALES.mb(2.5), SCALES.ml(0, 'auto'), SCALES.width(1, 'max-content'), showShadow ? theme.expressiveness.shadowLarge : 'none', theme.palette.accents_5, shadow ? '2.5em' : '1.3em']]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["2213400331", [SCALES.font(0.875), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(2.5), SCALES.mr(0, 'auto'), SCALES.mb(2.5), SCALES.ml(0, 'auto'), SCALES.width(1, 'max-content'), showShadow ? theme.expressiveness.shadowLarge : 'none', theme.palette.accents_5, shadow ? '2.5em' : '1.3em']]]) + " " + "content"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["2213400331", [SCALES.font(0.875), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(2.5), SCALES.mr(0, 'auto'), SCALES.mb(2.5), SCALES.ml(0, 'auto'), SCALES.width(1, 'max-content'), showShadow ? theme.expressiveness.shadowLarge : 'none', theme.palette.accents_5, shadow ? '2.5em' : '1.3em']]]) + " " + "caption"
  }, caption), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2213400331",
    dynamic: [SCALES.font(0.875), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(2.5), SCALES.mr(0, 'auto'), SCALES.mb(2.5), SCALES.ml(0, 'auto'), SCALES.width(1, 'max-content'), showShadow ? theme.expressiveness.shadowLarge : 'none', theme.palette.accents_5, shadow ? '2.5em' : '1.3em']
  }, ".display.__jsx-style-dynamic-selector{display:block;max-width:100%;font-size:".concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(2.5), " ").concat(SCALES.mr(0, 'auto'), " ").concat(SCALES.mb(2.5), " ").concat(SCALES.ml(0, 'auto'), ";}.content.__jsx-style-dynamic-selector{display:block;margin:0 auto;border-radius:4px;overflow:hidden;width:").concat(SCALES.width(1, 'max-content'), ";box-shadow:").concat(showShadow ? theme.expressiveness.shadowLarge : 'none', ";max-width:100%;}.content.__jsx-style-dynamic-selector pre{margin:0;-webkit-transition:min-width ease 0.2s;transition:min-width ease 0.2s;}.content.__jsx-style-dynamic-selector img{display:block;}.caption.__jsx-style-dynamic-selector{font-size:inherit;line-height:1.5em;color:").concat(theme.palette.accents_5, ";margin:").concat(shadow ? '2.5em' : '1.3em', " auto 0;text-align:center;max-width:85%;}")));
};

DisplayComponent.defaultProps = defaultProps;
DisplayComponent.displayName = 'GeistDisplay';
var Display = withScale(DisplayComponent);
export default Display;