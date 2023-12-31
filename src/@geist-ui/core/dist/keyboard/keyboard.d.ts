import React from 'react';
interface Props {
    command?: boolean;
    shift?: boolean;
    option?: boolean;
    ctrl?: boolean;
    className?: string;
}
declare type NativeAttrs = Omit<React.KeygenHTMLAttributes<any>, keyof Props>;
export declare type KeyboardProps = Props & NativeAttrs;
declare const Keyboard: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Keyboard;
