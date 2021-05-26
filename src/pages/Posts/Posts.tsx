import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../atoms/authState';
import { hasMorePostState, postsArrayState, postsState } from '../../atoms/postsState';
import PostsGrid from '../../components/PostsGrid';
import PostWriteButton from '../../components/PostWriteButton';
import getPostsApi from '../../hooks/query/posts/getPosts';

// export interface PostsProps {}
function Posts() {
    const { data, onLoadMore, hasMorePost, loading } = getPostsApi();

    const user = useRecoilValue(userState);

    const handleScroll = () => {
        const { scrollHeight } = document.documentElement;
        const { scrollTop } = document.documentElement;
        const { clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight && hasMorePost === true) {
            setTimeout(() => {
                onLoadMore(data[data.length - 1].id);
            }, 1000);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    console.log(data);
    if (!data) return null;
    return (
        <>
            <PostsGrid posts={data} loading={loading} />
            {user ? <PostWriteButton /> : null}
        </>
    );
}

export default Posts;
