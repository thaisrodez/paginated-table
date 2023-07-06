import React from 'react';
export interface RowsPerPageProps {
    setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
}
/**
 * React component indicating the extend of data displayed
 * @component
 * @example
 * const setRowsPerPage = useState(10)[1]
 * return (
 * <RowsPerPage setRowsPerPage={setRowsPerPage} />
 * )
 */
export declare function RowsPerPage({ setRowsPerPage }: RowsPerPageProps): React.JSX.Element;
