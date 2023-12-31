import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';

var Ellipsis = function Ellipsis(_ref) {
  var children = _ref.children,
      height = _ref.height;
  return /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["822089635", [height]]])
  }, children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "822089635",
    dynamic: [height]
  }, "span.__jsx-style-dynamic-selector{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:".concat(height, ";min-width:0;}")));
};

export default /*#__PURE__*/React.memo(Ellipsis);