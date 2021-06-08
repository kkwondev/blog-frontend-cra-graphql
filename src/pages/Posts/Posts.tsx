import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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

        if (scrollTop + clientHeight >= scrollHeight && hasMorePost) {
            onLoadMore(data[data.length - 1].id);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <>
            <Helmet>
                <title>전체 포스트 - klog</title>
            </Helmet>
            <PostsGrid posts={data || []} loading={!data || loading} />
            {user ? <PostWriteButton /> : null}
        </>
    );
}

export default Posts;
