import { GeistUIThemesPalette } from "../themes/presets";
import { NormalTypes } from "../utils/prop-types";
declare type ButtonDropdownColors = {
    color: string;
    bgColor: string;
    hoverBgColor: string;
    hoverBorder: string;
    borderLeftColor: string;
};
export declare const getColor: (palette: GeistUIThemesPalette, type: NormalTypes | undefined, disabled?: boolean) => ButtonDropdownColors;
export {};
