import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["opacity"];
import _JSXStyle from "../styled-jsx.es.js";
import React from 'react';
import useTheme from '../use-theme';
var defaultProps = {
  opacity: 0.5
};
var ImageSkeleton = /*#__PURE__*/React.memo(function (_ref) {
  var opacity = _ref.opacity,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: _JSXStyle.dynamic([["2946022605", [theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_2, theme.palette.accents_1, opacity]]]) + " " + (props && props.className != null && props.className || "skeleton")
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2946022605",
    dynamic: [theme.palette.accents_1, theme.palette.accents_2, theme.palette.accents_2, theme.palette.accents_1, opacity]
  }, ".skeleton.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background-image:linear-gradient( 270deg, ".concat(theme.palette.accents_1, ", ").concat(theme.palette.accents_2, ", ").concat(theme.palette.accents_2, ", ").concat(theme.palette.accents_1, " );background-size:400% 100%;-webkit-animation:loading-__jsx-style-dynamic-selector 3s ease-in-out infinite;animation:loading-__jsx-style-dynamic-selector 3s ease-in-out infinite;opacity:").concat(opacity, ";-webkit-transition:opacity 300ms ease-out;transition:opacity 300ms ease-out;}@-webkit-keyframes loading-__jsx-style-dynamic-selector{0%{background-position:200% 0;}to{background-position:-200% 0;}}@keyframes loading-__jsx-style-dynamic-selector{0%{background-position:200% 0;}to{background-position:-200% 0;}}")));
});
ImageSkeleton.defaultProps = defaultProps;
ImageSkeleton.displayName = 'GeistImageSkeleton';
export default ImageSkeleton;