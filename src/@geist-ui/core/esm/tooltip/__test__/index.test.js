import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { mount } from 'enzyme';
import { Button, Tooltip, GeistProvider } from 'components';
import { nativeEvent, updateWrapper } from 'tests/utils';
import { act } from 'react-dom/test-utils';

var expectTooltipIsShow = function expectTooltipIsShow(wrapper) {
  expect(wrapper.find('.inner').length).not.toBe(0);
};

var expectTooltipIsHidden = function expectTooltipIsHidden(wrapper) {
  expect(wrapper.find('.inner').length).toBe(0);
};

describe('Tooltip', function () {
  it('should render correctly', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var wrapper;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            wrapper = mount( /*#__PURE__*/React.createElement(GeistProvider, {
              themeType: "dark"
            }, /*#__PURE__*/React.createElement(Tooltip, {
              text: /*#__PURE__*/React.createElement("p", {
                id: "test"
              }, "custom-content")
            }, "some tips")));
            expectTooltipIsHidden(wrapper);
            wrapper.find('.tooltip').simulate('mouseEnter', nativeEvent);
            _context.next = 5;
            return updateWrapper(wrapper, 150);

          case 5:
            wrapper.find('#test').simulate('click', nativeEvent);
            expectTooltipIsShow(wrapper);
            _context.next = 9;
            return updateWrapper(wrapper, 150);

          case 9:
            wrapper.find('.tooltip').simulate('mouseLeave', nativeEvent);
            _context.next = 12;
            return updateWrapper(wrapper, 350);

          case 12:
            expectTooltipIsHidden(wrapper);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should render text when hover it', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var wrapper;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            wrapper = mount( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
              text: "some text"
            }, "some tips")));
            wrapper.find('.tooltip').simulate('mouseEnter', nativeEvent);
            _context2.next = 4;
            return updateWrapper(wrapper, 350);

          case 4:
            expectTooltipIsShow(wrapper);
            wrapper.find('.tooltip').simulate('mouseLeave', nativeEvent);
            _context2.next = 8;
            return updateWrapper(wrapper, 350);

          case 8:
            expectTooltipIsHidden(wrapper);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should render react-node when click it', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
    var wrapper, testNode;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            wrapper = mount( /*#__PURE__*/React.createElement(Tooltip, {
              text: /*#__PURE__*/React.createElement("p", {
                id: "test"
              }, "custom-content"),
              trigger: "click"
            }, /*#__PURE__*/React.createElement("span", null, "click me")));
            wrapper.find('.tooltip').simulate('click', nativeEvent);
            _context3.next = 4;
            return updateWrapper(wrapper, 150);

          case 4:
            expectTooltipIsShow(wrapper);
            testNode = wrapper.find('#test');
            expect(testNode.length).not.toBe(0);
            expect(testNode.text()).toContain('custom-content');
            act(function () {
              document.body.dispatchEvent(new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true
              }));
            });
            _context3.next = 11;
            return updateWrapper(wrapper, 150);

          case 11:
            expectTooltipIsHidden(wrapper);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should render inner components', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
    var wrapper;
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            wrapper = mount( /*#__PURE__*/React.createElement(Tooltip, {
              text: "some text",
              type: "dark"
            }, /*#__PURE__*/React.createElement(Button, {
              auto: true,
              id: "test"
            }, "button")));
            expect(wrapper.find('#test').length).not.toBe(0);

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('should render correctly by visible', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
    var wrapper;
    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            wrapper = mount( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
              text: /*#__PURE__*/React.createElement("p", {
                id: "visible"
              }, "custom-content"),
              visible: true,
              placement: "rightEnd"
            }, "some tips")));
            _context5.next = 3;
            return updateWrapper(wrapper, 150);

          case 3:
            expect(wrapper.find('#visible').length).toBe(1);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('should render correctly by using wrong placement', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
    var wrapper;
    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            wrapper = mount( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
              text: /*#__PURE__*/React.createElement("p", {
                id: "initial-visible"
              }, "custom-content"),
              initialVisible: true,
              placement: 'test'
            }, "some tips")));
            expect(wrapper.find('#initial-visible').length).toBe(1);

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
});