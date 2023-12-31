import React from 'react';
interface Props {
    title: string;
    subtitle?: React.ReactNode | string;
    initialVisible?: boolean;
    shadow?: boolean;
    className?: string;
    index?: number;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type CollapseProps = Props & NativeAttrs;
declare const Collapse: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Collapse;
