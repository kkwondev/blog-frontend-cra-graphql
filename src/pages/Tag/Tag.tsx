import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import FlatPostItem from '../../components/FlatPostItem';
import TagHead from '../../components/TagHead';
import { TagParams } from '../../components/TagHead/TagHead';
import getTagPost from '../../hooks/query/post/getTagPost';

function Tag() {
    const { data, loading } = getTagPost();
    const { name } = useParams<TagParams>();
    return (
        <>
            <Helmet>{name && <title>#{name} - klog</title>}</Helmet>
            <TagHead count={data?.post.length} />
            {data?.post === null ? (
                <p style={{ padding: '1rem' }}>{data.error}</p>
            ) : (
                data?.post.map((getTagPost: any) => (
                    <FlatPostItem key={getTagPost.id} post={getTagPost} loading={loading} />
                ))
            )}
        </>
    );
}

export default Tag;
