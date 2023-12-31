import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "data", "initialData", "hover", "emptyText", "onRow", "onCell", "onChange", "className", "rowClassName"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import TableHead from './table-head';
import TableBody from './table-body';
import useRealShape from '../utils/use-real-shape';
import useResize from '../utils/use-resize';
import { TableContext } from './table-context';
import useScale, { withScale } from '../use-scale';
import TableColumn from './table-column';
var defaultProps = {
  hover: true,
  initialData: [],
  emptyText: '',
  className: '',
  rowClassName: function rowClassName() {
    return '';
  }
};

function TableComponent(tableProps) {
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  var _ref = tableProps,
      children = _ref.children,
      customData = _ref.data,
      initialData = _ref.initialData,
      hover = _ref.hover,
      emptyText = _ref.emptyText,
      onRow = _ref.onRow,
      onCell = _ref.onCell,
      onChange = _ref.onChange,
      className = _ref.className,
      rowClassName = _ref.rowClassName,
      props = _objectWithoutProperties(_ref, _excluded);
  /* eslint-enable @typescript-eslint/no-unused-vars */


  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var ref = useRef(null);

  var _useRealShape = useRealShape(ref),
      _useRealShape2 = _slicedToArray(_useRealShape, 2),
      width = _useRealShape2[0].width,
      updateShape = _useRealShape2[1];

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      columns = _useState2[0],
      setColumns = _useState2[1];

  var _useState3 = useState(initialData),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var updateColumn = function updateColumn(column) {
    setColumns(function (last) {
      var hasColumn = last.find(function (item) {
        return item.prop === column.prop;
      });
      if (!hasColumn) return [].concat(_toConsumableArray(last), [column]);
      return last.map(function (item) {
        if (item.prop !== column.prop) return item;
        return column;
      });
    });
  };

  var contextValue = useMemo(function () {
    return {
      columns: columns,
      updateColumn: updateColumn
    };
  }, [columns]);
  useEffect(function () {
    if (typeof customData === 'undefined') return;
    setData(customData);
  }, [customData]);
  useResize(function () {
    return updateShape();
  });
  return /*#__PURE__*/React.createElement(TableContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement("table", _extends({
    ref: ref
  }, props, {
    className: _JSXStyle.dynamic([["2132340556", [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/React.createElement(TableHead, {
    columns: columns,
    width: width
  }), /*#__PURE__*/React.createElement(TableBody, {
    data: data,
    hover: hover,
    emptyText: emptyText,
    onRow: onRow,
    onCell: onCell,
    rowClassName: rowClassName
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2132340556",
    dynamic: [SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "table.__jsx-style-dynamic-selector{border-collapse:separate;border-spacing:0;--table-font-size:".concat(SCALES.font(1), ";font-size:var(--table-font-size);width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}"))));
}

TableComponent.defaultProps = defaultProps;
TableComponent.displayName = 'GeistTable';
TableComponent.Column = TableColumn;
var Table = withScale(TableComponent);
Table.Column = TableColumn;
export default Table;