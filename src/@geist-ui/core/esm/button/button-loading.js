import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import Loading from '../loading';

var ButtonLoading = function ButtonLoading(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement("div", {
    className: "jsx-3416748964" + " " + "btn-loading"
  }, /*#__PURE__*/React.createElement(Loading, {
    color: color
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3416748964"
  }, ".btn-loading.jsx-3416748964{position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;background-color:var(--geist-ui-button-bg);}"));
};

ButtonLoading.displayName = 'GeistButtonLoading';
export default ButtonLoading;