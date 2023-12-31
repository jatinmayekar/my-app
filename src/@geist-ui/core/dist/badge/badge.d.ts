import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export declare type BadgeTypes = NormalTypes;
interface Props {
    type?: BadgeTypes;
    dot?: boolean;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type BadgeProps = Props & NativeAttrs;
declare const Badge: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Badge;
