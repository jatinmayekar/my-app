import React from 'react';
import { DividerAlign, SnippetTypes } from "../utils/prop-types";
export declare type DividerTypes = SnippetTypes;
interface Props {
    type?: DividerTypes;
    align?: DividerAlign;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type DividerProps = Props & NativeAttrs;
declare const Divider: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Divider;
