import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
var defaultProps = {
  width: 22,
  height: 22
};

var TreeFileIcon = function TreeFileIcon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: width,
    height: height,
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: _JSXStyle.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z",
    className: _JSXStyle.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 2v7h7",
    className: _JSXStyle.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4043754792",
    dynamic: [color || theme.palette.accents_8]
  }, "svg.__jsx-style-dynamic-selector{color:".concat(color || theme.palette.accents_8, ";}")));
};

TreeFileIcon.defaultProps = defaultProps;
TreeFileIcon.displayName = 'GeistTreeFileIcon';
export default TreeFileIcon;