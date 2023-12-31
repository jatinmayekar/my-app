import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["hideValue", "disabled", "type", "step", "max", "min", "initialValue", "value", "onChange", "className", "showMarkers"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useTheme from '../use-theme';
import useDrag from '../utils/use-drag';
import useCurrentState from '../utils/use-current-state';
import SliderDot from './slider-dot';
import SliderMark from './slider-mark';
import { getColors } from './styles';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  hideValue: false,
  type: 'default',
  initialValue: 0,
  step: 1,
  min: 0,
  max: 100,
  disabled: false,
  showMarkers: false,
  className: ''
};

var getRefWidth = function getRefWidth(elementRef) {
  if (!elementRef || !elementRef.current) return 0;
  var rect = elementRef.current.getBoundingClientRect();
  return rect.width || rect.right - rect.left;
};

var getValue = function getValue(max, min, step, offsetX, railWidth) {
  if (offsetX < 0) return min;
  if (offsetX > railWidth) return max;
  var widthForEachStep = railWidth / (max - min) * step;
  if (widthForEachStep <= 0) return min;
  var slideDistance = Math.round(offsetX / widthForEachStep) * step + min;
  return Number.isInteger(slideDistance) ? slideDistance : Number.parseFloat(slideDistance.toFixed(1));
};

var SliderComponent = function SliderComponent(_ref) {
  var hideValue = _ref.hideValue,
      disabled = _ref.disabled,
      type = _ref.type,
      step = _ref.step,
      max = _ref.max,
      min = _ref.min,
      initialValue = _ref.initialValue,
      customValue = _ref.value,
      onChange = _ref.onChange,
      className = _ref.className,
      showMarkers = _ref.showMarkers,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useCurrentState = useCurrentState(0),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      setSliderWidth = _useCurrentState2[1],
      sideWidthRef = _useCurrentState2[2];

  var _useCurrentState3 = useCurrentState(0),
      _useCurrentState4 = _slicedToArray(_useCurrentState3, 3),
      setLastDargOffset = _useCurrentState4[1],
      lastDargOffsetRef = _useCurrentState4[2];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isClick = _useState4[0],
      setIsClick = _useState4[1];

  var sliderRef = useRef(null);
  var dotRef = useRef(null);
  var currentRatio = useMemo(function () {
    return (value - min) / (max - min) * 100;
  }, [value, max, min]);

  var setLastOffsetManually = function setLastOffsetManually(val) {
    var width = getRefWidth(sliderRef);
    var shouldOffset = (val - min) / (max - min) * width;
    setLastDargOffset(shouldOffset);
  };

  var updateValue = useCallback(function (offset) {
    var currentValue = getValue(max, min, step, offset, sideWidthRef.current);
    setValue(currentValue);
    onChange && onChange(currentValue);
  }, [max, min, step, sideWidthRef]);

  var _useMemo = useMemo(function () {
    return getColors(theme.palette, type);
  }, [theme.palette, type]),
      bg = _useMemo.bg;

  var dragHandler = function dragHandler(event) {
    if (disabled) return;
    var currentOffset = event.currentX - event.startX;
    var offset = currentOffset + lastDargOffsetRef.current;
    updateValue(offset);
  };

  var dragStartHandler = function dragStartHandler() {
    setIsClick(false);
    setSliderWidth(getRefWidth(sliderRef));
  };

  var dragEndHandler = function dragEndHandler(event) {
    if (disabled) return;
    var offset = event.currentX - event.startX;
    var currentOffset = offset + lastDargOffsetRef.current;
    var boundOffset = currentOffset < 0 ? 0 : Math.min(currentOffset, sideWidthRef.current);
    setLastDargOffset(boundOffset);
  };

  var clickHandler = function clickHandler(event) {
    if (disabled) return;
    if (!sliderRef || !sliderRef.current) return;
    setIsClick(true);
    setSliderWidth(getRefWidth(sliderRef));
    var clickOffset = event.clientX - sliderRef.current.getBoundingClientRect().x;
    setLastDargOffset(clickOffset);
    updateValue(clickOffset);
  };

  useDrag(dotRef, dragHandler, dragStartHandler, dragEndHandler);
  useEffect(function () {
    if (customValue === undefined) return;
    if (customValue === value) return;
    setValue(customValue);
  }, [customValue, value]);
  useEffect(function () {
    initialValue && setLastOffsetManually(initialValue);
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: clickHandler,
    ref: sliderRef
  }, props, {
    className: _JSXStyle.dynamic([["219401708", [disabled ? theme.palette.accents_2 : bg, disabled ? 'not-allow' : 'pointer', SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(0.5), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || useClasses('slider', className) || "")
  }), /*#__PURE__*/React.createElement(SliderDot, {
    disabled: disabled,
    ref: dotRef,
    isClick: isClick,
    left: currentRatio
  }, hideValue || value), showMarkers && /*#__PURE__*/React.createElement(SliderMark, {
    max: max,
    min: min,
    step: step
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "219401708",
    dynamic: [disabled ? theme.palette.accents_2 : bg, disabled ? 'not-allow' : 'pointer', SCALES.font(1), SCALES.width(1, '100%'), SCALES.height(0.5), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".slider.__jsx-style-dynamic-selector{border-radius:50px;background-color:".concat(disabled ? theme.palette.accents_2 : bg, ";position:relative;cursor:").concat(disabled ? 'not-allow' : 'pointer', ";--slider-font-size:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, '100%'), ";height:").concat(SCALES.height(0.5), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

SliderComponent.defaultProps = defaultProps;
SliderComponent.displayName = 'GeistSlider';
var Slider = withScale(SliderComponent);
export default Slider;