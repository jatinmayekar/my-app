import React from 'react';
interface Props {
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type CardContentProps = Props & NativeAttrs;
declare const CardContent: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default CardContent;
