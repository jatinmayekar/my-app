import React from 'react';
import { SnippetTypes, CopyTypes, NormalTypes } from "../utils/prop-types";
export declare type ToastTypes = NormalTypes;
interface Props {
    text?: string | string[];
    symbol?: string;
    toastText?: string;
    toastType?: ToastTypes;
    filled?: boolean;
    copy?: CopyTypes;
    type?: SnippetTypes;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type SnippetProps = Props & NativeAttrs;
declare const Snippet: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Snippet;
