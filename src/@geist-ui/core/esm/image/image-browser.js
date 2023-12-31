import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["url", "title", "children", "showFullLink", "invert", "anchorProps", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useMemo } from 'react';
import Link from '../link';
import useTheme from '../use-theme';
import ImageBrowserHttpsIcon from './image-browser-https-icon';
import { getBrowserColors } from './styles';
import { getHostFromUrl } from './helpers';
import useScale, { withScale } from '../use-scale';
import useClasses from '../use-classes';
var defaultProps = {
  className: '',
  showFullLink: false,
  anchorProps: {},
  invert: false
};

var getTitle = function getTitle(title, colors) {
  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["524099755", [colors.titleColor]]]) + " " + "title"
  }, title, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "524099755",
    dynamic: [colors.titleColor]
  }, ".title.__jsx-style-dynamic-selector{color:".concat(colors.titleColor, ";font-size:0.75em;}")));
};

var getAddressInput = function getAddressInput(url, showFullLink, colors, anchorProps) {
  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3718009574", [colors.inputBgColor]]]) + " " + "address-input"
  }, /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["3718009574", [colors.inputBgColor]]]) + " " + "https"
  }, /*#__PURE__*/React.createElement(ImageBrowserHttpsIcon, null)), /*#__PURE__*/React.createElement(Link, _extends({
    href: url,
    title: url,
    target: "_blank"
  }, anchorProps), showFullLink ? url : getHostFromUrl(url)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3718009574",
    dynamic: [colors.inputBgColor]
  }, ".address-input.__jsx-style-dynamic-selector{height:1.75em;max-width:60%;min-width:40%;background-color:".concat(colors.inputBgColor, ";color:inherit;border-radius:3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 10px;overflow:hidden;position:relative;}.address-input.__jsx-style-dynamic-selector *{font-size:0.75em;color:inherit;}.address-input.__jsx-style-dynamic-selector a{max-width:90%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:inline-block;color:inherit;}.https.__jsx-style-dynamic-selector{width:0.75em;height:0.75em;font-size:1em;margin-right:0.31em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:-1px;color:inherit;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}")));
};

var ImageBrowserComponent = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var url = _ref.url,
      title = _ref.title,
      children = _ref.children,
      showFullLink = _ref.showFullLink,
      invert = _ref.invert,
      anchorProps = _ref.anchorProps,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var colors = useMemo(function () {
    return getBrowserColors(invert, theme.palette);
  }, [invert, theme.palette]);
  var input = useMemo(function () {
    if (url) return getAddressInput(url, showFullLink, colors, anchorProps);
    if (title) return getTitle(title, colors);
    return null;
  }, [url, showFullLink, title, colors, anchorProps]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref
  }, props, {
    className: _JSXStyle.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " " + (props && props.className != null && props.className || useClasses('browser', className) || "")
  }), /*#__PURE__*/React.createElement("header", {
    className: _JSXStyle.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]])
  }, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " " + "traffic"
  }, /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " " + "close"
  }), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " " + "mini"
  }), /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["1856409351", [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]]]) + " " + "full"
  })), input), children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1856409351",
    dynamic: [theme.expressiveness.shadowLarge, theme.layout.radius, SCALES.font(1), SCALES.width(1, 'max-content'), SCALES.height(1, 'auto'), SCALES.mt(0), SCALES.mr(0, 'auto'), SCALES.mb(0), SCALES.ml(0, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), colors.color, colors.barBgColor, colors.borderColor, theme.layout.gapHalf]
  }, ".browser.__jsx-style-dynamic-selector{background-color:transparent;box-shadow:".concat(theme.expressiveness.shadowLarge, ";max-width:100%;border-radius:").concat(theme.layout.radius, ";overflow:hidden;font-size:").concat(SCALES.font(1), ";width:").concat(SCALES.width(1, 'max-content'), ";height:").concat(SCALES.height(1, 'auto'), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0, 'auto'), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";}.browser.__jsx-style-dynamic-selector .image{border-top-left-radius:0;border-top-right-radius:0;}header.__jsx-style-dynamic-selector{height:2.5em;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;color:").concat(colors.color, ";background-color:").concat(colors.barBgColor, ";border-bottom:1px solid ").concat(colors.borderColor, ";}.traffic.__jsx-style-dynamic-selector{width:auto;position:absolute;left:").concat(theme.layout.gapHalf, ";top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);bottom:0;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:inherit;}.traffic.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{border-radius:50%;width:0.75em;height:0.75em;max-width:20px;max-height:20px;display:inline-block;margin-right:0.5em;}.close.__jsx-style-dynamic-selector{background-color:#ff5f56;}.mini.__jsx-style-dynamic-selector{background-color:#ffbd2e;}.full.__jsx-style-dynamic-selector{background-color:#27c93f;}")));
});
ImageBrowserComponent.defaultProps = defaultProps;
ImageBrowserComponent.displayName = 'GeistImageBrowser';
var ImageBrowser = withScale(ImageBrowserComponent);
export default ImageBrowser;