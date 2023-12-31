import React from 'react';
interface Props {
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>;
export declare type ModalSubtitleProps = Props & NativeAttrs;
declare const ModalSubtitle: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default ModalSubtitle;
