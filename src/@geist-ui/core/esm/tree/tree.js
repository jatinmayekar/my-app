import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "onClick", "initialExpand", "value", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import TreeFile from './tree-file';
import TreeFolder from './tree-folder';
import { TreeContext } from './tree-context';
import { tuple } from '../utils/prop-types';
import { sortChildren } from './tree-help';
import useClasses from '../use-classes';
var FileTreeValueType = tuple('directory', 'file');
var directoryType = FileTreeValueType[0];
var defaultProps = {
  initialExpand: false,
  className: ''
};

var makeChildren = function makeChildren() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (!value || !value.length) return null;
  return value.sort(function (a, b) {
    if (a.type !== b.type) return a.type !== directoryType ? 1 : -1;
    return "".concat(a.name).charCodeAt(0) - "".concat(b.name).charCodeAt(0);
  }).map(function (item, index) {
    if (item.type === directoryType) return /*#__PURE__*/React.createElement(TreeFolder, {
      name: item.name,
      extra: item.extra,
      key: "folder-".concat(item.name, "-").concat(index)
    }, makeChildren(item.files));
    return /*#__PURE__*/React.createElement(TreeFile, {
      name: item.name,
      extra: item.extra,
      key: "file-".concat(item.name, "-").concat(index)
    });
  });
};

var Tree = function Tree(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      initialExpand = _ref.initialExpand,
      value = _ref.value,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var isImperative = Boolean(value && value.length > 0);

  var onFileClick = function onFileClick(path) {
    onClick && onClick(path);
  };

  var initialValue = useMemo(function () {
    return {
      onFileClick: onFileClick,
      initialExpand: initialExpand,
      isImperative: isImperative
    };
  }, [initialExpand]);
  var customChildren = isImperative ? makeChildren(value) : sortChildren(children, TreeFolder);
  return /*#__PURE__*/React.createElement(TreeContext.Provider, {
    value: initialValue
  }, /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: "jsx-2273069862" + " " + (props && props.className != null && props.className || useClasses('tree', className) || "")
  }), customChildren, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2273069862"
  }, ".tree.jsx-2273069862{padding-left:1.625rem;}")));
};

Tree.defaultProps = defaultProps;
Tree.displayName = 'GeistTree';
export default Tree;