import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "accordion", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import Collapse from './collapse';
import useCurrentState from '../utils/use-current-state';
import { setChildrenIndex } from '../utils/collections';
import { CollapseContext } from './collapse-context';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  accordion: true,
  className: ''
};

var CollapseGroupComponent = function CollapseGroupComponent(_ref) {
  var children = _ref.children,
      accordion = _ref.accordion,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useCurrentState = useCurrentState([]),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      state = _useCurrentState2[0],
      setState = _useCurrentState2[1],
      stateRef = _useCurrentState2[2];

  var classes = useClasses('collapse-group', className);

  var updateValues = function updateValues(currentIndex, nextState) {
    var hasChild = stateRef.current.find(function (val) {
      return val === currentIndex;
    });

    if (accordion) {
      if (nextState) return setState([currentIndex]);
      return setState([]);
    }

    if (nextState) {
      // In a few cases, the user will set Collapse Component state manually.
      // If the user incorrectly set the state, Group component should ignore it.

      /* istanbul ignore if */
      if (hasChild) return;
      return setState([].concat(_toConsumableArray(stateRef.current), [currentIndex]));
    }

    setState(stateRef.current.filter(function (item) {
      return item !== currentIndex;
    }));
  };

  var initialValue = useMemo(function () {
    return {
      values: state,
      updateValues: updateValues
    };
  }, [state.join(',')]);
  var hasIndexChildren = useMemo(function () {
    return setChildrenIndex(children, [Collapse]);
  }, [children]);
  return /*#__PURE__*/React.createElement(CollapseContext.Provider, {
    value: initialValue
  }, /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["2415399140", [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.6), SCALES.pb(0), SCALES.pl(0.6), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), hasIndexChildren, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2415399140",
    dynamic: [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.6), SCALES.pb(0), SCALES.pl(0.6), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".collapse-group.__jsx-style-dynamic-selector{width:".concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0.6), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0.6), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.collapse-group.__jsx-style-dynamic-selector>div + div{border-top:none;}"))));
};

CollapseGroupComponent.defaultProps = defaultProps;
CollapseGroupComponent.displayName = 'GeistCollapseGroup';
var CollapseGroup = withScale(CollapseGroupComponent);
export default CollapseGroup;