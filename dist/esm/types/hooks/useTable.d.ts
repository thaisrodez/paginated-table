import { Item } from "../components/Table/fullTable";
/**
 * Custom hook to handle table actions
 * @param data Data to displayed in the table
 * @param page Current page displayed
 * @param rowsPerPage Number of rows displayed per page
 * @param searchInput Search input
 * @param sorting Type of sorting
 * @param sortingKey Key sorted on
 * @returns
 */
export declare const useTable: (data: Item[], page: number, rowsPerPage: number, searchInput: string, sorting: "asc" | "desc" | "none", sortingKey: string) => {
    paginatedData: Object[];
    pageRange: number[];
    numberOfPages: number;
    indexes: {
        firstIndex: number;
        lastIndex: number;
    };
    totalOfRows: number;
};
