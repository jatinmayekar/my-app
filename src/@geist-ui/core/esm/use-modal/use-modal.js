import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import useCurrentState from '../utils/use-current-state';

var useModal = function useModal() {
  var initialVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useCurrentState = useCurrentState(initialVisible),
      _useCurrentState2 = _slicedToArray(_useCurrentState, 3),
      visible = _useCurrentState2[0],
      setVisible = _useCurrentState2[1],
      currentRef = _useCurrentState2[2];

  return {
    visible: visible,
    setVisible: setVisible,
    currentRef: currentRef,
    bindings: {
      visible: visible,
      onClose: function onClose() {
        return setVisible(false);
      }
    }
  };
};

export default useModal;