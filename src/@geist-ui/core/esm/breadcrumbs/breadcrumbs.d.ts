import React, { ReactNode } from 'react';
interface Props {
    separator?: string | ReactNode;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type BreadcrumbsProps = Props & NativeAttrs;
declare const Breadcrumbs: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Breadcrumbs;
