import React from 'react';
import { TableDataItemBase, TableOnCellClick, TableOnChange, TableOnRowClick, TableRowClassNameHandler } from "./table-types";
import { ScaleProps } from "../use-scale";
interface Props<TableDataItem extends TableDataItemBase> {
    data?: Array<TableDataItem>;
    initialData?: Array<TableDataItem>;
    emptyText?: string;
    hover?: boolean;
    onRow?: TableOnRowClick<TableDataItem>;
    onCell?: TableOnCellClick<TableDataItem>;
    onChange?: TableOnChange<TableDataItem>;
    className?: string;
    rowClassName?: TableRowClassNameHandler<TableDataItem>;
}
declare type NativeAttrs = Omit<React.TableHTMLAttributes<any>, keyof Props<any>>;
export declare type TableProps<TableDataItem extends TableDataItemBase> = Props<TableDataItem> & NativeAttrs;
declare function TableComponent<TableDataItem extends TableDataItemBase>(tableProps: React.PropsWithChildren<TableProps<TableDataItem>>): JSX.Element;
declare namespace TableComponent {
    var defaultProps: {
        hover: boolean;
        initialData: never[];
        emptyText: string;
        className: string;
        rowClassName: () => string;
    };
    var displayName: string;
    var Column: {
        <TableDataItem extends TableDataItemBase>(columnProps: React.PropsWithChildren<import("./table-column").TableColumnProps<TableDataItem>>): null;
        defaultProps: {
            className: string;
            render: () => void;
        };
        displayName: string;
    };
}
declare const _default: typeof TableComponent & ScaleProps;
export default _default;
