import React from 'react';
var defaultContext = {
  columns: [],
  updateColumn: function updateColumn() {}
};
export var TableContext = /*#__PURE__*/React.createContext(defaultContext);
export var useTableContext = function useTableContext() {
  return React.useContext(TableContext);
};