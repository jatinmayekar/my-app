import React, { MouseEvent } from 'react';
import { DrawerPlacement } from "./helper";
interface Props {
    visible?: boolean;
    keyboard?: boolean;
    disableBackdropClick?: boolean;
    onClose?: () => void;
    onContentClick?: (event: MouseEvent<HTMLElement>) => void;
    wrapClassName?: string;
    placement?: DrawerPlacement;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type DrawerProps = Props & NativeAttrs;
declare const Drawer: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Drawer;
