import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
var defaultProps = {
  width: 22,
  height: 22
};

var TreeFolderIcon = function TreeFolderIcon(_ref) {
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
    d: "M2.707 7.454V5.62C2.707 4.725 3.469 4 4.409 4h4.843c.451 0 .884.17 1.204.474l.49.467c.126.12.296.186.473.186h8.399c.94 0 1.55.695 1.55 1.59v.737m-18.661 0h-.354a.344.344 0 00-.353.35l.508 11.587c.015.34.31.609.668.609h17.283c.358 0 .652-.269.667-.61L22 7.805a.344.344 0 00-.353-.35h-.278m-18.662 0h18.662",
    className: _JSXStyle.dynamic([["4043754792", [color || theme.palette.accents_8]]])
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4043754792",
    dynamic: [color || theme.palette.accents_8]
  }, "svg.__jsx-style-dynamic-selector{color:".concat(color || theme.palette.accents_8, ";}")));
};

TreeFolderIcon.defaultProps = defaultProps;
TreeFolderIcon.displayName = 'GeistTreeFolderIcon';
export default TreeFolderIcon;