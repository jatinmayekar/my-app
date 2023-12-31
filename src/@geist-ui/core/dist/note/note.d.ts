import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export declare type NoteTypes = NormalTypes;
interface Props {
    type?: NoteTypes;
    label?: string | boolean;
    filled?: boolean;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type NoteProps = Props & NativeAttrs;
export declare const NoteComponent: React.FC<React.PropsWithChildren<NoteProps>>;
declare const Note: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Note;
