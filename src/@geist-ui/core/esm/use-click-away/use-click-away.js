import { useEffect, useRef } from 'react';

var useClickAway = function useClickAway(ref, handler) {
  var handlerRef = useRef(handler);
  useEffect(function () {
    handlerRef.current = handler;
  }, [handler]);
  useEffect(function () {
    var callback = function callback(event) {
      var el = ref.current;
      if (!event || !el || el.contains(event.target)) return;
      handlerRef.current(event);
    };

    document.addEventListener('click', callback);
    return function () {
      return document.removeEventListener('click', callback);
    };
  }, [ref]);
};

export default useClickAway;