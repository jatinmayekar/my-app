import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["title", "content", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  title: 'Title',
  content: '',
  className: ''
};

var DescriptionComponent = function DescriptionComponent(_ref) {
  var title = _ref.title,
      content = _ref.content,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses('description', className);
  return /*#__PURE__*/React.createElement("dl", _extends({}, props, {
    className: _JSXStyle.dynamic([["2323318745", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, theme.palette.foreground]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React.createElement("dt", {
    className: _JSXStyle.dynamic([["2323318745", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, theme.palette.foreground]]])
  }, title), /*#__PURE__*/React.createElement("dd", {
    className: _JSXStyle.dynamic([["2323318745", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, theme.palette.foreground]]])
  }, content), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2323318745",
    dynamic: [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.palette.accents_5, theme.palette.foreground]
  }, ".description.__jsx-style-dynamic-selector{font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}dt.__jsx-style-dynamic-selector{font-size:0.75em;line-height:1em;margin-bottom:0.5em;text-transform:uppercase;white-space:nowrap;color:").concat(theme.palette.accents_5, ";font-weight:500;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}dd.__jsx-style-dynamic-selector{font-size:0.875em;margin:0;line-height:1.1em;color:").concat(theme.palette.foreground, ";font-weight:500;}dd.__jsx-style-dynamic-selector p,dt.__jsx-style-dynamic-selector p{margin:0;}")));
};

DescriptionComponent.defaultProps = defaultProps;
DescriptionComponent.displayName = 'GeistDescription';
var Description = withScale(DescriptionComponent);
export default Description;