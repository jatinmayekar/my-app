import React from 'react';
interface Props {
    src: string;
    disableSkeleton?: boolean;
    className?: string;
    maxDelay?: number;
}
declare type NativeAttrs = Omit<React.ImgHTMLAttributes<any>, keyof Props>;
export declare type ImageProps = Props & NativeAttrs;
declare const Image: React.ForwardRefExoticComponent<Props & NativeAttrs & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Image;
