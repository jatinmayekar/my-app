import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  className: ''
};

var AvatarGroupComponent = function AvatarGroupComponent(_ref) {
  var count = _ref.count,
      className = _ref.className,
      children = _ref.children;
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["1135268764", [SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.ml(0.625), SCALES.font(0.875), theme.palette.accents_7]]]) + " " + (useClasses('avatar-group', className) || "")
  }, children, count && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["1135268764", [SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.ml(0.625), SCALES.font(0.875), theme.palette.accents_7]]]) + " " + "count"
  }, "+", count), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1135268764",
    dynamic: [SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.ml(0.625), SCALES.font(0.875), theme.palette.accents_7]
  }, ".avatar-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:".concat(SCALES.width(1, 'max-content'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.avatar-group.__jsx-style-dynamic-selector .avatar{margin-left:-").concat(SCALES.ml(0.625), ";}.count.__jsx-style-dynamic-selector{font-size:").concat(SCALES.font(0.875), ";display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:5.5px;color:").concat(theme.palette.accents_7, ";}")));
};

AvatarGroupComponent.defaultProps = defaultProps;
AvatarGroupComponent.displayName = 'GeistAvatarGroup';
var AvatarGroup = withScale(AvatarGroupComponent);
export default AvatarGroup;