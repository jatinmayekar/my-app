import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["xs", "sm", "md", "lg", "xl", "justify", "direction", "alignItems", "alignContent", "children", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import useScale from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  className: ''
};

var getItemLayout = function getItemLayout(val) {
  var display = val === 0 ? 'display: none;' : 'display: inherit;';

  if (typeof val === 'number') {
    var width = 100 / 24 * val;
    var ratio = width > 100 ? '100%' : width < 0 ? '0' : "".concat(width, "%");
    return {
      grow: 0,
      display: display,
      width: ratio,
      basis: ratio
    };
  }

  return {
    grow: 1,
    display: display,
    width: '100%',
    basis: '0'
  };
};

var GridBasicItem = function GridBasicItem(_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      justify = _ref.justify,
      direction = _ref.direction,
      alignItems = _ref.alignItems,
      alignContent = _ref.alignContent,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var classes = useMemo(function () {
    var aligns = {
      justify: justify,
      direction: direction,
      alignItems: alignItems,
      alignContent: alignContent,
      xs: xs,
      sm: sm,
      md: md,
      lg: lg,
      xl: xl
    };
    var classString = Object.keys(aligns).reduce(function (pre, name) {
      if (aligns[name] !== undefined && aligns[name] !== false) return "".concat(pre, " ").concat(name);
      return pre;
    }, '');
    return classString.trim();
  }, [justify, direction, alignItems, alignContent, xs, sm, md, lg, xl]);
  var layout = useMemo(function () {
    return {
      xs: getItemLayout(xs),
      sm: getItemLayout(sm),
      md: getItemLayout(md),
      lg: getItemLayout(lg),
      xl: getItemLayout(xl)
    };
  }, [xs, sm, md, lg, xl]);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["568430467", [SCALES.font(1, 'inherit'), SCALES.height(1, 'auto'), justify, direction, alignContent, alignItems, layout.xs.grow, layout.xs.width, layout.xs.basis, layout.xs.display, theme.breakpoints.sm.min, layout.sm.grow, layout.sm.width, layout.sm.basis, layout.sm.display, theme.breakpoints.md.min, layout.md.grow, layout.md.width, layout.md.basis, layout.md.display, theme.breakpoints.lg.min, layout.lg.grow, layout.lg.width, layout.lg.basis, layout.lg.display, theme.breakpoints.xl.min, layout.xl.grow, layout.xl.width, layout.xl.basis, layout.xl.display]]]) + " " + (props && props.className != null && props.className || useClasses('item', classes, className) || "")
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "568430467",
    dynamic: [SCALES.font(1, 'inherit'), SCALES.height(1, 'auto'), justify, direction, alignContent, alignItems, layout.xs.grow, layout.xs.width, layout.xs.basis, layout.xs.display, theme.breakpoints.sm.min, layout.sm.grow, layout.sm.width, layout.sm.basis, layout.sm.display, theme.breakpoints.md.min, layout.md.grow, layout.md.width, layout.md.basis, layout.md.display, theme.breakpoints.lg.min, layout.lg.grow, layout.lg.width, layout.lg.basis, layout.lg.display, theme.breakpoints.xl.min, layout.xl.grow, layout.xl.width, layout.xl.basis, layout.xl.display]
  }, ".item.__jsx-style-dynamic-selector{font-size:".concat(SCALES.font(1, 'inherit'), ";height:").concat(SCALES.height(1, 'auto'), ";}.justify.__jsx-style-dynamic-selector{-webkit-box-pack:").concat(justify, ";-webkit-justify-content:").concat(justify, ";-ms-flex-pack:").concat(justify, ";justify-content:").concat(justify, ";}.direction.__jsx-style-dynamic-selector{-webkit-flex-direction:").concat(direction, ";-ms-flex-direction:").concat(direction, ";flex-direction:").concat(direction, ";}.alignContent.__jsx-style-dynamic-selector{-webkit-align-content:").concat(alignContent, ";-ms-flex-line-pack:").concat(alignContent, ";align-content:").concat(alignContent, ";}.alignItems.__jsx-style-dynamic-selector{-webkit-align-items:").concat(alignItems, ";-webkit-box-align:").concat(alignItems, ";-ms-flex-align:").concat(alignItems, ";align-items:").concat(alignItems, ";}.xs.__jsx-style-dynamic-selector{-webkit-box-flex:").concat(layout.xs.grow, ";-webkit-flex-grow:").concat(layout.xs.grow, ";-ms-flex-positive:").concat(layout.xs.grow, ";flex-grow:").concat(layout.xs.grow, ";max-width:").concat(layout.xs.width, ";-webkit-flex-basis:").concat(layout.xs.basis, ";-ms-flex-preferred-size:").concat(layout.xs.basis, ";flex-basis:").concat(layout.xs.basis, ";").concat(layout.xs.display, ";}@media only screen and (min-width:").concat(theme.breakpoints.sm.min, "){.sm.__jsx-style-dynamic-selector{-webkit-box-flex:").concat(layout.sm.grow, ";-webkit-flex-grow:").concat(layout.sm.grow, ";-ms-flex-positive:").concat(layout.sm.grow, ";flex-grow:").concat(layout.sm.grow, ";max-width:").concat(layout.sm.width, ";-webkit-flex-basis:").concat(layout.sm.basis, ";-ms-flex-preferred-size:").concat(layout.sm.basis, ";flex-basis:").concat(layout.sm.basis, ";").concat(layout.sm.display, ";}}@media only screen and (min-width:").concat(theme.breakpoints.md.min, "){.md.__jsx-style-dynamic-selector{-webkit-box-flex:").concat(layout.md.grow, ";-webkit-flex-grow:").concat(layout.md.grow, ";-ms-flex-positive:").concat(layout.md.grow, ";flex-grow:").concat(layout.md.grow, ";max-width:").concat(layout.md.width, ";-webkit-flex-basis:").concat(layout.md.basis, ";-ms-flex-preferred-size:").concat(layout.md.basis, ";flex-basis:").concat(layout.md.basis, ";").concat(layout.md.display, ";}}@media only screen and (min-width:").concat(theme.breakpoints.lg.min, "){.lg.__jsx-style-dynamic-selector{-webkit-box-flex:").concat(layout.lg.grow, ";-webkit-flex-grow:").concat(layout.lg.grow, ";-ms-flex-positive:").concat(layout.lg.grow, ";flex-grow:").concat(layout.lg.grow, ";max-width:").concat(layout.lg.width, ";-webkit-flex-basis:").concat(layout.lg.basis, ";-ms-flex-preferred-size:").concat(layout.lg.basis, ";flex-basis:").concat(layout.lg.basis, ";").concat(layout.lg.display, ";}}@media only screen and (min-width:").concat(theme.breakpoints.xl.min, "){.xl.__jsx-style-dynamic-selector{-webkit-box-flex:").concat(layout.xl.grow, ";-webkit-flex-grow:").concat(layout.xl.grow, ";-ms-flex-positive:").concat(layout.xl.grow, ";flex-grow:").concat(layout.xl.grow, ";max-width:").concat(layout.xl.width, ";-webkit-flex-basis:").concat(layout.xl.basis, ";-ms-flex-preferred-size:").concat(layout.xl.basis, ";flex-basis:").concat(layout.xl.basis, ";").concat(layout.xl.display, ";}}")));
};

GridBasicItem.defaultProps = defaultProps;
GridBasicItem.displayName = 'GeistGridBasicItem';
export default GridBasicItem;