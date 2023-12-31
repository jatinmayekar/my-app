import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "title", "subtitle", "initialVisible", "shadow", "className", "index"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect } from 'react';
import CollapseIcon from './collapse-icon';
import useTheme from '../use-theme';
import Expand from '../shared/expand';
import { useCollapseContext } from './collapse-context';
import useCurrentState from '../utils/use-current-state';
import useWarning from '../utils/use-warning';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  className: '',
  shadow: false,
  initialVisible: false
};

var CollapseComponent = function CollapseComponent(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subtitle = _ref.subtitle,
      initialVisible = _ref.initialVisible,
      shadow = _ref.shadow,
      className = _ref.className,
      index = _ref.index,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useCollapseContext = useCollapseContext(),
      values = _useCollapseContext.values,
      updateValues = _useCollapseContext.updateValues;

  var _useCurrentState = useCurrentState(initialVisible),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      visible = _useCurrentState2[0],
      setVisible = _useCurrentState2[1],
      visibleRef = _useCurrentState2[2];

  var classes = useClasses('collapse', {
    shadow: shadow
  }, className);

  if (!title) {
    useWarning('"title" is required.', 'Collapse');
  }

  useEffect(function () {
    if (!values.length) return;
    var isActive = !!values.find(function (item) {
      return item === index;
    });
    setVisible(isActive);
  }, [values.join(',')]);

  var clickHandler = function clickHandler() {
    var next = !visibleRef.current;
    setVisible(next);
    updateValues && updateValues(index, next);
  };

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["3106940587", [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React.createElement("div", {
    role: "button",
    onClick: clickHandler,
    className: _JSXStyle.dynamic([["3106940587", [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]]]) + " " + "view"
  }, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3106940587", [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]]]) + " " + "title"
  }, /*#__PURE__*/React.createElement("h3", {
    className: _JSXStyle.dynamic([["3106940587", [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]]])
  }, title), " ", /*#__PURE__*/React.createElement(CollapseIcon, {
    active: visible
  })), subtitle && /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3106940587", [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]]]) + " " + "subtitle"
  }, subtitle)), /*#__PURE__*/React.createElement(Expand, {
    isExpanded: visible
  }, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3106940587", [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]]]) + " " + "content"
  }, children)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3106940587",
    dynamic: [theme.palette.border, theme.palette.border, SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.expressiveness.shadowSmall, theme.layout.radius, theme.layout.gap, theme.palette.foreground, theme.palette.accents_5, SCALES.pt(1.2), SCALES.pr(0), SCALES.pb(1.2), SCALES.pl(0)]
  }, ".collapse.__jsx-style-dynamic-selector{border-top:1px solid ".concat(theme.palette.border, ";border-bottom:1px solid ").concat(theme.palette.border, ";font-size:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(1.2), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(1.2), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.shadow.__jsx-style-dynamic-selector{box-shadow:").concat(theme.expressiveness.shadowSmall, ";border:none;border-radius:").concat(theme.layout.radius, ";padding:").concat(theme.layout.gap, ";}.view.__jsx-style-dynamic-selector{cursor:pointer;outline:none;}.title.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:").concat(theme.palette.foreground, ";}.title.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;font-size:1.5em;}.subtitle.__jsx-style-dynamic-selector{color:").concat(theme.palette.accents_5, ";margin:0;}.subtitle.__jsx-style-dynamic-selector>*{margin:0;}.content.__jsx-style-dynamic-selector{font-size:inherit;line-height:1.6em;padding:").concat(SCALES.pt(1.2), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(1.2), " ").concat(SCALES.pl(0), ";}.content.__jsx-style-dynamic-selector>*:first-child{margin-top:0;}.content.__jsx-style-dynamic-selector>*:last-child{margin-bottom:0;}")));
};

CollapseComponent.defaultProps = defaultProps;
CollapseComponent.displayName = 'GeistCollapse';
var Collapse = withScale(CollapseComponent);
export default Collapse;