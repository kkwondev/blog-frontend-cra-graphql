import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../atoms/authState';
import { hasMorePostState, postsArrayState, postsState } from '../../atoms/postsState';
import PostsGrid from '../../components/PostsGrid';
import PostWriteButton from '../../components/PostWriteButton';
import getPostsApi from '../../hooks/query/posts/getPostsApi';

// export interface PostsProps {}
function Posts() {
    const { data, loading, onLoadMore } = getPostsApi();
    const [getPosts, setGetPosts] = useRecoilState(postsArrayState);
    const posts = useRecoilValue(postsState);
    const [getHasMorePost, setgetHasMorePost] = useRecoilState(hasMorePostState);
    const user = useRecoilValue(userState);
    useEffect(() => {
        if (data) {
            setGetPosts(data.getPosts.post);
            setgetHasMorePost(data.getPosts.hasMorePost);
        }
    }, [data]);

    const handleScroll = () => {
        const { scrollHeight } = document.documentElement;
        const { scrollTop } = document.documentElement;
        const { clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight && getHasMorePost === true) {
            onLoadMore(getPosts[getPosts.length - 1].id);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <>
            <PostsGrid posts={getPosts} hasMorePost={getHasMorePost} loading={loading} />
            {user ? <PostWriteButton /> : null}
        </>
    );
}

export default Posts;
