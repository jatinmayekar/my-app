import React from 'react';
export declare type KeyboardOptions = {
    disableGlobalEvent?: boolean;
    stopPropagation?: boolean;
    preventDefault?: boolean;
    capture?: boolean;
    event?: 'keydown' | 'keypress' | 'keyup';
};
export declare type KeyboardResult = {
    bindings: {
        onKeyDown: React.KeyboardEventHandler;
        onKeyDownCapture: React.KeyboardEventHandler;
        onKeyPress: React.KeyboardEventHandler;
        onKeyPressCapture: React.KeyboardEventHandler;
        onKeyUp: React.KeyboardEventHandler;
        onKeyUpCapture: React.KeyboardEventHandler;
    };
};
export declare type UseKeyboardHandler = (event: React.KeyboardEvent | KeyboardEvent) => void;
export declare type UseKeyboard = (handler: UseKeyboardHandler, keyBindings: Array<number> | number, options?: KeyboardOptions) => KeyboardResult;
declare const useKeyboard: UseKeyboard;
export default useKeyboard;
