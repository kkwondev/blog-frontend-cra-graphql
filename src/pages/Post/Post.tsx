import React, { useEffect } from 'react';
import PostContent from '../../components/PostContent';
import PostHead from '../../components/PostHead';
import getPost from '../../hooks/query/post/getPost';

// export interface PostProps {}

function Post() {
    const { data, loading } = getPost();

    return (
        <>
            <PostHead post={data?.readPost.post} postLoading={!data || loading} />
            <PostContent content={data?.readPost.post.content} loading={!data || loading} />
        </>
    );
}

export default Post;
