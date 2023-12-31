import { KeyMod } from "./codes";
export declare const getCtrlKeysByPlatform: () => Record<string, 'metaKey' | 'ctrlKey'>;
export declare const getActiveModMap: (bindings: number[]) => Record<keyof typeof KeyMod, boolean>;
