export var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};
export var tupleNumber = function tupleNumber() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args;
};
var buttonTypes = tuple('default', 'secondary', 'success', 'warning', 'error', 'abort', 'secondary-light', 'success-light', 'warning-light', 'error-light');
var normalTypes = tuple('default', 'secondary', 'success', 'warning', 'error');
var snippetTypes = tuple('default', 'secondary', 'success', 'warning', 'error', 'dark', 'lite');
var cardTypes = tuple('default', 'secondary', 'success', 'warning', 'error', 'dark', 'lite', 'alert', 'purple', 'violet', 'cyan');
var copyTypes = tuple('default', 'silent', 'prevent');
var triggerTypes = tuple('hover', 'click');
var placement = tuple('top', 'topStart', 'topEnd', 'left', 'leftStart', 'leftEnd', 'bottom', 'bottomStart', 'bottomEnd', 'right', 'rightStart', 'rightEnd');
var dividerAlign = tuple('start', 'center', 'end', 'left', 'right');