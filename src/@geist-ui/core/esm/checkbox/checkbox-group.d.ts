import React from 'react';
interface Props {
    value: string[];
    disabled?: boolean;
    onChange?: (values: string[]) => void;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type CheckboxGroupProps = Props & NativeAttrs;
declare const CheckboxGroup: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default CheckboxGroup;
