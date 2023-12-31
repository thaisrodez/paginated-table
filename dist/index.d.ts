import React from 'react';

interface Item {
    [key: string]: any;
}
interface TableHeader {
    key: string;
    title: string;
}
interface FullTableProps {
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
declare function FullTable({ data, tableHeaders }: FullTableProps): React.JSX.Element;

export { FullTable as Table };
