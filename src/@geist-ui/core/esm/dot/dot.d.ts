import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export declare type DotTypes = NormalTypes;
interface Props {
    type?: DotTypes;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type DotProps = Props & NativeAttrs;
declare const Dot: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Dot;
