import React from 'react';
interface Props {
    value: string;
    className?: string;
    onChange?: (value: string) => void;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type FieldsetGroupProps = Props & NativeAttrs;
declare const FieldsetGroup: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default FieldsetGroup;
