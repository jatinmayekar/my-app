import React from 'react';
interface Props {
    value?: number;
    limit?: number;
    color?: string;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type CapacityProps = Props & NativeAttrs;
declare const Capacity: React.ForwardRefExoticComponent<Props & NativeAttrs & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Capacity;
