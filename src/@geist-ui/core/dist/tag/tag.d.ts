import React from 'react';
import { SnippetTypes } from "../utils/prop-types";
export declare type TagTypes = SnippetTypes;
interface Props {
    type?: TagTypes;
    invert?: boolean;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type TagProps = Props & NativeAttrs;
export declare type TagColors = {
    color: string;
    bgColor: string;
    borderColor: string;
};
declare const Tag: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Tag;
