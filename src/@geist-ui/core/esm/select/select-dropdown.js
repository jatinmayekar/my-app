import _JSXStyle from "../styled-jsx.es.js";
import React, { useImperativeHandle, useRef } from 'react';
import useTheme from '../use-theme';
import { useSelectContext } from './select-context';
import Dropdown from '../shared/dropdown';
import useClasses from '../use-classes';
var defaultProps = {
  className: '',
  dropdownStyle: {}
};
var SelectDropdown = /*#__PURE__*/React.forwardRef(function (_ref, dropdownRef) {
  var visible = _ref.visible,
      children = _ref.children,
      className = _ref.className,
      dropdownStyle = _ref.dropdownStyle,
      disableMatchWidth = _ref.disableMatchWidth,
      getPopupContainer = _ref.getPopupContainer;
  var theme = useTheme();
  var internalDropdownRef = useRef(null);

  var _useSelectContext = useSelectContext(),
      ref = _useSelectContext.ref;

  var classes = useClasses('select-dropdown', className);
  useImperativeHandle(dropdownRef, function () {
    return internalDropdownRef.current;
  });
  return /*#__PURE__*/React.createElement(Dropdown, {
    parent: ref,
    visible: visible,
    disableMatchWidth: disableMatchWidth,
    getPopupContainer: getPopupContainer
  }, /*#__PURE__*/React.createElement("div", {
    ref: internalDropdownRef,
    style: dropdownStyle,
    className: _JSXStyle.dynamic([["2782510679", [theme.layout.radius, theme.expressiveness.shadowLarge, theme.palette.background]]]) + " " + (classes || "")
  }, children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2782510679",
    dynamic: [theme.layout.radius, theme.expressiveness.shadowLarge, theme.palette.background]
  }, ".select-dropdown.__jsx-style-dynamic-selector{border-radius:".concat(theme.layout.radius, ";box-shadow:").concat(theme.expressiveness.shadowLarge, ";background-color:").concat(theme.palette.background, ";max-height:17em;overflow-y:auto;overflow-anchor:none;padding:0.38em 0;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}"))));
});
SelectDropdown.defaultProps = defaultProps;
SelectDropdown.displayName = 'GeistSelectDropdown';
export default SelectDropdown;