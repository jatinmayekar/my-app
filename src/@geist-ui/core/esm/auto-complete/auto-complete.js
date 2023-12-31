import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["options", "initialValue", "onSelect", "onSearch", "onChange", "searching", "children", "type", "value", "clearable", "disabled", "dropdownClassName", "dropdownStyle", "disableMatchWidth", "disableFreeSolo", "getPopupContainer"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import Input from '../input';
import AutoCompleteItem from './auto-complete-item';
import AutoCompleteDropdown from './auto-complete-dropdown';
import AutoCompleteSearching from './auto-complete-searching';
import AutoCompleteEmpty from './auto-complete-empty';
import { AutoCompleteContext } from './auto-complete-context';
import Loading from '../loading';
import { pickChild } from '../utils/collections';
import useCurrentState from '../utils/use-current-state';
import useScale, { withScale } from '../use-scale';
var defaultProps = {
  options: [],
  initialValue: '',
  disabled: false,
  clearable: false,
  type: 'default',
  disableMatchWidth: false,
  disableFreeSolo: false,
  className: ''
};

var childrenToOptionsNode = function childrenToOptionsNode(options) {
  return options.map(function (item, index) {
    var key = "auto-complete-item-".concat(index);
    if ( /*#__PURE__*/React.isValidElement(item)) return /*#__PURE__*/React.cloneElement(item, {
      key: key
    });
    var validItem = item;
    return /*#__PURE__*/React.createElement(AutoCompleteItem, {
      key: key,
      value: validItem.value,
      isLabelOnly: true
    }, validItem.label);
  });
}; // When the search is not set, the "clearable" icon can be displayed in the original location.
// When the search is seted, at least one element should exist to avoid re-render.


var getSearchIcon = function getSearchIcon(searching) {
  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (searching === undefined) return null;
  return searching ? /*#__PURE__*/React.createElement(Loading, {
    scale: +scale / 2
  }) : /*#__PURE__*/React.createElement("span", null);
};

var AutoCompleteComponent = /*#__PURE__*/React.forwardRef(function (_ref, userRef) {
  var options = _ref.options,
      customInitialValue = _ref.initialValue,
      onSelect = _ref.onSelect,
      onSearch = _ref.onSearch,
      onChange = _ref.onChange,
      searching = _ref.searching,
      children = _ref.children,
      type = _ref.type,
      value = _ref.value,
      clearable = _ref.clearable,
      disabled = _ref.disabled,
      dropdownClassName = _ref.dropdownClassName,
      dropdownStyle = _ref.dropdownStyle,
      disableMatchWidth = _ref.disableMatchWidth,
      disableFreeSolo = _ref.disableFreeSolo,
      getPopupContainer = _ref.getPopupContainer,
      props = _objectWithoutProperties(_ref, _excluded);

  var resetTimer = useRef();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES,
      getScaleProps = _useScale.getScaleProps;

  var ref = useRef(null);
  var inputRef = useRef(null);

  var _useCurrentState = useCurrentState(customInitialValue),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      state = _useCurrentState2[0],
      setState = _useCurrentState2[1],
      stateRef = _useCurrentState2[2];

  var _useState = useState(customInitialValue),
      _useState2 = _slicedToArray(_useState, 2),
      selectVal = _useState2[0],
      setSelectVal = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  useImperativeHandle(userRef, function () {
    return inputRef.current;
  });

  var _pickChild = pickChild(children, AutoCompleteSearching),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      searchChild = _pickChild2[1];

  var _pickChild3 = pickChild(children, AutoCompleteEmpty),
      _pickChild4 = _slicedToArray(_pickChild3, 2),
      emptyChild = _pickChild4[1];

  var autoCompleteItems = useMemo(function () {
    var hasSearchChild = searchChild && React.Children.count(searchChild) > 0;
    var hasEmptyChild = emptyChild && React.Children.count(emptyChild) > 0;

    if (searching) {
      return hasSearchChild ? searchChild : /*#__PURE__*/React.createElement(AutoCompleteSearching, null, "Searching...");
    }

    if (options.length === 0) {
      if (state === '') return null;
      return hasEmptyChild ? emptyChild : /*#__PURE__*/React.createElement(AutoCompleteEmpty, null, "No Options");
    }

    return childrenToOptionsNode(options);
  }, [searching, options]);
  var showClearIcon = useMemo(function () {
    return clearable && searching === undefined;
  }, [clearable, searching]);

  var updateValue = function updateValue(val) {
    if (disabled) return;
    setSelectVal(val);
    onSelect && onSelect(val);
    setState(val);
    inputRef.current && inputRef.current.focus();
  };

  var updateVisible = function updateVisible(next) {
    return setVisible(next);
  };

  var onInputChange = function onInputChange(event) {
    setVisible(true);
    onSearch && onSearch(event.target.value);
    setState(event.target.value);
  };

  var resetInputValue = function resetInputValue() {
    if (!disableFreeSolo) return;
    if (!state || state === '') return;

    if (state !== selectVal) {
      setState(selectVal);
    }
  };

  useEffect(function () {
    onChange && onChange(state);
  }, [state]);
  useEffect(function () {
    if (value === undefined) return;
    setState(value);
  }, [value]);
  var initialValue = useMemo(function () {
    return {
      ref: ref,
      value: state,
      updateValue: updateValue,
      visible: visible,
      updateVisible: updateVisible
    };
  }, [state, visible]);

  var toggleFocusHandler = function toggleFocusHandler(next) {
    clearTimeout(resetTimer.current);
    setVisible(next);

    if (next) {
      onSearch && onSearch(stateRef.current);
    } else {
      resetTimer.current = window.setTimeout(function () {
        resetInputValue();
        clearTimeout(resetTimer.current);
      }, 100);
    }
  };

  var inputProps = _extends({}, props, {
    disabled: disabled,
    value: state
  });

  return /*#__PURE__*/React.createElement(AutoCompleteContext.Provider, {
    value: initialValue
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: _JSXStyle.dynamic([["2878925540", [SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + "auto-complete"
  }, /*#__PURE__*/React.createElement(Input, _extends({
    ref: inputRef,
    type: type,
    onChange: onInputChange,
    onFocus: function onFocus() {
      return toggleFocusHandler(true);
    },
    onBlur: function onBlur() {
      return toggleFocusHandler(false);
    },
    clearable: showClearIcon,
    width: SCALES.width(1, 'initial'),
    height: SCALES.height(2.25),
    iconRight: getSearchIcon(searching, getScaleProps('scale'))
  }, inputProps)), /*#__PURE__*/React.createElement(AutoCompleteDropdown, {
    visible: visible,
    disableMatchWidth: disableMatchWidth,
    className: dropdownClassName,
    dropdownStyle: dropdownStyle,
    getPopupContainer: getPopupContainer
  }, autoCompleteItems), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2878925540",
    dynamic: [SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, ".auto-complete.__jsx-style-dynamic-selector{width:".concat(SCALES.width(1, 'max-content'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}.auto-complete.__jsx-style-dynamic-selector .loading{width:-webkit-max-content;width:-moz-max-content;width:max-content;}"))));
});
AutoCompleteComponent.defaultProps = defaultProps;
AutoCompleteComponent.displayName = 'GeistAutoComplete';
var AutoComplete = withScale(AutoCompleteComponent);
export default AutoComplete;