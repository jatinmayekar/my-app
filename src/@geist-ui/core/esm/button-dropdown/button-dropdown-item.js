import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "onClick", "className", "main", "type"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import { getColor } from './styles';
import { useButtonDropdown } from './button-dropdown-context';
import Loading from '../loading';
var defaultProps = {
  main: false,
  type: 'default',
  onClick: function onClick() {},
  className: ''
};

var ButtonDropdownItem = function ButtonDropdownItem(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      className = _ref.className,
      main = _ref.main,
      selfType = _ref.type,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useButtonDropdown = useButtonDropdown(),
      parentType = _useButtonDropdown.type,
      disabled = _useButtonDropdown.disabled,
      loading = _useButtonDropdown.loading;

  var type = main ? parentType : selfType;
  var colors = getColor(theme.palette, type, disabled);

  var clickHandler = function clickHandler(event) {
    if (disabled || loading) return;
    onClick && onClick(event);
  };

  var cursor = useMemo(function () {
    if (loading) return 'default';
    return disabled ? 'not-allowed' : 'pointer';
  }, [loading, disabled]);
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: clickHandler
  }, props, {
    className: _JSXStyle.dynamic([["772098729", [cursor, colors.bgColor, colors.color, colors.hoverBorder, colors.hoverBgColor]]]) + " " + (props && props.className != null && props.className || className || "")
  }), loading ? /*#__PURE__*/React.createElement(Loading, null) : children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "772098729",
    dynamic: [cursor, colors.bgColor, colors.color, colors.hoverBorder, colors.hoverBgColor]
  }, "button.__jsx-style-dynamic-selector{position:relative;-webkit-appearance:button;text-rendering:auto;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;vertical-align:middle;text-align:center;cursor:".concat(cursor, ";box-sizing:border-box;margin:0;border:none;background-color:").concat(colors.bgColor, ";color:").concat(colors.color, ";width:100%;height:var(--geist-ui-dropdown-height);min-width:var(--geist-ui-dropdown-min-width);padding:var(--geist-ui-dropdown-padding);font-size:var(--geist-ui-dropdown-font-size);}button.__jsx-style-dynamic-selector:hover{border-color:").concat(colors.hoverBorder, ";background-color:").concat(colors.hoverBgColor, ";}")));
};

ButtonDropdownItem.defaultProps = defaultProps;
ButtonDropdownItem.displayName = 'GeistButtonDropdownItem';
export default ButtonDropdownItem;