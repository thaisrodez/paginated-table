import React from 'react';
import { Item, type TableHeader } from './fullTable';
export interface TableProps {
    data: Item[];
    tableHeaders: TableHeader[];
    sorting: 'asc' | 'desc' | 'none';
    setSorting: React.Dispatch<React.SetStateAction<'asc' | 'desc' | 'none'>>;
    handleAscSorting: (arg0: string) => void;
    handleDescSorting: (arg0: string) => void;
}
/**
 * Table
 * @component
 * @example
 * const data = [{name: 'Bob'}, {name: 'Sam'}]
 * const tableHeaders = [{key: 'name', title:'Name'}]
 * const sorting = 'asc'
 * const setSorting = useState('none')[1]
 * const handleAscSorting = () => {}
 * const handleDescSorting = () => {}
 * return (
 * <Table data={data} tableHeaders={tableHeaders} sorting={sorting} setSorting={setSorting} handleAscSorting={handleAscSorting} handleDescSorting={handleDescSorting}/>
 * )
 */
export declare function Table({ data, tableHeaders, sorting, setSorting, handleAscSorting, handleDescSorting }: TableProps): React.JSX.Element;
