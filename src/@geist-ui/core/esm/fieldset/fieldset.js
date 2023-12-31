import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "title", "subtitle", "children", "value", "label"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useMemo, useState } from 'react';
import useTheme from '../use-theme';
import FieldsetTitle from './fieldset-title';
import FieldsetSubtitle from './fieldset-subtitle';
import FieldsetFooter from './fieldset-footer';
import FieldsetContent from './fieldset-content';
import { hasChild, pickChild } from '../utils/collections';
import { useFieldset } from './fieldset-context';
import useWarning from '../utils/use-warning';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  value: '',
  label: '',
  disabled: false,
  title: '',
  subtitle: '',
  className: ''
};

var FieldsetComponent = function FieldsetComponent(_ref) {
  var className = _ref.className,
      title = _ref.title,
      subtitle = _ref.subtitle,
      children = _ref.children,
      value = _ref.value,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useFieldset = useFieldset(),
      inGroup = _useFieldset.inGroup,
      currentValue = _useFieldset.currentValue,
      register = _useFieldset.register;

  var _useState = useState(inGroup),
      _useState2 = _slicedToArray(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  var classes = useClasses('fieldset', className);

  var _pickChild = pickChild(children, FieldsetFooter),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      withoutFooterChildren = _pickChild2[0],
      FooterChildren = _pickChild2[1];

  var hasTitle = hasChild(withoutFooterChildren, FieldsetTitle);
  var hasSubtitle = hasChild(withoutFooterChildren, FieldsetSubtitle);
  var hasContent = hasChild(withoutFooterChildren, FieldsetContent);

  if (inGroup) {
    if (!label) {
      useWarning('Props "label" is required when in a group.', 'Fieldset Group');
    }

    if (!value || value === '') {
      value = label;
    }

    useEffect(function () {
      register && register({
        value: value,
        label: label
      });
    }, []);
    useEffect(function () {
      // In a few cases, the user will set Fieldset state manually.
      // If the user incorrectly set the state, Group component should ignore it.

      /* istanbul ignore if */
      if (!currentValue || currentValue === '') return;
      setHidden(currentValue !== value);
    }, [currentValue]);
  }

  var content = useMemo(function () {
    return /*#__PURE__*/React.createElement(React.Fragment, null, withoutFooterChildren, !hasTitle && title && /*#__PURE__*/React.createElement(FieldsetTitle, null, title), !hasSubtitle && subtitle && /*#__PURE__*/React.createElement(FieldsetSubtitle, null, subtitle));
  }, [withoutFooterChildren, hasTitle, hasSubtitle, title, subtitle]);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["3253250630", [theme.palette.background, theme.palette.border, theme.layout.radius, hidden ? 'none' : 'block', SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || classes || "")
  }), hasContent ? content : /*#__PURE__*/React.createElement(FieldsetContent, null, content), FooterChildren && FooterChildren, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3253250630",
    dynamic: [theme.palette.background, theme.palette.border, theme.layout.radius, hidden ? 'none' : 'block', SCALES.font(1), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".fieldset.__jsx-style-dynamic-selector{background-color:".concat(theme.palette.background, ";border:1px solid ").concat(theme.palette.border, ";border-radius:").concat(theme.layout.radius, ";overflow:hidden;display:").concat(hidden ? 'none' : 'block', ";font-size:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}")));
};

FieldsetComponent.defaultProps = defaultProps;
FieldsetComponent.displayName = 'GeistFieldset';
var Fieldset = withScale(FieldsetComponent);
export default Fieldset;