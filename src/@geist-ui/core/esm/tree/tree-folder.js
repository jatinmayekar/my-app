import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["name", "children", "parentPath", "level", "extra", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useMemo, useState } from 'react';
import useTheme from '../use-theme';
import { setChildrenProps } from '../utils/collections';
import TreeFile from './tree-file';
import Expand from '../shared/expand';
import TreeIndents from './tree-indents';
import { useTreeContext } from './tree-context';
import TreeFolderIcon from './tree-folder-icon';
import TreeStatusIcon from './tree-status-icon';
import { sortChildren, makeChildPath, stopPropagation } from './tree-help';
import useClasses from '../use-classes';
var defaultProps = {
  level: 0,
  className: '',
  parentPath: ''
};

var TreeFolder = function TreeFolder(_ref) {
  var name = _ref.name,
      children = _ref.children,
      parentPath = _ref.parentPath,
      parentLevel = _ref.level,
      extra = _ref.extra,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useTreeContext = useTreeContext(),
      initialExpand = _useTreeContext.initialExpand,
      isImperative = _useTreeContext.isImperative;

  var _useState = useState(initialExpand),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  useEffect(function () {
    return setExpanded(initialExpand);
  }, []);
  var currentPath = useMemo(function () {
    return makeChildPath(name, parentPath);
  }, []);

  var clickHandler = function clickHandler() {
    return setExpanded(!expanded);
  };

  var nextChildren = setChildrenProps(children, {
    parentPath: currentPath,
    level: parentLevel + 1
  }, [TreeFolder, TreeFile]);
  var sortedChildren = isImperative ? nextChildren : sortChildren(nextChildren, TreeFolder);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: clickHandler
  }, props, {
    className: _JSXStyle.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + (props && props.className != null && props.className || useClasses('folder', className) || "")
  }), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "names"
  }, /*#__PURE__*/React.createElement(TreeIndents, {
    count: parentLevel
  }), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "status"
  }, /*#__PURE__*/React.createElement(TreeStatusIcon, {
    active: expanded
  })), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "icon"
  }, /*#__PURE__*/React.createElement(TreeFolderIcon, null)), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "name"
  }, name, extra && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "extra"
  }, extra))), /*#__PURE__*/React.createElement(Expand, {
    isExpanded: expanded
  }, /*#__PURE__*/React.createElement("div", {
    onClick: stopPropagation,
    className: _JSXStyle.dynamic([["1983983326", [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "content"
  }, sortedChildren)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1983983326",
    dynamic: [parentLevel, theme.palette.accents_2, theme.palette.background, theme.palette.accents_8, theme.palette.accents_5]
  }, ".folder.__jsx-style-dynamic-selector{cursor:pointer;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.names.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:1.75rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:calc(1.875rem * ".concat(parentLevel, ");position:relative;}.names.__jsx-style-dynamic-selector>.indent{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:1px;height:100%;background-color:").concat(theme.palette.accents_2, ";margin-left:-1px;}.status.__jsx-style-dynamic-selector{position:absolute;left:calc(-1.125rem);top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:0.875rem;height:0.875rem;z-index:10;background-color:").concat(theme.palette.background, ";}.icon.__jsx-style-dynamic-selector{width:1.5rem;height:100%;margin-right:0.5rem;}.status.__jsx-style-dynamic-selector,.icon.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.name.__jsx-style-dynamic-selector{-webkit-transition:opacity 100ms ease 0ms;transition:opacity 100ms ease 0ms;color:").concat(theme.palette.accents_8, ";white-space:nowrap;font-size:0.875rem;}.extra.__jsx-style-dynamic-selector{font-size:0.75rem;-webkit-align-self:baseline;-ms-flex-item-align:baseline;align-self:baseline;padding-left:4px;color:").concat(theme.palette.accents_5, ";}.name.__jsx-style-dynamic-selector:hover{opacity:0.7;}.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:auto;}")));
};

TreeFolder.defaultProps = defaultProps;
TreeFolder.displayName = 'GeistTreeFolder';
export default TreeFolder;