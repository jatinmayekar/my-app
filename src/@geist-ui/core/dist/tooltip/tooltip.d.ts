import React from 'react';
import { TriggerTypes, Placement, SnippetTypes } from "../utils/prop-types";
export declare type TooltipOnVisibleChange = (visible: boolean) => void;
export declare type TooltipTypes = SnippetTypes;
export declare type TooltipTriggers = TriggerTypes;
export declare type TooltipPlacement = Placement;
interface Props {
    text: string | React.ReactNode;
    type?: TooltipTypes;
    placement?: TooltipPlacement;
    visible?: boolean;
    initialVisible?: boolean;
    hideArrow?: boolean;
    trigger?: TooltipTriggers;
    enterDelay?: number;
    leaveDelay?: number;
    offset?: number;
    className?: string;
    portalClassName?: string;
    onVisibleChange?: TooltipOnVisibleChange;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type TooltipProps = Props & NativeAttrs;
declare const Tooltip: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Tooltip;
