import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';

var CheckboxIconComponent = function CheckboxIconComponent(_ref) {
  var fill = _ref.fill,
      bg = _ref.bg,
      disabled = _ref.disabled,
      checked = _ref.checked;
  var theme = useTheme();

  var _useMemo = useMemo(function () {
    return {
      propsFill: fill,
      propsBg: bg
    };
  }, [theme.palette]),
      propsFill = _useMemo.propsFill,
      propsBg = _useMemo.propsBg;

  return /*#__PURE__*/React.createElement(React.Fragment, null, checked ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 17 16",
    fill: "none",
    className: _JSXStyle.dynamic([["996181129", [disabled ? 0.4 : 1, disabled ? 'not-allowed' : 'pointer']]])
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.1429 0H3.85714C1.7269 0 0 1.79086 0 4V12C0 14.2091 1.7269 16 3.85714 16H12.1429C14.2731 16 16 14.2091 16 12V4C16 1.79086 14.2731 0 12.1429 0Z",
    fill: propsFill,
    className: _JSXStyle.dynamic([["996181129", [disabled ? 0.4 : 1, disabled ? 'not-allowed' : 'pointer']]])
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3L7.72491 11L5 8",
    stroke: propsBg,
    strokeWidth: "1.5",
    className: _JSXStyle.dynamic([["996181129", [disabled ? 0.4 : 1, disabled ? 'not-allowed' : 'pointer']]])
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 12",
    fill: "none",
    className: _JSXStyle.dynamic([["996181129", [disabled ? 0.4 : 1, disabled ? 'not-allowed' : 'pointer']]])
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 0.5H3.5C1.84315 0.5 0.5 1.84315 0.5 3.5V8.5C0.5 10.1569 1.84315 11.5 3.5 11.5H8.5C10.1569 11.5 11.5 10.1569 11.5 8.5V3.5C11.5 1.84315 10.1569 0.5 8.5 0.5Z",
    stroke: theme.palette.accents_5,
    className: _JSXStyle.dynamic([["996181129", [disabled ? 0.4 : 1, disabled ? 'not-allowed' : 'pointer']]])
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "996181129",
    dynamic: [disabled ? 0.4 : 1, disabled ? 'not-allowed' : 'pointer']
  }, "svg.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:calc(0.86 * var(--checkbox-size));height:calc(0.86 * var(--checkbox-size));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:".concat(disabled ? 0.4 : 1, ";cursor:").concat(disabled ? 'not-allowed' : 'pointer', ";}")));
};

CheckboxIconComponent.displayName = 'GeistCheckboxIcon';
var CheckboxIcon = /*#__PURE__*/React.memo(CheckboxIconComponent);
export default CheckboxIcon;