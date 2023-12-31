import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export declare type ProgressColors = {
    [key: number]: string;
};
export declare type ProgressTypes = NormalTypes;
interface Props {
    value?: number;
    max?: number;
    fixedTop?: boolean;
    fixedBottom?: boolean;
    colors?: ProgressColors;
    type?: ProgressTypes;
    className?: string;
}
declare type NativeAttrs = Omit<React.ProgressHTMLAttributes<any>, keyof Props>;
export declare type ProgressProps = Props & NativeAttrs;
declare const Progress: React.ForwardRefExoticComponent<Props & NativeAttrs & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Progress;
