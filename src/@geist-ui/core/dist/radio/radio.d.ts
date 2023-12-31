import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export declare type RadioTypes = NormalTypes;
export interface RadioEventTarget {
    checked: boolean;
}
export interface RadioEvent {
    target: RadioEventTarget;
    stopPropagation: () => void;
    preventDefault: () => void;
    nativeEvent: React.ChangeEvent;
}
interface Props {
    checked?: boolean;
    value?: string | number;
    type?: RadioTypes;
    className?: string;
    disabled?: boolean;
    onChange?: (e: RadioEvent) => void;
}
declare type NativeAttrs = Omit<React.InputHTMLAttributes<any>, keyof Props>;
export declare type RadioProps = Props & NativeAttrs;
declare const Radio: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Radio;
