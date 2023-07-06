import React from 'react';
export interface DisplayedRowsProps {
    indexes: Record<string, number>;
    totalOfRows: number;
}
/**
 * React component indicating the extend of data displayed
 * @component
 * @example
 * const indexes = {firstIndex: 0, lastIndex: 9}
 * const totalOfRows = 34
 * return (
 * <DisplayedRows indexes={indexes} totalOfRows={totalOfRows} />
 * )
 */
export declare function DisplayedRows({ indexes, totalOfRows }: DisplayedRowsProps): React.JSX.Element;
