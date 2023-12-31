import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import { getIconPosition } from './placement';
import useTheme from '../use-theme';

var TooltipIcon = function TooltipIcon(_ref) {
  var placement = _ref.placement,
      shadow = _ref.shadow;
  var theme = useTheme();

  var _useMemo = useMemo(function () {
    return getIconPosition(placement, 'var(--tooltip-icon-offset-x)', 'var(--tooltip-icon-offset-y)');
  }, [placement]),
      transform = _useMemo.transform,
      top = _useMemo.top,
      left = _useMemo.left,
      right = _useMemo.right,
      bottom = _useMemo.bottom;

  var bgColorWithDark = useMemo(function () {
    if (!shadow || theme.type !== 'dark') return 'var(--tooltip-content-bg)';
    return theme.palette.accents_2;
  }, [theme.type, shadow]);
  return /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["2440507693", [bgColorWithDark, left, top, right, bottom, transform]]])
  }, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2440507693",
    dynamic: [bgColorWithDark, left, top, right, bottom, transform]
  }, "span.__jsx-style-dynamic-selector{width:0;height:0;border-style:solid;border-width:6px 7px 6px 0;border-color:transparent ".concat(bgColorWithDark, " transparent transparent;position:absolute;left:").concat(left, ";top:").concat(top, ";right:").concat(right, ";bottom:").concat(bottom, ";-webkit-transform:").concat(transform, ";-ms-transform:").concat(transform, ";transform:").concat(transform, ";}")));
};

export default TooltipIcon;