import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PostContent from '../../components/PostContent';
import PostHead from '../../components/PostHead';
import getPost from '../../hooks/query/post/getPost';

// export interface PostProps {}

function Post() {
    const { data, loading, onRemove, tagsData, tagsLoading, tags, onEdit } = getPost();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (data) {
            tags();
        }
    }, [data]);

    const toggleAskRemove = () => {
        setVisible(!visible);
    };

    const onConfirmRemove = () => {
        toggleAskRemove();
        onRemove();
    };
    return (
        <>
            <Helmet>{data?.readPost && <title>{data?.readPost.post.title} - klog</title>}</Helmet>
            <PostHead
                post={data?.readPost.post}
                postLoading={!data || loading}
                toggleAskRemove={toggleAskRemove}
                onConfirmRemove={onConfirmRemove}
                askRemove={visible}
                onEdit={onEdit}
                tags={tagsData}
                tagsLoading={tagsLoading}
            />
            <PostContent content={data?.readPost.post.content} loading={!data || loading} />
        </>
    );
}

export default Post;
