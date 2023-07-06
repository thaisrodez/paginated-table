import React from 'react';
export interface SearchEntriesProps {
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
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
export declare function SearchEntries({ searchInput, setSearchInput }: SearchEntriesProps): React.JSX.Element;
