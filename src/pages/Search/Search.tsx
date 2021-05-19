import React from 'react';
import FlatPostItem from '../../components/FlatPostItem';
import SearchInput from '../../components/SearchInput';
import useSearch from '../../hooks/useSearch';

function Search() {
    const { onChange, searchInput } = useSearch();
    return (
        <>
            <SearchInput onChange={onChange} searchInput={searchInput} />
            <FlatPostItem />
        </>
    );
}

export default Search;
