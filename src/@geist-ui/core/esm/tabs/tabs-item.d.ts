import React from 'react';
interface Props {
    label: string | React.ReactNode;
    value: string;
    disabled?: boolean;
}
declare type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export declare type TabsItemProps = Props & NativeAttrs;
declare const TabsItem: React.ForwardRefExoticComponent<Props & NativeAttrs & {
    children?: React.ReactNode;
} & import("../use-scale").ScaleProps & React.RefAttributes<unknown>>;
export default TabsItem;
