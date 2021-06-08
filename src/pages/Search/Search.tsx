/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import { useResetRecoilState } from 'recoil';
import { searchPostState } from '../../atoms/searchPostState';
import FlatPostItem from '../../components/FlatPostItem';
import SearchInput from '../../components/SearchInput';
import getSearchPosts from '../../hooks/query/post/getSearchPosts';
import useSearch from '../../hooks/useSearch';

interface SearchParams {
    search: string;
}
function Search() {
    const { search } = useParams<SearchParams>();
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
            <Helmet>{search && <title>"{search}" 검색 결과 - klog</title>}</Helmet>
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
