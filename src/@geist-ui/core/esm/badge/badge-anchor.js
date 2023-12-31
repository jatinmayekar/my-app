import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import { pickChild } from '../utils/collections';
import { tuple } from '../utils/prop-types';
import Badge from './badge';
var placement = tuple('topLeft', 'topRight', 'bottomLeft', 'bottomRight');
var defaultProps = {
  placement: 'topRight',
  className: ''
};

var getTransform = function getTransform(placement) {
  var styles = {
    topLeft: {
      top: '0',
      left: '0',
      value: 'translate(-50%, -50%)',
      origin: '0% 0%'
    },
    topRight: {
      top: '0',
      right: '0',
      value: 'translate(50%, -50%)',
      origin: '100% 0%'
    },
    bottomLeft: {
      left: '0',
      bottom: '0',
      value: 'translate(-50%, 50%)',
      origin: '0% 100%'
    },
    bottomRight: {
      right: '0',
      bottom: '0',
      value: 'translate(50%, 50%)',
      origin: '100% 100%'
    }
  };
  return styles[placement];
};

var BadgeAnchor = function BadgeAnchor(_ref) {
  var children = _ref.children,
      placement = _ref.placement;

  var _pickChild = pickChild(children, Badge),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      withoutBadgeChildren = _pickChild2[0],
      badgeChldren = _pickChild2[1];

  var _useMemo = useMemo(function () {
    return getTransform(placement);
  }, [placement]),
      top = _useMemo.top,
      bottom = _useMemo.bottom,
      left = _useMemo.left,
      right = _useMemo.right,
      value = _useMemo.value,
      origin = _useMemo.origin;

  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["1121745930", [top || 'auto', left || 'auto', right || 'auto', bottom || 'auto', value, origin]]]) + " " + "anchor"
  }, withoutBadgeChildren, /*#__PURE__*/React.createElement("sup", {
    className: _JSXStyle.dynamic([["1121745930", [top || 'auto', left || 'auto', right || 'auto', bottom || 'auto', value, origin]]])
  }, badgeChldren), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1121745930",
    dynamic: [top || 'auto', left || 'auto', right || 'auto', bottom || 'auto', value, origin]
  }, ".anchor.__jsx-style-dynamic-selector{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;box-sizing:border-box;}sup.__jsx-style-dynamic-selector{position:absolute;top:".concat(top || 'auto', ";left:").concat(left || 'auto', ";right:").concat(right || 'auto', ";bottom:").concat(bottom || 'auto', ";-webkit-transform:").concat(value, ";-ms-transform:").concat(value, ";transform:").concat(value, ";-webkit-transform-origin:").concat(origin, ";-ms-transform-origin:").concat(origin, ";transform-origin:").concat(origin, ";z-index:1;}")));
};

BadgeAnchor.defaultProps = defaultProps;
BadgeAnchor.displayName = 'GeistBadgeAnchor';
export default BadgeAnchor;