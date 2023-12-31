import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "component", "gap", "justify", "align", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
var defaultProps = {
  gap: 0,
  justify: 'start',
  align: 'top',
  component: 'div',
  className: ''
};

var getFlexAlignment = function getFlexAlignment(justify, align) {
  var flexJustifyMap = {
    end: 'flex-end',
    center: 'center',
    'space-around': 'space-around',
    'space-between': 'space-between'
  };
  var flexAlignMap = {
    middle: 'center',
    bottom: 'flex-end'
  };
  return {
    justifyValue: flexJustifyMap[justify] || 'normal',
    alignValue: flexAlignMap[align] || 'normal'
  };
};

var Container = function Container(_ref) {
  var children = _ref.children,
      component = _ref.component,
      gap = _ref.gap,
      justify = _ref.justify,
      align = _ref.align,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var Component = component;
  var theme = useTheme();

  var _useMemo = useMemo(function () {
    return getFlexAlignment(justify, align);
  }, [justify, align]),
      justifyValue = _useMemo.justifyValue,
      alignValue = _useMemo.alignValue;

  return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    className: _JSXStyle.dynamic([["2529451939", [gap, theme.layout.gap, gap, theme.layout.gap, gap, theme.layout.gap, justifyValue, alignValue]]]) + " " + (props && props.className != null && props.className || "row ".concat(className))
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2529451939",
    dynamic: [gap, theme.layout.gap, gap, theme.layout.gap, gap, theme.layout.gap, justifyValue, alignValue]
  }, ".row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;box-sizing:border-box;margin-left:calc(".concat(gap, " * ").concat(theme.layout.gap, " / 2);margin-right:calc(").concat(gap, " * ").concat(theme.layout.gap, " / 2);--row-gap:calc(").concat(gap, " * ").concat(theme.layout.gap, ");-webkit-box-pack:").concat(justifyValue, ";-webkit-justify-content:").concat(justifyValue, ";-ms-flex-pack:").concat(justifyValue, ";justify-content:").concat(justifyValue, ";-webkit-align-items:").concat(alignValue, ";-webkit-box-align:").concat(alignValue, ";-ms-flex-align:").concat(alignValue, ";align-items:").concat(alignValue, ";}")));
};

Container.defaultProps = defaultProps;
Container.displayName = 'GeistContainer';
export default Container;