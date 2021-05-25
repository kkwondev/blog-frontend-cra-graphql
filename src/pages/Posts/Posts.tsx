import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../atoms/authState';
import { hasMorePostState, postsArrayState, postsState } from '../../atoms/postsState';
import PostsGrid from '../../components/PostsGrid';
import PostWriteButton from '../../components/PostWriteButton';
import getPostsApi from '../../hooks/query/posts/getPosts';

// export interface PostsProps {}
function Posts() {
    const { data, onLoadMore } = getPostsApi();
    const [getPosts, setGetPosts] = useRecoilState(postsArrayState);
    const [getHasMorePost, setgetHasMorePost] = useRecoilState(hasMorePostState);
    const user = useRecoilValue(userState);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (data) {
            setLoading(false);
            setGetPosts(data.getPosts.post);
            setgetHasMorePost(data.getPosts.hasMorePost);
        }
    }, [data]);

    const handleScroll = () => {
        const { scrollHeight } = document.documentElement;
        const { scrollTop } = document.documentElement;
        const { clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight && getHasMorePost === true) {
            setLoading(true);
            setTimeout(() => {
                onLoadMore(getPosts[getPosts.length - 1].id);
            }, 1000);
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
