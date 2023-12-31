import React from 'react';
interface Props {
    count?: number;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type AvatarGroupProps = Props & NativeAttrs;
declare const AvatarGroup: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default AvatarGroup;
