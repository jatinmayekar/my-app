import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children", "value", "onChange"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useCallback, useMemo, useState } from 'react';
import useTheme from '../use-theme';
import useCurrentState from '../utils/use-current-state';
import { FieldsetContext } from './fieldset-context';
import useWarning from '../utils/use-warning';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  className: ''
};

var FieldsetGroupComponent = function FieldsetGroupComponent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      value = _ref.value,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      selfVal = _useState2[0],
      setSelfVal = _useState2[1];

  var _useCurrentState = useCurrentState([]),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      items = _useCurrentState2[0],
      setItems = _useCurrentState2[1],
      ref = _useCurrentState2[2];

  var classes = useClasses('group', className);

  var register = function register(newItem) {
    var hasItem = ref.current.find(function (item) {
      return item.value === newItem.value;
    });

    if (hasItem) {
      useWarning('The "value" of each "Fieldset" must be unique.', 'Fieldset');
    }

    setItems([].concat(_toConsumableArray(ref.current), [newItem]));
  };

  var providerValue = useMemo(function () {
    return {
      currentValue: selfVal,
      inGroup: true,
      register: register
    };
  }, [selfVal]);
  var clickHandle = useCallback(function (nextValue) {
    setSelfVal(nextValue);
    onChange && onChange(nextValue);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(FieldsetContext.Provider, {
    value: providerValue
  }, /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["3411776855", [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0, 0), SCALES.ml(0), SCALES.font(1), theme.palette.accents_3, theme.palette.accents_1, theme.palette.border, theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.layout.radius]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3411776855", [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0, 0), SCALES.ml(0), SCALES.font(1), theme.palette.accents_3, theme.palette.accents_1, theme.palette.border, theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.layout.radius]]]) + " " + "group-tabs"
  }, items.map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return clickHandle(item.value);
      },
      key: item.value,
      className: _JSXStyle.dynamic([["3411776855", [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0, 0), SCALES.ml(0), SCALES.font(1), theme.palette.accents_3, theme.palette.accents_1, theme.palette.border, theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.layout.radius]]]) + " " + ((selfVal === item.value ? 'active' : '') || "")
    }, item.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3411776855", [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0, 0), SCALES.ml(0), SCALES.font(1), theme.palette.accents_3, theme.palette.accents_1, theme.palette.border, theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.layout.radius]]]) + " " + "group-content"
  }, children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3411776855",
    dynamic: [SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0, 0), SCALES.ml(0), SCALES.font(1), theme.palette.accents_3, theme.palette.accents_1, theme.palette.border, theme.palette.background, theme.palette.foreground, theme.layout.radius, theme.layout.radius]
  }, ".group.__jsx-style-dynamic-selector{width:".concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0, 0), " ").concat(SCALES.ml(0), ";}.group-tabs.__jsx-style-dynamic-selector{white-space:nowrap;overflow-y:hidden;overflow-x:auto;font-size:").concat(SCALES.font(1), ";margin-bottom:-1px;}.group-content.__jsx-style-dynamic-selector{border-top-left-radius:0;overflow:hidden;}.group-content.__jsx-style-dynamic-selector .fieldset{border-top-left-radius:0;}button.__jsx-style-dynamic-selector{height:2.7em;line-height:2.7em;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:").concat(theme.palette.accents_3, ";background-color:").concat(theme.palette.accents_1, ";font-size:0.875em;white-space:nowrap;text-transform:capitalize;-webkit-appearance:none;cursor:pointer;margin:0;padding:0 1.45em;overflow:hidden;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;border-radius:0;border:1px solid ").concat(theme.palette.border, ";-webkit-text-decoration:none;text-decoration:none;outline:none;}button.active.__jsx-style-dynamic-selector{border-bottom-color:transparent;background-color:").concat(theme.palette.background, ";color:").concat(theme.palette.foreground, ";cursor:default;}button.__jsx-style-dynamic-selector:first-of-type{border-top-left-radius:").concat(theme.layout.radius, ";}button.__jsx-style-dynamic-selector:last-of-type{border-top-right-radius:").concat(theme.layout.radius, ";}button.__jsx-style-dynamic-selector+button.__jsx-style-dynamic-selector{border-left:0;}"))));
};

FieldsetGroupComponent.defaultProps = defaultProps;
FieldsetGroupComponent.displayName = 'GeistFieldsetGroup';
var FieldsetGroup = withScale(FieldsetGroupComponent);
export default FieldsetGroup;