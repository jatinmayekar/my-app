import React from 'react';
import { NormalTypes } from "../utils/prop-types";
export declare type RatingTypes = NormalTypes;
declare const ratingCountTuple: [2, 3, 4, 5, 6, 7, 8, 9, 10];
declare const ratingValueTuple: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export declare type RatingValue = typeof ratingValueTuple[number];
export declare type RatingCount = typeof ratingCountTuple[number];
interface Props {
    type?: RatingTypes;
    className?: string;
    icon?: JSX.Element;
    count?: RatingCount | number;
    value?: RatingValue | number;
    initialValue?: RatingValue;
    onValueChange?: (value: number) => void;
    locked?: boolean;
    onLockedChange?: (locked: boolean) => void;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type RatingProps = Props & NativeAttrs;
declare const Rating: React.ForwardRefExoticComponent<Props & NativeAttrs & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default Rating;
