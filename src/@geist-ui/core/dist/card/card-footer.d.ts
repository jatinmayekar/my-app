import React from 'react';
interface Props {
    disableAutoMargin?: boolean;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type CardFooterProps = Props & NativeAttrs;
declare const CardFooter: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default CardFooter;
