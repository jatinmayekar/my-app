import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import { useAutoCompleteContext } from './auto-complete-context';
import Dropdown from '../shared/dropdown';
import useClasses from '../use-classes';
var defaultProps = {
  className: '',
  dropdownStyle: {}
};

var AutoCompleteDropdown = function AutoCompleteDropdown(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      className = _ref.className,
      dropdownStyle = _ref.dropdownStyle,
      disableMatchWidth = _ref.disableMatchWidth,
      getPopupContainer = _ref.getPopupContainer;
  var theme = useTheme();

  var _useAutoCompleteConte = useAutoCompleteContext(),
      ref = _useAutoCompleteConte.ref;

  var isEmpty = useMemo(function () {
    return !visible || React.Children.count(children) === 0;
  }, [children, visible]);
  var classes = useClasses('auto-complete-dropdown', className);

  var clickHandler = function clickHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  return /*#__PURE__*/React.createElement(Dropdown, {
    parent: ref,
    visible: visible,
    disableMatchWidth: disableMatchWidth,
    getPopupContainer: getPopupContainer
  }, /*#__PURE__*/React.createElement("div", {
    style: dropdownStyle,
    onClick: clickHandler,
    className: _JSXStyle.dynamic([["155200262", [theme.layout.radius, isEmpty ? 'none' : theme.expressiveness.shadowLarge, theme.palette.background]]]) + " " + (classes || "")
  }, children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "155200262",
    dynamic: [theme.layout.radius, isEmpty ? 'none' : theme.expressiveness.shadowLarge, theme.palette.background]
  }, ".auto-complete-dropdown.__jsx-style-dynamic-selector{border-radius:".concat(theme.layout.radius, ";box-shadow:").concat(isEmpty ? 'none' : theme.expressiveness.shadowLarge, ";background-color:").concat(theme.palette.background, ";overflow-y:auto;max-height:15rem;overflow-anchor:none;}"))));
};

AutoCompleteDropdown.defaultProps = defaultProps;
AutoCompleteDropdown.displayName = 'GeistAutoCompleteDropdown';
export default AutoCompleteDropdown;