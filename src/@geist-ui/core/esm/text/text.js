import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "b", "small", "i", "span", "del", "em", "blockquote", "children", "className"];
import React, { useMemo } from 'react';
import TextChild from './child';
import { withScale } from '../use-scale';
var defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
  p: false,
  b: false,
  small: false,
  i: false,
  span: false,
  del: false,
  em: false,
  blockquote: false,
  className: '',
  type: 'default'
};

var getModifierChild = function getModifierChild(tags, children) {
  if (!tags.length) return children;
  var nextTag = tags.slice(1, tags.length);
  return /*#__PURE__*/React.createElement(TextChild, {
    tag: tags[0]
  }, getModifierChild(nextTag, children));
};

var TextComponent = function TextComponent(_ref) {
  var h1 = _ref.h1,
      h2 = _ref.h2,
      h3 = _ref.h3,
      h4 = _ref.h4,
      h5 = _ref.h5,
      h6 = _ref.h6,
      p = _ref.p,
      b = _ref.b,
      small = _ref.small,
      i = _ref.i,
      span = _ref.span,
      del = _ref.del,
      em = _ref.em,
      blockquote = _ref.blockquote,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var elements = {
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
    h6: h6,
    p: p,
    blockquote: blockquote
  };
  var inlineElements = {
    span: span,
    small: small,
    b: b,
    em: em,
    i: i,
    del: del
  };
  var names = Object.keys(elements).filter(function (name) {
    return elements[name];
  });
  var inlineNames = Object.keys(inlineElements).filter(function (name) {
    return inlineElements[name];
  });
  /**
   *  Render element "p" only if no element is found.
   *  If there is only one modifier, just rendered one modifier element
   *  e.g.
   *    <Text /> => <p />
   *    <Text em /> => <em />
   *    <Text p em /> => <p><em>children</em></p>
   *
   */

  var tag = useMemo(function () {
    if (names[0]) return names[0];
    if (inlineNames[0]) return inlineNames[0];
    return 'p';
  }, [names, inlineNames]);
  var renderableChildElements = inlineNames.filter(function (name) {
    return name !== tag;
  });
  var modifers = useMemo(function () {
    if (!renderableChildElements.length) return children;
    return getModifierChild(renderableChildElements, children);
  }, [renderableChildElements, children]);
  return /*#__PURE__*/React.createElement(TextChild, _extends({
    className: className,
    tag: tag
  }, props), modifers);
};

TextComponent.defaultProps = defaultProps;
TextComponent.displayName = 'GeistText';
var Text = withScale(TextComponent);
export default Text;