import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';

var CollapseIcon = function CollapseIcon(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    style: {
      color: 'currentColor'
    },
    className: _JSXStyle.dynamic([["2249786880", [active ? '-180deg' : '0']]])
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    className: _JSXStyle.dynamic([["2249786880", [active ? '-180deg' : '0']]])
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2249786880",
    dynamic: [active ? '-180deg' : '0']
  }, "svg.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 200ms ease;-webkit-transition:transform 200ms ease;transition:transform 200ms ease;-webkit-transform:rotateZ(".concat(active ? '-180deg' : '0', ");-ms-transform:rotateZ(").concat(active ? '-180deg' : '0', ");transform:rotateZ(").concat(active ? '-180deg' : '0', ");width:1.5em;height:1.5em;}")));
};

var MemoCollapseIcon = /*#__PURE__*/React.memo(CollapseIcon);
export default MemoCollapseIcon;