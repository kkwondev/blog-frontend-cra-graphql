import React, { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import { searchPostState } from '../../atoms/searchPostState';
import FlatPostItem from '../../components/FlatPostItem';
import SearchInput from '../../components/SearchInput';
import getSearchPosts from '../../hooks/query/post/getSearchPosts';
import useSearch from '../../hooks/useSearch';

function Search() {
    const { onChange, searchInput, onKeyPress, debouncedSearch } = useSearch();
    const reset = useResetRecoilState(searchPostState);
    const { data, loading } = getSearchPosts();

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    return (
        <>
            <SearchInput
                onChange={onChange}
                searchInput={searchInput}
                onKeyPress={onKeyPress}
                debouncedSearch={debouncedSearch}
            />
            {/* {data?.post.map((searchPost: any) => (
                <FlatPostItem key={searchPost.id} post={searchPost} />
            ))} */}

            {data?.post === null || data?.post === [] ? (
                <p style={{ padding: '1rem' }}>{data.error}</p>
            ) : (
                data?.post.map((searchPost: any) => (
                    <FlatPostItem key={searchPost.id} post={searchPost} loading={loading} />
                ))
            )}
        </>
    );
}

export default Search;
