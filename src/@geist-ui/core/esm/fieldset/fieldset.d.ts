import React, { ReactNode } from 'react';
interface Props {
    value?: string;
    label?: string;
    title?: string | ReactNode;
    subtitle?: string | ReactNode;
    className?: string;
}
declare type NativeAttrs = Omit<React.FieldsetHTMLAttributes<any>, keyof Props>;
export declare type FieldsetProps = Props & NativeAttrs;
declare const Fieldset: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Fieldset;
