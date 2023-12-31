import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
var defaultProps = {
  className: ''
};

var makeColgroup = function makeColgroup(width, columns) {
  var unsetWidthCount = columns.filter(function (c) {
    return !c.width;
  }).length;
  var customWidthTotal = columns.reduce(function (pre, current) {
    return current.width ? pre + current.width : pre;
  }, 0);
  var averageWidth = (width - customWidthTotal) / unsetWidthCount;
  if (averageWidth <= 0) return /*#__PURE__*/React.createElement("colgroup", null);
  return /*#__PURE__*/React.createElement("colgroup", null, columns.map(function (column, index) {
    return /*#__PURE__*/React.createElement("col", {
      key: "colgroup-".concat(index),
      width: column.width || averageWidth
    });
  }));
};

var TableHead = function TableHead(props) {
  var theme = useTheme();
  var _ref = props,
      columns = _ref.columns,
      width = _ref.width;
  var isScalableWidth = useMemo(function () {
    return columns.find(function (item) {
      return !!item.width;
    });
  }, [columns]);
  var colgroup = useMemo(function () {
    if (!isScalableWidth) return /*#__PURE__*/React.createElement("colgroup", null);
    return makeColgroup(width, columns);
  }, [isScalableWidth, width]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, colgroup, /*#__PURE__*/React.createElement("thead", {
    className: _JSXStyle.dynamic([["134865897", [theme.palette.accents_5, theme.palette.accents_1, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius]]])
  }, /*#__PURE__*/React.createElement("tr", {
    className: _JSXStyle.dynamic([["134865897", [theme.palette.accents_5, theme.palette.accents_1, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius]]])
  }, columns.map(function (column, index) {
    return /*#__PURE__*/React.createElement("th", {
      key: "table-th-".concat(column.prop, "-").concat(index),
      className: _JSXStyle.dynamic([["134865897", [theme.palette.accents_5, theme.palette.accents_1, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius]]]) + " " + (column.className || "")
    }, /*#__PURE__*/React.createElement("div", {
      className: _JSXStyle.dynamic([["134865897", [theme.palette.accents_5, theme.palette.accents_1, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius]]]) + " " + "thead-box"
    }, column.label));
  }))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "134865897",
    dynamic: [theme.palette.accents_5, theme.palette.accents_1, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius, theme.palette.border, theme.palette.border, theme.palette.border, theme.layout.radius, theme.layout.radius]
  }, "thead.__jsx-style-dynamic-selector{border-collapse:separate;border-spacing:0;font-size:inherit;}th.__jsx-style-dynamic-selector{padding:0 0.5em;font-size:calc(0.75 * var(--table-font-size));font-weight:normal;text-align:left;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;vertical-align:middle;min-height:calc(2.5 * var(--table-font-size));color:".concat(theme.palette.accents_5, ";background:").concat(theme.palette.accents_1, ";border-bottom:1px solid ").concat(theme.palette.border, ";border-top:1px solid ").concat(theme.palette.border, ";border-radius:0;}th.__jsx-style-dynamic-selector:nth-child(1){border-bottom:1px solid ").concat(theme.palette.border, ";border-left:1px solid ").concat(theme.palette.border, ";border-top:1px solid ").concat(theme.palette.border, ";border-top-left-radius:").concat(theme.layout.radius, ";border-bottom-left-radius:").concat(theme.layout.radius, ";}th.__jsx-style-dynamic-selector:last-child{border-bottom:1px solid ").concat(theme.palette.border, ";border-right:1px solid ").concat(theme.palette.border, ";border-top:1px solid ").concat(theme.palette.border, ";border-top-right-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";}.thead-box.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-align:center;min-height:calc(2.5 * var(--table-font-size));text-transform:uppercase;}")));
};

TableHead.defaultProps = defaultProps;
TableHead.displayName = 'GeistTableHead';
export default TableHead;