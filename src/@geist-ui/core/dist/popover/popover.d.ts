import React from 'react';
import { TooltipProps } from "../tooltip/tooltip";
import { Placement, TriggerTypes } from "../utils/prop-types";
export declare type PopoverTriggerTypes = TriggerTypes;
export declare type PopoverPlacement = Placement;
interface Props {
    content?: React.ReactNode | (() => React.ReactNode);
    trigger?: PopoverTriggerTypes;
    placement?: Placement;
    disableItemsAutoClose?: boolean;
}
declare type ExcludeTooltipProps = {
    type: any;
    text: any;
    trigger: any;
    placement: any;
};
export declare type PopoverProps = Props & Omit<TooltipProps, keyof ExcludeTooltipProps>;
declare const Popover: React.ForwardRefExoticComponent<Props & Omit<TooltipProps, keyof ExcludeTooltipProps> & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Popover;
