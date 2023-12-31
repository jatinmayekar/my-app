import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useRef, useState } from 'react';
import useRealShape from '../utils/use-real-shape';
import useClasses from '../use-classes';
var defaultProps = {
  isExpanded: false,
  delay: 200
};

var Expand = function Expand(_ref) {
  var isExpanded = _ref.isExpanded,
      delay = _ref.delay,
      children = _ref.children;

  var _useState = useState(isExpanded ? 'auto' : '0'),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useState3 = useState(isExpanded),
      _useState4 = _slicedToArray(_useState3, 2),
      selfExpanded = _useState4[0],
      setSelfExpanded = _useState4[1];

  var _useState5 = useState(isExpanded),
      _useState6 = _slicedToArray(_useState5, 2),
      visible = _useState6[0],
      setVisible = _useState6[1];

  var contentRef = useRef(null);
  var entryTimer = useRef();
  var leaveTimer = useRef();
  var resetTimer = useRef();

  var _useRealShape = useRealShape(contentRef),
      _useRealShape2 = _slicedToArray(_useRealShape, 2),
      state = _useRealShape2[0],
      updateShape = _useRealShape2[1];

  var classes = useClasses('container', {
    expanded: selfExpanded
  });
  useEffect(function () {
    return setHeight("".concat(state.height, "px"));
  }, [state.height]);
  useEffect(function () {
    // show element or reset height.
    // force an update once manually, even if the element does not change.
    // (the height of the element might be "auto")
    if (isExpanded) {
      setVisible(isExpanded);
    } else {
      updateShape();
      setHeight("".concat(state.height, "px"));
    } // show expand animation


    entryTimer.current = window.setTimeout(function () {
      setSelfExpanded(isExpanded);
      clearTimeout(entryTimer.current);
    }, 30); // Reset height after animation

    if (isExpanded) {
      resetTimer.current = window.setTimeout(function () {
        setHeight('auto');
        clearTimeout(resetTimer.current);
      }, delay);
    } else {
      leaveTimer.current = window.setTimeout(function () {
        setVisible(isExpanded);
        clearTimeout(leaveTimer.current);
      }, delay / 2);
    }

    return function () {
      clearTimeout(entryTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(resetTimer.current);
    };
  }, [isExpanded]);
  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["1918690829", [visible ? 'visible' : 'hidden', delay, height]]]) + " " + (classes || "")
  }, /*#__PURE__*/React.createElement("div", {
    ref: contentRef,
    className: _JSXStyle.dynamic([["1918690829", [visible ? 'visible' : 'hidden', delay, height]]]) + " " + "content"
  }, children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1918690829",
    dynamic: [visible ? 'visible' : 'hidden', delay, height]
  }, ".container.__jsx-style-dynamic-selector{padding:0;margin:0;height:0;overflow:hidden;visibility:".concat(visible ? 'visible' : 'hidden', ";-webkit-transition:height ").concat(delay, "ms ease;transition:height ").concat(delay, "ms ease;}.expanded.__jsx-style-dynamic-selector{height:").concat(height, ";visibility:visible;}")));
};

Expand.defaultProps = defaultProps;
Expand.displayName = 'GeistExpand';
export default Expand;