import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["type", "children", "className", "invert"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
var defaultProps = {
  type: 'default',
  invert: false,
  className: ''
};

var getColors = function getColors(type, palette, invert) {
  var colors = {
    "default": {
      color: palette.foreground
    },
    success: {
      color: palette.success
    },
    warning: {
      color: palette.warning
    },
    error: {
      color: palette.error
    },
    secondary: {
      color: palette.secondary
    },
    dark: {
      color: palette.foreground,
      bgColor: palette.background
    },
    lite: {
      color: palette.foreground,
      bgColor: palette.accents_2
    }
  };
  var hideBorder = invert || type === 'lite';

  var cardStyle = _extends({}, colors[type], {
    bgColor: colors[type].bgColor || palette.background,
    borderColor: hideBorder ? 'transparent' : colors[type].color
  });

  return !invert ? cardStyle : _extends({}, cardStyle, {
    color: cardStyle.bgColor,
    bgColor: cardStyle.color
  });
};

var TagComponent = function TagComponent(_ref) {
  var type = _ref.type,
      children = _ref.children,
      className = _ref.className,
      invert = _ref.invert,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useMemo = useMemo(function () {
    return getColors(type, theme.palette, invert);
  }, [type, theme.palette, invert]),
      color = _useMemo.color,
      bgColor = _useMemo.bgColor,
      borderColor = _useMemo.borderColor;

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: _JSXStyle.dynamic([["3652870078", [borderColor, bgColor, color, SCALES.height(0.3125), SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1.75), SCALES.pt(0.375), SCALES.pr(0.375), SCALES.pb(0.375), SCALES.pl(0.375), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3652870078",
    dynamic: [borderColor, bgColor, color, SCALES.height(0.3125), SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1.75), SCALES.pt(0.375), SCALES.pr(0.375), SCALES.pb(0.375), SCALES.pl(0.375), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "span.__jsx-style-dynamic-selector{display:inline-block;border:1px solid ".concat(borderColor, ";background-color:").concat(bgColor, ";color:").concat(color, ";box-sizing:border-box;line-height:1em;border-radius:").concat(SCALES.height(0.3125), ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1.75), ";padding:").concat(SCALES.pt(0.375), " ").concat(SCALES.pr(0.375), " ").concat(SCALES.pb(0.375), " ").concat(SCALES.pl(0.375), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

TagComponent.defaultProps = defaultProps;
TagComponent.displayName = 'GeistTag';
var Tag = withScale(TagComponent);
export default Tag;