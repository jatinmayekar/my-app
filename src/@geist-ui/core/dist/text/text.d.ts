import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export declare type TextTypes = NormalTypes;
interface Props {
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    p?: boolean;
    b?: boolean;
    small?: boolean;
    i?: boolean;
    span?: boolean;
    del?: boolean;
    em?: boolean;
    blockquote?: boolean;
    className?: string;
    type?: TextTypes;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type TextProps = Props & NativeAttrs;
declare const Text: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Text;
