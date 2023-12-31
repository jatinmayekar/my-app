import { GeistUIThemes } from "./presets/index";
import type { DeepPartial } from "../utils/types";
export declare type GeistUserTheme = DeepPartial<GeistUIThemes> & {
    type: string;
};
export declare const isObject: (target: unknown) => unknown;
export declare const deepDuplicable: <T extends Record<string, unknown>>(source: T, target: T) => T;
declare const Themes: {
    isPresetTheme: (themeOrType?: string | GeistUIThemes | GeistUserTheme | undefined) => boolean;
    isAvailableThemeType: (type?: string | undefined) => boolean;
    hasUserCustomTheme: (themes?: Array<GeistUIThemes>) => boolean;
    getPresets: () => Array<GeistUIThemes>;
    getPresetStaticTheme: () => GeistUIThemes;
    create: (base: GeistUIThemes, custom: GeistUserTheme) => GeistUIThemes;
    createFromDark: (custom: GeistUserTheme) => GeistUIThemes;
    createFromLight: (custom: GeistUserTheme) => GeistUIThemes;
};
export default Themes;
