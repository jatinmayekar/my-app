import React from 'react';
export var getId = function getId() {
  return Math.random().toString(32).slice(2, 10);
};
export var capitalize = function capitalize(str) {
  var safeStr = String(str).trim();
  return safeStr.charAt(0).toUpperCase() + safeStr.slice(1);
};
export var hasChild = function hasChild(children, child) {
  var types = React.Children.map(children, function (item) {
    if (! /*#__PURE__*/React.isValidElement(item)) return null;
    return item.type;
  });
  return (types || []).includes(child);
};
export var pickChild = function pickChild(children, targetChild) {
  var target = [];
  var withoutTargetChildren = React.Children.map(children, function (item) {
    if (! /*#__PURE__*/React.isValidElement(item)) return item;

    if (item.type === targetChild) {
      target.push(item);
      return null;
    }

    return item;
  });
  var targetChildren = target.length >= 0 ? target : undefined;
  return [withoutTargetChildren, targetChildren];
};
export var pickChildByProps = function pickChildByProps(children, key, value) {
  var target = [];
  var isArray = Array.isArray(value);
  var withoutPropChildren = React.Children.map(children, function (item) {
    if (! /*#__PURE__*/React.isValidElement(item)) return null;
    if (!item.props) return item;

    if (isArray) {
      if (value.includes(item.props[key])) {
        target.push(item);
        return null;
      }

      return item;
    }

    if (item.props[key] === value) {
      target.push(item);
      return null;
    }

    return item;
  });
  var targetChildren = target.length >= 0 ? target : undefined;
  return [withoutPropChildren, targetChildren];
};
export var pickChildrenFirst = function pickChildrenFirst(children) {
  return React.Children.toArray(children)[0];
};
export var setChildrenProps = function setChildrenProps(children, props) {
  var targetComponents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (React.Children.count(children) === 0) return [];
  var allowAll = targetComponents.length === 0;

  var clone = function clone(child) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return /*#__PURE__*/React.cloneElement(child, props);
  };

  return React.Children.map(children, function (item) {
    if (! /*#__PURE__*/React.isValidElement(item)) return item;
    if (allowAll) return clone(item, props);
    var isAllowed = targetComponents.find(function (child) {
      return child === item.type;
    });
    if (isAllowed) return clone(item, props);
    return item;
  });
};
export var setChildrenIndex = function setChildrenIndex(children) {
  var targetComponents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (React.Children.count(children) === 0) return [];
  var allowAll = targetComponents.length === 0;

  var clone = function clone(child) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return /*#__PURE__*/React.cloneElement(child, props);
  };

  var index = 0;
  return React.Children.map(children, function (item) {
    if (! /*#__PURE__*/React.isValidElement(item)) return item;
    index = index + 1;
    if (allowAll) return clone(item, {
      index: index
    });
    var isAllowed = targetComponents.find(function (child) {
      return child === item.type;
    });
    if (isAllowed) return clone(item, {
      index: index
    });
    index = index - 1;
    return item;
  });
};
export var getReactNode = function getReactNode(node) {
  if (!node) return null;
  if (typeof node !== 'function') return node;
  return node();
};
export var isChildElement = function isChildElement(parent, child) {
  if (!parent || !child) return false;
  var node = child;

  while (node) {
    if (node === parent) return true;
    node = node.parentNode;
  }

  return false;
};
export var isGeistElement = function isGeistElement(el) {
  if (!el) return false;
  if (el !== null && el !== void 0 && el.dataset && el !== null && el !== void 0 && el.dataset['geist']) return true;
  el.attributes.getNamedItem('data-geist');
  return !!el.attributes.getNamedItem('data-geist');
};
export var isBrowser = function isBrowser() {
  return Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
};
export var isMac = function isMac() {
  if (!isBrowser()) return false;
  return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
};
export var isCSSNumberValue = function isCSSNumberValue(value) {
  return value !== undefined && !Number.isNaN(+value);
};