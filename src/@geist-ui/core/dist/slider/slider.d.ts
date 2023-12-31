import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export declare type SliderTypes = NormalTypes;
interface Props {
    hideValue?: boolean;
    value?: number;
    type?: SliderTypes;
    initialValue?: number;
    step?: number;
    max?: number;
    min?: number;
    disabled?: boolean;
    showMarkers?: boolean;
    onChange?: (val: number) => void;
    className?: string;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type SliderProps = Props & NativeAttrs;
declare const Slider: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Slider;
