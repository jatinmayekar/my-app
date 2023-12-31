import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useImperativeHandle, useRef } from 'react';
var SelectInput = /*#__PURE__*/React.forwardRef(function (_ref, inputRef) {
  var visible = _ref.visible,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;
  var ref = useRef(null);
  useImperativeHandle(inputRef, function () {
    return ref.current;
  });
  useEffect(function () {
    if (visible) {
      var _ref$current;

      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
    }
  }, [visible]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "search",
    role: "combobox",
    "aria-haspopup": "listbox",
    readOnly: true,
    unselectable: "on",
    "aria-expanded": visible,
    onBlur: onBlur,
    onFocus: onFocus,
    className: "jsx-2813108835"
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2813108835"
  }, "input.jsx-2813108835{position:fixed;top:-10000px;left:-10000px;opacity:0;z-index:-1;width:0;height:0;padding:0;font-size:0;border:none;}"));
});
SelectInput.displayName = 'GeistSelectInput';
export default SelectInput;