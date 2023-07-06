/**
 * Get the list of page numbers
 * @param {number} numberOfPages Number of page
 * @returns {number[]} List of page numbers
 */
export declare const getPageRange: (numberOfPages: number) => number[];
/**
 * Get the first and last indexes of data displayed on a page
 * @param page Current page
 * @param rowsPerPage Number of rows per page
 * @returns {{firstIndex: number; lastIndex: number;}} First and last index displayed on a page
 */
export declare const getIndexes: (page: number, rowsPerPage: number) => {
    firstIndex: number;
    lastIndex: number;
};
/**
 * Get the data displayed in one page
 * @param data Array of data displayed in Table
 * @param page Current page
 * @param rowsPerPage Number of rows displayed per page
 * @returns {Object[]} Data displayed on one page
 */
export declare const getSlicedData: (data: Object[], page: number, rowsPerPage: number) => Object[];
/**
 * Result of a search in one item
 * @param obj One data item
 * @param searchInput
 * @returns {boolean} Whether the search input can be found in the item
 */
export declare const searchThroughObject: (obj: Object, searchInput: string) => boolean;
/**
 * Get total number of pages
 * @param data Array of data displayed in Table
 * @param rowsPerPage Number of rows displayed per page
 * @returns {number} Number of pages for all data
 */
export declare const getNumberOfPages: (data: Object[], rowsPerPage: number) => number;
