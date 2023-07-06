/**
 * Get the list of page numbers
 * @param {number} numberOfPages Number of page
 * @returns {number[]} List of page numbers
 */
export const getPageRange = (numberOfPages: number): number[] => {
  const range = [];
  for (let i = 1; i <= numberOfPages; i++) {
    range.push(i);
  }
  return range;
};

/**
 * Get the first and last indexes of data displayed on a page
 * @param page Current page
 * @param rowsPerPage Number of rows per page
 * @returns {{firstIndex: number; lastIndex: number;}} First and last index displayed on a page
 */
export const getIndexes = (page: number, rowsPerPage: number) => {
  const lastIndex = page * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;

  return { firstIndex, lastIndex };
};

/**
 * Get the data displayed in one page
 * @param data Array of data displayed in Table
 * @param page Current page
 * @param rowsPerPage Number of rows displayed per page
 * @returns {Object[]} Data displayed on one page
 */
export const getSlicedData = (
  data: Object[],
  page: number,
  rowsPerPage: number
) => {
  const { firstIndex, lastIndex } = getIndexes(page, rowsPerPage);

  return data.slice(firstIndex, lastIndex);
};

/**
 * Result of a search in one item
 * @param obj One data item
 * @param searchInput
 * @returns {boolean} Whether the search input can be found in the item
 */
export const searchThroughObject = (
  obj: Object,
  searchInput: string
): boolean => {
  const result = [];
  for (const [_, value] of Object.entries(obj)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    result.push(value.toString().search(searchInput));
  }
  return result.some((n: number) => n !== -1);
};

/**
 * Get total number of pages
 * @param data Array of data displayed in Table
 * @param rowsPerPage Number of rows displayed per page
 * @returns {number} Number of pages for all data
 */
export const getNumberOfPages = (data: Object[], rowsPerPage: number) => {
  return Math.ceil(data.length / rowsPerPage);
};
