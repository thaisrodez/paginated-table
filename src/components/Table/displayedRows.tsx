import React from 'react'

export interface DisplayedRowsProps {
  indexes: Record<string, number>
  totalOfRows: number
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
export function DisplayedRows({ indexes, totalOfRows }: DisplayedRowsProps) {
  return (
    <div>
      <p>{`Showing ${indexes.firstIndex + 1} to ${indexes.lastIndex < totalOfRows ? indexes.lastIndex : totalOfRows} of ${totalOfRows} entries`}</p>
    </div>
  )
}
