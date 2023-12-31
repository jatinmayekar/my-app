import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export declare type ToggleTypes = NormalTypes;
export interface ToggleEventTarget {
    checked: boolean;
}
export interface ToggleEvent {
    target: ToggleEventTarget;
    stopPropagation: () => void;
    preventDefault: () => void;
    nativeEvent: React.ChangeEvent;
}
interface Props {
    checked?: boolean;
    initialChecked?: boolean;
    onChange?: (ev: ToggleEvent) => void;
    disabled?: boolean;
    type?: ToggleTypes;
    className?: string;
}
declare type NativeAttrs = Omit<React.LabelHTMLAttributes<any>, keyof Props>;
export declare type ToggleProps = Props & NativeAttrs;
export declare type ToggleSize = {
    width: string;
    height: string;
};
declare const Toggle: React.ForwardRefExoticComponent<Props & NativeAttrs & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Toggle;
