import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import BreadcrumbsSeparator from './breadcrumbs-separator';
import { addColorAlpha } from '../utils/color';
import useScale, { withScale } from '../use-scale';
var defaultProps = {
  separator: '/',
  className: ''
};

var BreadcrumbsComponent = function BreadcrumbsComponent(_ref) {
  var separator = _ref.separator,
      children = _ref.children,
      className = _ref.className;
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var hoverColor = useMemo(function () {
    return addColorAlpha(theme.palette.link, 0.85);
  }, [theme.palette.link]);
  var childrenArray = React.Children.toArray(children);
  var withSeparatorChildren = childrenArray.map(function (item, index) {
    if (! /*#__PURE__*/React.isValidElement(item)) return item;
    var last = childrenArray[index - 1];
    var lastIsSeparator = /*#__PURE__*/React.isValidElement(last) && last.type === BreadcrumbsSeparator;
    var currentIsSeparator = item.type === BreadcrumbsSeparator;

    if (!lastIsSeparator && !currentIsSeparator && index > 0) {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: index
      }, /*#__PURE__*/React.createElement(BreadcrumbsSeparator, null, separator), item);
    }

    return item;
  });
  return /*#__PURE__*/React.createElement("nav", {
    className: _JSXStyle.dynamic([["524763277", [theme.palette.accents_4, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverColor, theme.palette.accents_6]]]) + " " + (className || "")
  }, withSeparatorChildren, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "524763277",
    dynamic: [theme.palette.accents_4, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverColor, theme.palette.accents_6]
  }, "nav.__jsx-style-dynamic-selector{line-height:inherit;color:".concat(theme.palette.accents_4, ";box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}nav.__jsx-style-dynamic-selector .link:hover{color:").concat(hoverColor, ";}nav.__jsx-style-dynamic-selector>span:last-of-type{color:").concat(theme.palette.accents_6, ";}nav.__jsx-style-dynamic-selector>.separator:last-child{display:none;}nav.__jsx-style-dynamic-selector svg{width:1em;height:1em;margin:0 4px;}nav.__jsx-style-dynamic-selector .breadcrumbs-item{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}")));
};

BreadcrumbsComponent.defaultProps = defaultProps;
BreadcrumbsComponent.displayName = 'GeistBreadcrumbs';
var Breadcrumbs = withScale(BreadcrumbsComponent);
export default Breadcrumbs;