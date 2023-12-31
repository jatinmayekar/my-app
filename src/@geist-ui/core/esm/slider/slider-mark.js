import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';

var getMarks = function getMarks(min, max, step) {
  var value = max - min;
  var roundFunc = !(value % step) ? Math.floor : Math.ceil;
  var count = roundFunc(value / step) - 1;
  if (count >= 99) return [];
  return _toConsumableArray(new Array(count)).map(function (_, index) {
    return step * (index + 1) * 100 / value;
  });
};

var SliderMark = function SliderMark(_ref) {
  var step = _ref.step,
      max = _ref.max,
      min = _ref.min;
  var theme = useTheme();
  var marks = useMemo(function () {
    return getMarks(min, max, step);
  }, [min, max, step]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, marks.map(function (val, index) {
    return /*#__PURE__*/React.createElement("span", {
      key: "".concat(val, "-").concat(index),
      style: {
        left: "".concat(val, "%")
      },
      className: _JSXStyle.dynamic([["324900419", [theme.palette.background]]])
    });
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "324900419",
    dynamic: [theme.palette.background]
  }, "span.__jsx-style-dynamic-selector{position:absolute;width:2px;height:100%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:".concat(theme.palette.background, ";}")));
};

export default SliderMark;