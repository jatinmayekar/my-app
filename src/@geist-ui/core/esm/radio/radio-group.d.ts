import React from 'react';
interface Props {
    value?: string | number;
    initialValue?: string | number;
    disabled?: boolean;
    onChange?: (value: string | number) => void;
    className?: string;
    useRow?: boolean;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type RadioGroupProps = Props & NativeAttrs;
declare const RadioGroup: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default RadioGroup;
