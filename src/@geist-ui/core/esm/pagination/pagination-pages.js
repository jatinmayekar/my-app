import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useCallback, useMemo } from 'react';
import PaginationItem from './pagination-item';
import PaginationEllipsis from './pagination-ellipsis';

var PaginationPages = function PaginationPages(_ref) {
  var limit = _ref.limit,
      count = _ref.count,
      current = _ref.current,
      setPage = _ref.setPage;
  var showPages = useMemo(function () {
    var oddLimit = limit % 2 === 0 ? limit - 1 : limit;
    return oddLimit - 2;
  }, [limit]);
  var middleNumber = (showPages + 1) / 2;

  var _useMemo = useMemo(function () {
    var showEllipsis = count > limit;
    return [showEllipsis && current > middleNumber + 1, showEllipsis && current < count - middleNumber];
  }, [current, showPages, middleNumber, count, limit]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      showBeforeEllipsis = _useMemo2[0],
      showAfterEllipsis = _useMemo2[1];

  var pagesArray = useMemo(function () {
    return _toConsumableArray(new Array(showPages));
  }, [showPages]);
  var renderItem = useCallback(function (value, active) {
    return /*#__PURE__*/React.createElement(PaginationItem, {
      key: "pagination-item-".concat(value),
      active: value === active,
      onClick: function onClick() {
        return setPage(value);
      }
    }, value);
  }, []);
  var startPages = pagesArray.map(function (_, index) {
    var value = index + 2;
    return renderItem(value, current);
  });
  var middlePages = pagesArray.map(function (_, index) {
    var middleIndexNumber = middleNumber - (index + 1);
    var value = current - middleIndexNumber;
    return /*#__PURE__*/React.createElement(PaginationItem, {
      key: "pagination-middle-".concat(index),
      active: index + 1 === middleNumber,
      onClick: function onClick() {
        return setPage(value);
      }
    }, value);
  });
  var endPages = pagesArray.map(function (_, index) {
    var value = count - (showPages - index);
    return renderItem(value, current);
  });

  if (count <= limit) {
    /* eslint-disable react/jsx-no-useless-fragment */
    return /*#__PURE__*/React.createElement(React.Fragment, null, _toConsumableArray(new Array(count)).map(function (_, index) {
      var value = index + 1;
      return /*#__PURE__*/React.createElement(PaginationItem, {
        key: "pagination-item-".concat(value),
        active: value === current,
        onClick: function onClick() {
          return setPage(value);
        }
      }, value);
    }));
    /* eslint-enable */
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, renderItem(1, current), showBeforeEllipsis && /*#__PURE__*/React.createElement(PaginationEllipsis, {
    key: "pagination-ellipsis-before",
    isBefore: true,
    onClick: function onClick() {
      return setPage(function (last) {
        return last - 5 >= 1 ? last - 5 : 1;
      });
    }
  }), showBeforeEllipsis && showAfterEllipsis ? middlePages : showBeforeEllipsis ? endPages : startPages, showAfterEllipsis && /*#__PURE__*/React.createElement(PaginationEllipsis, {
    key: "pagination-ellipsis-after",
    onClick: function onClick() {
      return setPage(function (last) {
        return last + 5 <= count ? last + 5 : count;
      });
    }
  }), renderItem(count, current));
};

PaginationPages.displayName = 'GeistPaginationPages';
export default PaginationPages;