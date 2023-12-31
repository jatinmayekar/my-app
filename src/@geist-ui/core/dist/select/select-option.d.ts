import React from 'react';
interface Props {
    value?: string;
    disabled?: boolean;
    className?: string;
    divider?: boolean;
    label?: boolean;
    preventAllEvents?: boolean;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type SelectOptionProps = Props & NativeAttrs;
declare const SelectOption: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default SelectOption;
