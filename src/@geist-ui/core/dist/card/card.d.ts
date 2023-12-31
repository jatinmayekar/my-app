import React from 'react';
import { CardTypes } from "../utils/prop-types";
interface Props {
    hoverable?: boolean;
    shadow?: boolean;
    className?: string;
    type?: CardTypes;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type CardProps = Props & NativeAttrs;
declare const Card: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Card;
