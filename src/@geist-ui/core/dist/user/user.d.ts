import React, { ReactNode } from 'react';
interface Props {
    name: ReactNode | string;
    src?: string;
    text?: string;
    className?: string;
    altText?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type UserProps = Props & NativeAttrs;
declare const User: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default User;
