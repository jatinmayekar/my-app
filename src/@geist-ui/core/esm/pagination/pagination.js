import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["page", "initialPage", "count", "limit", "children", "onChange", "className"];
import _JSXStyle from "../styled-jsx.es.js";
import React, { useEffect, useMemo } from 'react';
import PaginationPrevious from './pagination-previous';
import PaginationNext from './pagination-next';
import PaginationPages from './pagination-pages';
import { PaginationContext } from './pagination-context';
import useCurrentState from '../utils/use-current-state';
import { pickChild } from '../utils/collections';
import useScale, { withScale } from '../use-scale';
var defaultProps = {
  initialPage: 1,
  count: 1,
  limit: 7,
  className: ''
};

var PaginationComponent = function PaginationComponent(_ref) {
  var customPage = _ref.page,
      initialPage = _ref.initialPage,
      count = _ref.count,
      limit = _ref.limit,
      children = _ref.children,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useScale = useScale(),
      SCALES = _useScale.SCALES;

  var _useCurrentState = useCurrentState(initialPage),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      page = _useCurrentState2[0],
      setPage = _useCurrentState2[1],
      pageRef = _useCurrentState2[2];

  var _pickChild = pickChild(children, PaginationPrevious),
      _pickChild2 = _slicedToArray(_pickChild, 2),
      prevChildren = _pickChild2[1];

  var _pickChild3 = pickChild(children, PaginationNext),
      _pickChild4 = _slicedToArray(_pickChild3, 2),
      nextChildren = _pickChild4[1];

  var _useMemo = useMemo(function () {
    var hasChildren = function hasChildren(c) {
      return React.Children.count(c) > 0;
    };

    var prevDefault = /*#__PURE__*/React.createElement(PaginationPrevious, null, "prev");
    var nextDefault = /*#__PURE__*/React.createElement(PaginationNext, null, "next");
    return [hasChildren(prevChildren) ? prevChildren : prevDefault, hasChildren(nextChildren) ? nextChildren : nextDefault];
  }, [prevChildren, nextChildren]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      prevItem = _useMemo2[0],
      nextItem = _useMemo2[1];

  var update = function update(type) {
    if (type === 'prev' && pageRef.current > 1) {
      setPage(function (last) {
        return last - 1;
      });
    }

    if (type === 'next' && pageRef.current < count) {
      setPage(function (last) {
        return last + 1;
      });
    }
  };

  var values = useMemo(function () {
    return {
      isFirst: page <= 1,
      isLast: page >= count,
      update: update
    };
  }, [page, count]);
  useEffect(function () {
    onChange && onChange(page);
  }, [page]);
  useEffect(function () {
    if (customPage !== undefined) {
      setPage(customPage);
    }
  }, [customPage]);
  return /*#__PURE__*/React.createElement(PaginationContext.Provider, {
    value: values
  }, /*#__PURE__*/React.createElement("nav", _extends({}, props, {
    className: _JSXStyle.dynamic([["3826701357", [SCALES.font(2), SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]]]) + " " + (props && props.className != null && props.className || className || "")
  }), prevItem, /*#__PURE__*/React.createElement(PaginationPages, {
    count: count,
    current: page,
    limit: limit,
    setPage: setPage
  }), nextItem), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3826701357",
    dynamic: [SCALES.font(2), SCALES.font(0.875), SCALES.width(1, 'auto'), SCALES.height(1, 'auto'), SCALES.pt(0), SCALES.pr(0), SCALES.pb(0), SCALES.pl(0), SCALES.mt(0), SCALES.mr(0), SCALES.mb(0), SCALES.ml(0)]
  }, "nav.__jsx-style-dynamic-selector{font-variant:tabular-nums;font-feature-settings:'tnum';--pagination-size:".concat(SCALES.font(2), ";font-size:").concat(SCALES.font(0.875), ";width:").concat(SCALES.width(1, 'auto'), ";height:").concat(SCALES.height(1, 'auto'), ";padding:").concat(SCALES.pt(0), " ").concat(SCALES.pr(0), " ").concat(SCALES.pb(0), " ").concat(SCALES.pl(0), ";margin:").concat(SCALES.mt(0), " ").concat(SCALES.mr(0), " ").concat(SCALES.mb(0), " ").concat(SCALES.ml(0), ";}nav.__jsx-style-dynamic-selector button:last-of-type{margin-right:0;}")));
};

PaginationComponent.defaultProps = defaultProps;
PaginationComponent.displayName = 'GeistPagination';
var Pagination = withScale(PaginationComponent);
export default Pagination;