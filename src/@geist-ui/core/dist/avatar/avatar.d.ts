import React from 'react';
interface Props {
    src?: string;
    stacked?: boolean;
    text?: string;
    isSquare?: boolean;
    className?: string;
}
declare type NativeAttrs = Omit<Partial<React.ImgHTMLAttributes<any> & React.HTMLAttributes<any>>, keyof Props>;
export declare type AvatarProps = Props & NativeAttrs;
declare const Avatar: React.ForwardRefExoticComponent<Props & NativeAttrs & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Avatar;
