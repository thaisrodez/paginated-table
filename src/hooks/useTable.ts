import { useEffect, useState } from "react";
import {
  getIndexes,
  getNumberOfPages,
  getPageRange,
  getSlicedData,
  searchThroughObject,
} from "../utils/utils";
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
export const useTable = (
  data: Item[],
  page: number,
  rowsPerPage: number,
  searchInput: string,
  sorting: "asc" | "desc" | "none",
  sortingKey: string
) => {
  const [pageRange, setPageRange] = useState<number[]>([]);
  const [paginatedData, setPaginatedData] = useState<Object[]>([]);
  const [numberOfPages, setNumberOfPages] = useState(
    getNumberOfPages(data, rowsPerPage)
  );
  const [indexes, setIndexes] = useState(getIndexes(page, rowsPerPage));
  const [totalOfRows, setTotalOfRows] = useState(data.length);

  useEffect(() => {
    const range = getPageRange(numberOfPages);
    setPageRange([...range]);

    const currentIndexes = getIndexes(page, rowsPerPage);
    setIndexes({ ...currentIndexes });

    let result = getSlicedData(data, page, rowsPerPage);
    let currentNumberOfPages = getNumberOfPages(data, rowsPerPage);
    let currentTotalOfRows = data.length;

    if (searchInput.length > 0) {
      const searchResult = data.filter((obj) =>
        searchThroughObject(obj, searchInput)
      );
      currentNumberOfPages = getNumberOfPages(searchResult, rowsPerPage);
      currentTotalOfRows = searchResult.length;
      result = getSlicedData(searchResult, page, rowsPerPage);
    }
    if (sortingKey.length > 0 && sorting === "asc") {
      result = result.sort((a, b) =>
        b[sortingKey as keyof Object]
          .toString()
          .localeCompare(a[sortingKey as keyof Object].toString())
      );
    } else if (sortingKey.length > 0 && sorting === "desc") {
      result = result.sort((a, b) =>
        a[sortingKey as keyof Object]
          .toString()
          .localeCompare(b[sortingKey as keyof Object].toString())
      );
    }
    setTotalOfRows(currentTotalOfRows);
    setNumberOfPages(currentNumberOfPages);
    setPaginatedData(result);
  }, [
    data,
    rowsPerPage,
    page,
    numberOfPages,
    searchInput,
    sorting,
    sortingKey,
  ]);

  return { paginatedData, pageRange, numberOfPages, indexes, totalOfRows };
};
