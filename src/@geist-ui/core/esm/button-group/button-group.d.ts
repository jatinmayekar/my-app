import React from 'react';
import { ButtonTypes } from "../utils/prop-types";
interface Props {
    disabled?: boolean;
    vertical?: boolean;
    ghost?: boolean;
    type?: ButtonTypes;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type ButtonGroupProps = Props & NativeAttrs;
declare const ButtonGroup: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default ButtonGroup;
