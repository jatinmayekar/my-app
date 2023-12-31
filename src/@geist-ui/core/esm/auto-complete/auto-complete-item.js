import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import { useAutoCompleteContext } from './auto-complete-context';
import Ellipsis from '../shared/ellipsis';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {};

var AutoCompleteItemComponent = function AutoCompleteItemComponent(_ref) {
  var identValue = _ref.value,
      children = _ref.children,
      isLabelOnly = _ref.isLabelOnly;
  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useAutoCompleteConte = useAutoCompleteContext(),
      value = _useAutoCompleteConte.value,
      updateValue = _useAutoCompleteConte.updateValue,
      updateVisible = _useAutoCompleteConte.updateVisible;

  var selectHandler = function selectHandler() {
    updateValue && updateValue(identValue);
    updateVisible && updateVisible(false);
  };

  var isActive = useMemo(function () {
    return value === identValue;
  }, [identValue, value]);
  var classes = useClasses('item', {
    active: isActive
  });
  return /*#__PURE__*/React.createElement("div", {
    onClick: selectHandler,
    className: _JSXStyle.dynamic([["2003094915", [theme.palette.background, theme.palette.foreground, SCALES.font(0.875), SCALES.width(1, 'auto'), isLabelOnly ? SCALES.height(2.5) : SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.75), SCALES.pb(0), SCALES.pl(0.75), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.palette.accents_1, theme.palette.accents_1, theme.palette.success]]]) + " " + (classes || "")
  }, isLabelOnly ? /*#__PURE__*/React.createElement(Ellipsis, {
    height: SCALES.height(2)
  }, children) : children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2003094915",
    dynamic: [theme.palette.background, theme.palette.foreground, SCALES.font(0.875), SCALES.width(1, 'auto'), isLabelOnly ? SCALES.height(2.5) : SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0.75), SCALES.pb(0), SCALES.pl(0.75), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0), theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.layout.radius, theme.palette.accents_1, theme.palette.accents_1, theme.palette.success]
  }, ".item.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:normal;white-space:pre;background-color:".concat(theme.palette.background, ";color:").concat(theme.palette.foreground, ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;cursor:pointer;-webkit-transition:background 0.2s ease 0s,border-color 0.2s ease 0s;transition:background 0.2s ease 0s,border-color 0.2s ease 0s;font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(isLabelOnly ? SCALES.height(2.5) : SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0.75), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0.75), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.item.__jsx-style-dynamic-selector:first-of-type{border-top-left-radius:").concat(theme.layout.radius, ";border-top-right-radius:").concat(theme.layout.radius, ";}.item.__jsx-style-dynamic-selector:last-of-type{border-bottom-left-radius:").concat(theme.layout.radius, ";border-bottom-right-radius:").concat(theme.layout.radius, ";}.item.__jsx-style-dynamic-selector:hover{background-color:").concat(theme.palette.accents_1, ";}.item.active.__jsx-style-dynamic-selector{background-color:").concat(theme.palette.accents_1, ";color:").concat(theme.palette.success, ";}")));
};

AutoCompleteItemComponent.defaultProps = defaultProps;
AutoCompleteItemComponent.displayName = 'GeistAutoCompleteItem';
var AutoCompleteItem = withScale(AutoCompleteItemComponent);
export default AutoCompleteItem;