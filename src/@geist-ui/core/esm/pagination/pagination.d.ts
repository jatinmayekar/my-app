import React from 'react';
interface Props {
    page?: number;
    initialPage?: number;
    count?: number;
    limit?: number;
    onChange?: (val: number) => void;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type PaginationProps = Props & NativeAttrs;
declare const Pagination: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Pagination;
