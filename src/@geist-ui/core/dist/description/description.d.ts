import React, { ReactNode } from 'react';
interface Props {
    title?: ReactNode | string;
    content?: ReactNode | string;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type DescriptionProps = Props & NativeAttrs;
declare const Description: React.ForwardRefExoticComponent<Props & NativeAttrs & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Description;
