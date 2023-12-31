import React from 'react';
interface Props {
    line?: boolean;
    title?: boolean;
    disableAutoClose?: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type PopoverItemProps = Props & NativeAttrs;
declare const PopoverItem: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default PopoverItem;
