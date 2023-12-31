import { Placement } from "../utils/prop-types";
interface ParentDomRect {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
}
export interface TooltipPosition {
    top: string;
    left: string;
    transform: string;
}
export declare const defaultTooltipPosition: {
    top: string;
    left: string;
    transform: string;
};
export interface TooltipIconPosition {
    top: string;
    left: string;
    right: string;
    bottom: string;
    transform: string;
}
export declare const getPosition: (placement: Placement, rect: ParentDomRect, offset: number) => TooltipPosition;
export declare const getIconPosition: (placement: Placement, offsetX: string, offsetY: string, offsetAbsolute?: string) => TooltipIconPosition;
export {};
