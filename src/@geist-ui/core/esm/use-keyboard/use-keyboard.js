import { KeyMod } from './codes';
import { useEffect } from 'react';
import { getActiveModMap, getCtrlKeysByPlatform } from './helper';

var useKeyboard = function useKeyboard(handler, keyBindings) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var bindings = Array.isArray(keyBindings) ? keyBindings : [keyBindings];
  var _options$disableGloba = options.disableGlobalEvent,
      disableGlobalEvent = _options$disableGloba === void 0 ? false : _options$disableGloba,
      _options$capture = options.capture,
      capture = _options$capture === void 0 ? false : _options$capture,
      _options$stopPropagat = options.stopPropagation,
      stopPropagation = _options$stopPropagat === void 0 ? false : _options$stopPropagat,
      _options$preventDefau = options.preventDefault,
      preventDefault = _options$preventDefau === void 0 ? true : _options$preventDefau,
      _options$event = options.event,
      event = _options$event === void 0 ? 'keydown' : _options$event;
  var activeModMap = getActiveModMap(bindings);
  var keyCode = bindings.filter(function (item) {
    return !KeyMod[item];
  });

  var _getCtrlKeysByPlatfor = getCtrlKeysByPlatform(),
      CtrlCmd = _getCtrlKeysByPlatfor.CtrlCmd,
      WinCtrl = _getCtrlKeysByPlatfor.WinCtrl;

  var eventHandler = function eventHandler(event) {
    if (activeModMap.Shift && !event.shiftKey) return;
    if (activeModMap.Alt && !event.altKey) return;
    if (activeModMap.CtrlCmd && !event[CtrlCmd]) return;
    if (activeModMap.WinCtrl && !event[WinCtrl]) return;
    var hitOne = keyCode.find(function (k) {
      return k === event.keyCode;
    });
    if (keyCode && !hitOne) return;

    if (stopPropagation) {
      event.stopPropagation();
    }

    if (preventDefault) {
      event.preventDefault();
    }

    handler && handler(event);
  };

  useEffect(function () {
    if (!disableGlobalEvent) {
      document.addEventListener(event, eventHandler);
    }

    return function () {
      document.removeEventListener(event, eventHandler);
    };
  }, [disableGlobalEvent]);

  var elementBindingHandler = function elementBindingHandler(elementEventType) {
    var isCapture = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (elementEventType !== event) return function () {};
    if (isCapture !== capture) return function () {};
    return function (e) {
      return eventHandler(e);
    };
  };

  return {
    bindings: {
      onKeyDown: elementBindingHandler('keydown'),
      onKeyDownCapture: elementBindingHandler('keydown', true),
      onKeyPress: elementBindingHandler('keypress'),
      onKeyPressCapture: elementBindingHandler('keypress', true),
      onKeyUp: elementBindingHandler('keyup'),
      onKeyUpCapture: elementBindingHandler('keyup', true)
    }
  };
};

export default useKeyboard;