import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import TableCell from './table-cell';
import { useTableContext } from './table-context';
import useClasses from '../use-classes';
var defaultProps = {
  className: ''
};

var TableBody = function TableBody(_ref) {
  var data = _ref.data,
      hover = _ref.hover,
      emptyText = _ref.emptyText,
      onRow = _ref.onRow,
      onCell = _ref.onCell,
      rowClassName = _ref.rowClassName;
  var theme = useTheme();

  var _useTableContext = useTableContext(),
      columns = _useTableContext.columns;

  var rowClickHandler = function rowClickHandler(row, index) {
    onRow && onRow(row, index);
  };

  return /*#__PURE__*/React.createElement("tbody", {
    className: _JSXStyle.dynamic([["3433300570", [theme.palette.accents_1, theme.palette.border, theme.palette.accents_6]]])
  }, data.map(function (row, index) {
    var className = rowClassName(row, index);
    return /*#__PURE__*/React.createElement("tr", {
      key: "tbody-row-".concat(index),
      onClick: function onClick() {
        return rowClickHandler(row, index);
      },
      className: _JSXStyle.dynamic([["3433300570", [theme.palette.accents_1, theme.palette.border, theme.palette.accents_6]]]) + " " + (useClasses({
        hover: hover
      }, className) || "")
    }, /*#__PURE__*/React.createElement(TableCell, {
      columns: columns,
      row: row,
      rowIndex: index,
      emptyText: emptyText,
      onCellClick: onCell
    }));
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3433300570",
    dynamic: [theme.palette.accents_1, theme.palette.border, theme.palette.accents_6]
  }, "tr.__jsx-style-dynamic-selector{-webkit-transition:background-color 0.25s ease;transition:background-color 0.25s ease;font-size:inherit;}tr.hover.__jsx-style-dynamic-selector:hover{background-color:".concat(theme.palette.accents_1, ";}tr.__jsx-style-dynamic-selector td{padding:0 0.5em;border-bottom:1px solid ").concat(theme.palette.border, ";color:").concat(theme.palette.accents_6, ";font-size:calc(0.875 * var(--table-font-size));text-align:left;}tr.__jsx-style-dynamic-selector .cell{min-height:calc(3.125 * var(--table-font-size));display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}")));
};

TableBody.defaultProps = defaultProps;
TableBody.displayName = 'GeistTableBody';
export default TableBody;