import { useEffect } from 'react';
import { useTableContext } from './table-context';
import useWarning from '../utils/use-warning';
var defaultProps = {
  className: '',
  render: function render() {}
};

var TableColumn = function TableColumn(columnProps) {
  var _ref = columnProps,
      children = _ref.children,
      prop = _ref.prop,
      label = _ref.label,
      width = _ref.width,
      className = _ref.className,
      renderHandler = _ref.render;

  var _useTableContext = useTableContext(),
      updateColumn = _useTableContext.updateColumn;

  var safeProp = "".concat(prop).trim();

  if (!safeProp) {
    useWarning('The props "prop" is required.', 'Table.Column');
  }

  useEffect(function () {
    updateColumn({
      label: children || label,
      prop: safeProp,
      width: width,
      className: className,
      renderHandler: renderHandler
    });
  }, [children, label, prop, width, className, renderHandler]);
  return null;
};

TableColumn.defaultProps = defaultProps;
TableColumn.displayName = 'GeistTableColumn';
export default TableColumn;