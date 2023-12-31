import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "className", "icon", "count", "value", "initialValue", "onValueChange", "locked", "onLockedChange"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useMemo, useState } from 'react';
import { tupleNumber } from '../utils/prop-types';
import RatingIcon from './rating-icon';
import useTheme from '../use-theme';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var ratingCountTuple = tupleNumber(2, 3, 4, 5, 6, 7, 8, 9, 10);
var ratingValueTuple = tupleNumber(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var defaultProps = {
  type: 'default',
  className: '',
  icon: /*#__PURE__*/React.createElement(RatingIcon, null),
  count: 5,
  initialValue: 1,
  locked: false
};

var getColor = function getColor(type, palette) {
  var colors = {
    "default": palette.foreground,
    success: palette.success,
    warning: palette.warning,
    error: palette.error
  };
  return colors[type] || colors["default"];
};

var RatingComponent = function RatingComponent(_ref) {
  var type = _ref.type,
      className = _ref.className,
      icon = _ref.icon,
      count = _ref.count,
      customValue = _ref.value,
      initialValue = _ref.initialValue,
      onValueChange = _ref.onValueChange,
      locked = _ref.locked,
      onLockedChange = _ref.onLockedChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var color = useMemo(function () {
    return getColor(type, theme.palette);
  }, [type, theme.palette]);

  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(locked),
      _useState4 = _slicedToArray(_useState3, 2),
      isLocked = _useState4[0],
      setIsLocked = _useState4[1];

  var lockedChangeHandler = function lockedChangeHandler(next) {
    setIsLocked(next);
    onLockedChange && onLockedChange(next);
  };

  var valueChangeHandler = function valueChangeHandler(next) {
    setValue(next);
    var emitValue = next > count ? count : next;
    onValueChange && onValueChange(emitValue);
  };

  var clickHandler = function clickHandler(index) {
    if (isLocked) return lockedChangeHandler(false);
    valueChangeHandler(index);
    lockedChangeHandler(true);
  };

  var mouseEnterHandler = function mouseEnterHandler(index) {
    if (isLocked) return;
    valueChangeHandler(index);
  };

  useEffect(function () {
    if (typeof customValue === 'undefined') return;
    setValue(customValue < 0 ? 0 : customValue);
  }, [customValue]);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["884600549", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color, isLocked ? 'default' : 'pointer', color]]]) + " " + (props && props.className != null && props.className || useClasses('rating', className) || "")
  }), _toConsumableArray(Array(count)).map(function (_, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      onMouseEnter: function onMouseEnter() {
        return mouseEnterHandler(index + 1);
      },
      onClick: function onClick() {
        return clickHandler(index + 1);
      },
      className: _JSXStyle.dynamic([["884600549", [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color, isLocked ? 'default' : 'pointer', color]]]) + " " + (useClasses('icon-box', {
        hovered: index + 1 <= value
      }) || "")
    }, icon);
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "884600549",
    dynamic: [SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), color, isLocked ? 'default' : 'pointer', color]
  }, ".rating.__jsx-style-dynamic-selector{box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;--rating-font-size:".concat(SCALES.font(1), ";font-size:var(--rating-font-size);width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.icon-box.__jsx-style-dynamic-selector{box-sizing:border-box;color:").concat(color, ";width:calc(var(--rating-font-size) * 1.5);height:calc(var(--rating-font-size) * 1.5);margin-right:calc(var(--rating-font-size) * 1 / 5);cursor:").concat(isLocked ? 'default' : 'pointer', ";}.icon-box.__jsx-style-dynamic-selector svg{width:100%;height:100%;fill:transparent;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform,color,fill 30ms linear;-webkit-transition:transform,color,fill 30ms linear;transition:transform,color,fill 30ms linear;}.hovered.__jsx-style-dynamic-selector svg{fill:").concat(color, ";-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}")));
};

RatingComponent.defaultProps = defaultProps;
RatingComponent.displayName = 'GeistRating';
var Rating = withScale(RatingComponent);
export default Rating;