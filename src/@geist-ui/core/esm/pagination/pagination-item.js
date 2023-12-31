import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["active", "children", "disabled", "onClick"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import { addColorAlpha } from '../utils/color';
import useClasses from '../use-classes';

var PaginationItem = function PaginationItem(_ref) {
  var active = _ref.active,
      children = _ref.children,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useMemo = useMemo(function () {
    return [addColorAlpha(theme.palette.success, 0.1), addColorAlpha(theme.palette.success, 0.8)];
  }, [theme.palette.success]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      hover = _useMemo2[0],
      activeHover = _useMemo2[1];

  var classes = useClasses({
    active: active,
    disabled: disabled
  });

  var clickHandler = function clickHandler(event) {
    if (disabled) return;
    onClick && onClick(event);
  };

  return /*#__PURE__*/React.createElement("li", {
    className: _JSXStyle.dynamic([["1657796974", [theme.palette.success, theme.layout.radius, theme.palette.background, hover, theme.palette.success, theme.palette.background, theme.expressiveness.shadowSmall, activeHover, theme.expressiveness.shadowMedium, theme.palette.accents_4, theme.palette.accents_2]]])
  }, /*#__PURE__*/React.createElement("button", _extends({
    onClick: clickHandler
  }, props, {
    className: _JSXStyle.dynamic([["1657796974", [theme.palette.success, theme.layout.radius, theme.palette.background, hover, theme.palette.success, theme.palette.background, theme.expressiveness.shadowSmall, activeHover, theme.expressiveness.shadowMedium, theme.palette.accents_4, theme.palette.accents_2]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1657796974",
    dynamic: [theme.palette.success, theme.layout.radius, theme.palette.background, hover, theme.palette.success, theme.palette.background, theme.expressiveness.shadowSmall, activeHover, theme.expressiveness.shadowMedium, theme.palette.accents_4, theme.palette.accents_2]
  }, "li.__jsx-style-dynamic-selector{margin-right:0.428em;display:inline-block;}button.__jsx-style-dynamic-selector{border:none;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;box-sizing:border-box;text-transform:capitalize;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-align:center;vertical-align:middle;box-shadow:none;outline:none;height:var(--pagination-size);min-width:var(--pagination-size);font-size:inherit;cursor:pointer;color:".concat(theme.palette.success, ";border-radius:").concat(theme.layout.radius, ";background-color:").concat(theme.palette.background, ";-webkit-transition:all linear 200ms 0ms;transition:all linear 200ms 0ms;}button.__jsx-style-dynamic-selector:hover{background-color:").concat(hover, ";}.active.__jsx-style-dynamic-selector{font-weight:bold;background-color:").concat(theme.palette.success, ";color:").concat(theme.palette.background, ";box-shadow:").concat(theme.expressiveness.shadowSmall, ";}.active.__jsx-style-dynamic-selector:hover{background-color:").concat(activeHover, ";box-shadow:").concat(theme.expressiveness.shadowMedium, ";}.disabled.__jsx-style-dynamic-selector{color:").concat(theme.palette.accents_4, ";cursor:not-allowed;}.disabled.__jsx-style-dynamic-selector:hover{background-color:").concat(theme.palette.accents_2, ";}button.__jsx-style-dynamic-selector svg{width:1.3em;height:1.3em;}")));
};

PaginationItem.displayName = 'GeistPaginationItem';
export default PaginationItem;