import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "hoverable", "className", "shadow", "type"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import { getStyles } from './styles';
import CardFooter from './card-footer';
import CardContent from './card-content';
import Image from '../image';
import { hasChild, pickChild } from '../utils/collections';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  type: 'default',
  hoverable: false,
  shadow: false,
  className: ''
};

var CardComponent = function CardComponent(_ref) {
  var children = _ref.children,
      hoverable = _ref.hoverable,
      className = _ref.className,
      shadow = _ref.shadow,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var hoverShadow = useMemo(function () {
    if (shadow) return theme.expressiveness.shadowMedium;
    return hoverable ? theme.expressiveness.shadowSmall : 'none';
  }, [hoverable, shadow, theme.expressiveness]);

  var _useMemo = useMemo(function () {
    return getStyles(type, theme.palette, shadow);
  }, [type, theme.palette, shadow]),
      color = _useMemo.color,
      bgColor = _useMemo.bgColor,
      borderColor = _useMemo.borderColor;

  var _pickChild = pickChild(children, CardFooter),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      withoutFooterChildren = _pickChild2[0],
      footerChildren = _pickChild2[1];

  var _pickChild3 = pickChild(withoutFooterChildren, Image),
      _pickChild4 = _slicedToArray(_pickChild3, 2),
      withoutImageChildren = _pickChild4[0],
      imageChildren = _pickChild4[1];

  var hasContent = hasChild(withoutImageChildren, CardContent);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["4234389955", [theme.palette.background, theme.layout.radius, shadow ? theme.expressiveness.shadowSmall : 'none', color, bgColor, borderColor, SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverShadow]]]) + " " + (props && props.className != null && props.className || useClasses('card', className) || "")
  }), imageChildren, hasContent ? withoutImageChildren : /*#__PURE__*/React.createElement(CardContent, null, withoutImageChildren), footerChildren, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4234389955",
    dynamic: [theme.palette.background, theme.layout.radius, shadow ? theme.expressiveness.shadowSmall : 'none', color, bgColor, borderColor, SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), hoverShadow]
  }, ".card.__jsx-style-dynamic-selector{background:".concat(theme.palette.background, ";-webkit-transition:all 0.2s ease;transition:all 0.2s ease;border-radius:").concat(theme.layout.radius, ";box-shadow:").concat(shadow ? theme.expressiveness.shadowSmall : 'none', ";box-sizing:border-box;color:").concat(color, ";background-color:").concat(bgColor, ";border:1px solid ").concat(borderColor, ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.card.__jsx-style-dynamic-selector:hover{box-shadow:").concat(hoverShadow, ";}.card.__jsx-style-dynamic-selector img{width:100%;}.card.__jsx-style-dynamic-selector .image{border-bottom-left-radius:0;border-bottom-right-radius:0;}")));
};

CardComponent.defaultProps = defaultProps;
CardComponent.displayName = 'GeistCard';
var Card = withScale(CardComponent);
export default Card;