import React from 'react';
import { responseTag } from '../../types/Post';
import TagsGridItem from '../TagsGridItem';

export interface TagsGridProps {
    tags: responseTag[];
    loading: boolean;
}
function TagsGrid({ tags, loading }: TagsGridProps) {
    if (loading) return <div>loading...</div>;
    return (
        <>
            {tags.map((tag, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <TagsGridItem name={tag.tags.title} key={index} />
            ))}
        </>
    );
}

export default TagsGrid;
