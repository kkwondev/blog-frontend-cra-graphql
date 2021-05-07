import { css } from '@emotion/react';
import React from 'react';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';

interface TagGridItemProps {
    name: string;
}

function TagsGridItem({ name }: TagGridItemProps) {
    return <div css={tagStyle}>{name}</div>;
}
const tagStyle = css`
    margin-bottom: 0.875rem;
    background: ${palette.grey[100]};
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2rem;
    border-radius: 1rem;
    display: inline-flex;
    align-items: center;
    margin-right: 0.875rem;
    color: rgb(35, 100, 170);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: -1px;
    ${media.small} {
        height: 1.5rem;
        font-size: 0.75rem;
        border-radius: 0.75rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;
export default TagsGridItem;
