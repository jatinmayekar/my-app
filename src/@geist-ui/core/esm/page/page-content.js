import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useScale, { withScale } from '../use-scale';
var defaultProps = {
  className: ''
};

var PageContentComponent = function PageContentComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  return /*#__PURE__*/React.createElement("main", _extends({}, props, {
    className: _JSXStyle.dynamic([["3887979816", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(3.125), SCALES.pr(0), SCALES.pb(3.125), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3887979816",
    dynamic: [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, '100%'), SCALES.pt(3.125), SCALES.pr(0), SCALES.pb(3.125), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "main.__jsx-style-dynamic-selector{font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, '100%'), ";padding:").concat(SCALES.pt(3.125), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(3.125), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

PageContentComponent.defaultProps = defaultProps;
PageContentComponent.displayName = 'GeistPageContent';
var PageContent = withScale(PageContentComponent);
export default PageContent;