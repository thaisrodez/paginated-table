import React from 'react';
export interface Item {
    [key: string]: any;
}
export interface TableHeader {
    key: string;
    title: string;
}
export interface FullTableProps {
    data: Item[];
    tableHeaders: TableHeader[];
}
/**
 * Main table component displaying table and handling table functionalities
 * @component
 * @example
 * const data = [{name: 'Bob'}, {name: 'Sam'}]
 * const tableHeaders = [{key: 'name', title:'Name'}]
 * return (
 * <FullTable data={data} tableHeaders={tableHeaders} />
 * )
 */
export default function FullTable({ data, tableHeaders }: FullTableProps): React.JSX.Element;
