import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "center", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  center: false,
  className: ''
};

var PageHeaderComponent = function PageHeaderComponent(_ref) {
  var children = _ref.children,
      center = _ref.center,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useClasses({
    center: center
  }, className);
  return /*#__PURE__*/React.createElement("header", _extends({}, props, {
    className: _JSXStyle.dynamic([["3053482948", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3053482948",
    dynamic: [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "header.__jsx-style-dynamic-selector{font-size:".concat(SCALES.font(1), ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.center.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}")));
};

PageHeaderComponent.defaultProps = defaultProps;
PageHeaderComponent.displayName = 'GeistPageHeader';
var PageHeader = withScale(PageHeaderComponent);
export default PageHeader;