import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["href", "nextLink", "onClick", "children", "className"];
import Link from '../link';
import React, { useMemo } from 'react';
import { pickChild } from '../utils/collections';
import BreadcrumbsSeparator from './breadcrumbs-separator';
import useClasses from '../use-classes';
var defaultProps = {
  nextLink: false,
  className: ''
};
var BreadcrumbsItem = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var href = _ref.href,
      nextLink = _ref.nextLink,
      onClick = _ref.onClick,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var isLink = useMemo(function () {
    return href !== undefined || nextLink;
  }, [href, nextLink]);

  var _pickChild = pickChild(children, BreadcrumbsSeparator),
      _pickChild2 = _slicedToArray(_pickChild, 1),
      withoutSepChildren = _pickChild2[0];

  var classes = useClasses('breadcrumbs-item', className);

  var clickHandler = function clickHandler(event) {
    onClick && onClick(event);
  };

  if (!isLink) {
    return /*#__PURE__*/React.createElement("span", {
      className: classes,
      onClick: clickHandler
    }, withoutSepChildren);
  }

  return /*#__PURE__*/React.createElement(Link, _extends({
    className: classes,
    href: href,
    onClick: clickHandler,
    ref: ref
  }, props), withoutSepChildren);
});
BreadcrumbsItem.defaultProps = defaultProps;
BreadcrumbsItem.displayName = 'GeistBreadcrumbsItem';
export default BreadcrumbsItem;