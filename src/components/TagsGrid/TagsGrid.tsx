import React from 'react';
import TagsGridItem from '../TagsGridItem';

const tags = ['테스트', '테스트2', 'test1'];
function TagsGrid() {
    return (
        <>
            {tags.map(tag => (
                <TagsGridItem name={tag} key={tag} />
            ))}
        </>
    );
}

export default TagsGrid;
