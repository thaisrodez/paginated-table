import React from 'react';
export interface PaginationProps {
    pageRange: number[];
    numberOfPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
/**
 * React component for pagination
 * @component
 * @example
 * const pageRange = [1, 2, 3]
 * const numberOfPages = 3
 * const currentPage = 2
 * const setCurrentPage = useState(2)[1]
 * return (
 * <Pagination pageRange={pageRange} numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
 * )
 */
export declare function Pagination({ pageRange, numberOfPages, currentPage, setCurrentPage }: PaginationProps): React.JSX.Element;
