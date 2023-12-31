import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';

var TreeIndents = function TreeIndents(_ref) {
  var count = _ref.count;
  if (count === 0) return null;
  return (
    /*#__PURE__*/

    /* eslint-disable react/jsx-no-useless-fragment */
    React.createElement(React.Fragment, null, _toConsumableArray(new Array(count)).map(function (_, index) {
      return /*#__PURE__*/React.createElement("span", {
        key: "indent-".concat(index),
        className: _JSXStyle.dynamic([["2622387629", [index + 1]]]) + " " + "indent"
      }, /*#__PURE__*/React.createElement(_JSXStyle, {
        id: "2622387629",
        dynamic: [index + 1]
      }, "span.indent.__jsx-style-dynamic-selector{left:calc(-1.875rem * ".concat(index + 1, " + 0.75rem);}")));
    }))
    /* eslint-enable */

  );
};

export default TreeIndents;