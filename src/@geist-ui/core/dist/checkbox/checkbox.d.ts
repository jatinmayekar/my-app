import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export declare type CheckboxTypes = NormalTypes;
export interface CheckboxEventTarget {
    checked: boolean;
}
export interface CheckboxEvent {
    target: CheckboxEventTarget;
    stopPropagation: () => void;
    preventDefault: () => void;
    nativeEvent: React.ChangeEvent;
}
interface Props {
    checked?: boolean;
    disabled?: boolean;
    type?: CheckboxTypes;
    initialChecked?: boolean;
    onChange?: (e: CheckboxEvent) => void;
    className?: string;
    value?: string;
}
declare type NativeAttrs = Omit<React.InputHTMLAttributes<any>, keyof Props>;
export declare type CheckboxProps = Props & NativeAttrs;
declare const Checkbox: React.ForwardRefExoticComponent<Props & NativeAttrs & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Checkbox;
