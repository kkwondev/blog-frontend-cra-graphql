import React, { useEffect, useState } from 'react';
import PostContent from '../../components/PostContent';
import PostHead from '../../components/PostHead';
import getPost from '../../hooks/query/post/getPost';

// export interface PostProps {}

function Post() {
    const { data, loading, onRemove } = getPost();
    const [visible, setVisible] = useState(false);

    const toggleAskRemove = () => {
        setVisible(!visible);
    };

    const onConfirmRemove = () => {
        toggleAskRemove();
        onRemove();
    };
    return (
        <>
            <PostHead
                post={data?.readPost.post}
                postLoading={!data || loading}
                toggleAskRemove={toggleAskRemove}
                onConfirmRemove={onConfirmRemove}
                askRemove={visible}
            />
            <PostContent content={data?.readPost.post.content} loading={!data || loading} />
        </>
    );
}

export default Post;
