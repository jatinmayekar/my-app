import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "line", "title", "className", "onClick", "disableAutoClose"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import { usePopoverContext } from './popover-context';
import useClasses from '../use-classes';
var defaultProps = {
  line: false,
  title: false,
  disableAutoClose: false,
  className: ''
};

var PopoverItemComponent = function PopoverItemComponent(_ref) {
  var children = _ref.children,
      line = _ref.line,
      title = _ref.title,
      className = _ref.className,
      onClick = _ref.onClick,
      disableAutoClose = _ref.disableAutoClose,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _usePopoverContext = usePopoverContext(),
      disableItemsAutoClose = _usePopoverContext.disableItemsAutoClose,
      onItemClick = _usePopoverContext.onItemClick;

  var hasHandler = Boolean(onClick);
  var dontCloseByClick = disableAutoClose || disableItemsAutoClose || title || line;
  var classes = useClasses('item', {
    line: line,
    title: title
  }, className);

  var clickHandler = function clickHandler(event) {
    onClick && onClick(event);

    if (dontCloseByClick) {
      return event.stopPropagation();
    }

    onItemClick(event);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({
    onClick: clickHandler
  }, props, {
    className: _JSXStyle.dynamic([["190621384", [theme.palette.accents_5, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.5), SCALES.pr(0.75), SCALES.pb(0.5), SCALES.pl(0.75), hasHandler ? 'pointer' : 'default', theme.palette.foreground, theme.palette.border, SCALES.height(0.0625), SCALES.mt(0.35), SCALES.mr(0), SCALES.mb(0.35), SCALES.ml(0), SCALES.width(1, '100%'), SCALES.font(0.925), theme.palette.foreground]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "190621384",
    dynamic: [theme.palette.accents_5, SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), SCALES.pt(0.5), SCALES.pr(0.75), SCALES.pb(0.5), SCALES.pl(0.75), hasHandler ? 'pointer' : 'default', theme.palette.foreground, theme.palette.border, SCALES.height(0.0625), SCALES.mt(0.35), SCALES.mr(0), SCALES.mb(0.35), SCALES.ml(0), SCALES.width(1, '100%'), SCALES.font(0.925), theme.palette.foreground]
  }, ".item.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:".concat(theme.palette.accents_5, ";-webkit-transition:color,background-color 150ms linear;transition:color,background-color 150ms linear;line-height:1.25em;font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";padding:").concat(SCALES.pt(0.5), " ").concat(SCALES.pr(0.75), " ").concat(SCALES.pb(0.5), " ").concat(SCALES.pl(0.75), ";cursor:").concat(hasHandler ? 'pointer' : 'default', ";}.item.__jsx-style-dynamic-selector:hover{color:").concat(theme.palette.foreground, ";}.item.line.__jsx-style-dynamic-selector{line-height:0;padding:0;background-color:").concat(theme.palette.border, ";height:").concat(SCALES.height(0.0625), ";margin:").concat(SCALES.mt(0.35), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0.35), " ").concat(SCALES.ml(0), ";width:").concat(SCALES.width(1, '100%'), ";}.item.title.__jsx-style-dynamic-selector{font-weight:500;font-size:").concat(SCALES.font(0.925), ";color:").concat(theme.palette.foreground, ";}"))), title && /*#__PURE__*/React.createElement(PopoverItem, {
    line: true,
    title: false
  }));
};

PopoverItemComponent.defaultProps = defaultProps;
PopoverItemComponent.displayName = 'GeistPopoverItem';
var PopoverItem = withScale(PopoverItemComponent);
export default PopoverItem;