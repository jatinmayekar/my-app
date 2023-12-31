import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export declare type LoadingTypes = NormalTypes;
interface Props {
    type?: LoadingTypes;
    color?: string;
    className?: string;
    spaceRatio?: number;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type LoadingProps = Props & NativeAttrs;
declare const Loading: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Loading;
