import { MutableRefObject } from 'react';
export declare type ShapeType = {
    width: number;
    height: number;
};
export declare const getRealShape: (el: HTMLElement | null) => ShapeType;
export declare type ShapeResult = [ShapeType, () => void];
declare const useRealShape: <T extends HTMLElement>(ref: MutableRefObject<T | null>) => ShapeResult;
export default useRealShape;
