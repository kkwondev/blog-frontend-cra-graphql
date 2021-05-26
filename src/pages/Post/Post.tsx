import React from 'react';
import PostContent from '../../components/PostContent';
import PostHead from '../../components/PostHead';
import getPost from '../../hooks/query/post/getPost';

// export interface PostProps {}

function Post() {
    const { data } = getPost();

    if (!data) return null;
    return (
        <>
            <PostHead post={data?.readPost.post} />
            <PostContent content={data?.readPost.post.content} />
        </>
    );
}

export default Post;
