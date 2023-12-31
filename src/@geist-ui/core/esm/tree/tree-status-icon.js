import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
var defaultProps = {
  width: 12,
  height: 12,
  active: false
};

var TreeStatusIcon = function TreeStatusIcon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      active = _ref.active;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: width,
    height: height,
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: _JSXStyle.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2",
    className: _JSXStyle.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }), !active && /*#__PURE__*/React.createElement("path", {
    d: "M12 8v8",
    className: _JSXStyle.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12h8",
    className: _JSXStyle.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4043754792",
    dynamic: [color || theme.palette.accents_8]
  }, "svg.__jsx-style-dynamic-selector{color:".concat(color || theme.palette.accents_8, ";}")));
};

TreeStatusIcon.defaultProps = defaultProps;
TreeStatusIcon.displayName = 'GeistTreeStatusIcon';
export default TreeStatusIcon;