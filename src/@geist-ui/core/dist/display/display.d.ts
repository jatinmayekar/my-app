import React, { ReactNode } from 'react';
interface Props {
    caption?: ReactNode | string;
    shadow?: boolean;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type DisplayProps = Props & NativeAttrs;
declare const Display: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Display;
