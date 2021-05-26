import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/authState';
import PostsGrid from '../../components/PostsGrid';
import PostWriteButton from '../../components/PostWriteButton';
import getPostsApi from '../../hooks/query/post/getPosts';

// export interface PostsProps {}
function Posts() {
    const { data, onLoadMore, hasMorePost, loading } = getPostsApi();

    const user = useRecoilValue(userState);

    const handleScroll = () => {
        const { scrollHeight } = document.documentElement;
        const { scrollTop } = document.documentElement;
        const { clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight && hasMorePost === true) {
            onLoadMore(data[data.length - 1].id);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    if (!data) return null;
    return (
        <>
            <PostsGrid posts={data} loading={loading} />
            {user ? <PostWriteButton /> : null}
        </>
    );
}

export default Posts;
