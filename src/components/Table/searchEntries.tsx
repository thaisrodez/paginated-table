import React from 'react'

export interface SearchEntriesProps {
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

/**
 * Search Input component
 * @component
 * @example
 * const searchInput = 'hello'
 * const setSearchInput = useState('')[1]
 * return (
 * <SearchEntries searchInput={searchInput} setSearchInput={setSearchInput} />
 * )
 */
export function SearchEntries({ searchInput, setSearchInput }: SearchEntriesProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value)
  }

  return (
    <div className='flex space-x-2 items-center'>
      <label htmlFor='searchTable' className='label'>Search</label>
      <input type="text" className="input" id="searchTable" name="searchTable" value={searchInput} onChange={handleChange} />
    </div>
  )
}
