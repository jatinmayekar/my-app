import React, { Dispatch, MutableRefObject, SetStateAction } from 'react';
export declare type BindingsChangeTarget = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string;
declare const useInput: (initialValue: string) => {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
    currentRef: MutableRefObject<string>;
    reset: () => void;
    bindings: {
        value: string;
        onChange: (event: BindingsChangeTarget) => void;
    };
};
export default useInput;
