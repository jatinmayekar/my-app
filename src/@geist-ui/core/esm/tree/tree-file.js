import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["name", "parentPath", "level", "extra", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import useTheme from '../use-theme';
import TreeFileIcon from './tree-file-icon';
import { useTreeContext } from './tree-context';
import TreeIndents from './tree-indents';
import { makeChildPath, stopPropagation } from './tree-help';
import useClasses from '../use-classes';
var defaultProps = {
  level: 0,
  className: '',
  parentPath: ''
};

var TreeFile = function TreeFile(_ref) {
  var name = _ref.name,
      parentPath = _ref.parentPath,
      level = _ref.level,
      extra = _ref.extra,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useTreeContext = useTreeContext(),
      onFileClick = _useTreeContext.onFileClick;

  var currentPath = useMemo(function () {
    return makeChildPath(name, parentPath);
  }, []);

  var clickHandler = function clickHandler(event) {
    stopPropagation(event);
    onFileClick && onFileClick(currentPath);
  };

  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: clickHandler
  }, props, {
    className: _JSXStyle.dynamic([["4220802947", [level, theme.palette.accents_2, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + (props && props.className != null && props.className || useClasses('file', className) || "")
  }), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["4220802947", [level, theme.palette.accents_2, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "names"
  }, /*#__PURE__*/React.createElement(TreeIndents, {
    count: level
  }), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["4220802947", [level, theme.palette.accents_2, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "icon"
  }, /*#__PURE__*/React.createElement(TreeFileIcon, null)), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["4220802947", [level, theme.palette.accents_2, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "name"
  }, name, extra && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["4220802947", [level, theme.palette.accents_2, theme.palette.accents_8, theme.palette.accents_5]]]) + " " + "extra"
  }, extra))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4220802947",
    dynamic: [level, theme.palette.accents_2, theme.palette.accents_8, theme.palette.accents_5]
  }, ".file.__jsx-style-dynamic-selector{cursor:pointer;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-left:calc(1.875rem * ".concat(level, ");}.names.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:1.75rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.names.__jsx-style-dynamic-selector>.indent{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:1px;height:100%;background-color:").concat(theme.palette.accents_2, ";margin-left:-1px;}.icon.__jsx-style-dynamic-selector{width:1.5rem;height:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:0.5rem;}.name.__jsx-style-dynamic-selector{-webkit-transition:opacity 100ms ease 0ms;transition:opacity 100ms ease 0ms;color:").concat(theme.palette.accents_8, ";white-space:nowrap;font-size:0.875rem;}.extra.__jsx-style-dynamic-selector{font-size:0.75rem;-webkit-align-self:baseline;-ms-flex-item-align:baseline;align-self:baseline;padding-left:4px;color:").concat(theme.palette.accents_5, ";}.name.__jsx-style-dynamic-selector:hover{opacity:0.7;}")));
};

TreeFile.defaultProps = defaultProps;
TreeFile.displayName = 'GeistTreeFile';
export default TreeFile;