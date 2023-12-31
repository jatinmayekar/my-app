import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _JSXStyle from "../styled-jsx.es.js";
import React, { useState } from 'react';
import PaginationItem from './pagination-item';

var PaginationEllipsis = function PaginationEllipsis(_ref) {
  var isBefore = _ref.isBefore,
      _onClick = _ref.onClick;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMore = _useState2[0],
      setShowMore = _useState2[1];

  return /*#__PURE__*/React.createElement(PaginationItem, {
    onClick: function onClick(e) {
      return _onClick && _onClick(e);
    },
    onMouseEnter: function onMouseEnter() {
      return setShowMore(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShowMore(false);
    }
  }, showMore ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: _JSXStyle.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]]) + " " + "more"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 17l5-5-5-5",
    className: _JSXStyle.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]])
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 17l5-5-5-5",
    className: _JSXStyle.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]])
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision",
    className: _JSXStyle.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]])
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1",
    fill: "currentColor",
    className: _JSXStyle.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]])
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1",
    fill: "currentColor",
    className: _JSXStyle.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]])
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1",
    fill: "currentColor",
    className: _JSXStyle.dynamic([["2928474255", [isBefore ? '180deg' : '0deg']]])
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2928474255",
    dynamic: [isBefore ? '180deg' : '0deg']
  }, "svg.__jsx-style-dynamic-selector{color:currentColor;stroke:currentColor;width:1em;height:1em;}.more.__jsx-style-dynamic-selector{-webkit-transform:rotate(".concat(isBefore ? '180deg' : '0deg', ");-ms-transform:rotate(").concat(isBefore ? '180deg' : '0deg', ");transform:rotate(").concat(isBefore ? '180deg' : '0deg', ");}")));
};

PaginationEllipsis.displayName = 'GeistPaginationEllipsis';
export default PaginationEllipsis;