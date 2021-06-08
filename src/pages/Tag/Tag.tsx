import React from 'react';
import FlatPostItem from '../../components/FlatPostItem';
import TagHead from '../../components/TagHead';
import getTagPost from '../../hooks/query/post/getTagPost';

function Tag() {
    const { data, loading } = getTagPost();
    return (
        <>
            <TagHead count={data.post.length} />
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
