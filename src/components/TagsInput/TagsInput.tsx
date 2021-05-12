import { css } from '@emotion/react';
import React from 'react';
import useCreatePost from '../../hooks/useCreatePost';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';
import TagsGridItem from '../TagsGridItem';

function TagsInput() {
    const { post, onRemove, onKeyDown, onChangeTagInput, tagValue } = useCreatePost();
    return (
        <div css={tagInputWrap}>
            {post.tags.map(tag => (
                <TagsGridItem name={tag} key={tag} onClick={() => onRemove(tag)} />
            ))}
            <input
                type="text"
                css={inputStyle}
                placeholder="태그를 입력하세요"
                // eslint-disable-next-line jsx-a11y/tabindex-no-positive
                // tabIndex={2}
                onKeyPress={onKeyDown}
                onChange={e => onChangeTagInput(e)}
                value={tagValue}
            />
        </div>
    );
}

const tagInputWrap = css`
    color: ${palette.grey[800]};
    font-size: 1.125rem;
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
    [contenteditable='true']:empty:before {
        content: attr(placeholder);
        display: block; /* For Firefox */
        color: ${palette.grey[500]};
    }
`;
const inputStyle = css`
    display: inline-flex;
    outline: none;
    cursor: text;
    font-size: 1rem;
    letter-spacing: -1px;
    border-radius: 0.3rem;
    padding: 0 0.3rem;
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 8px;
    background: rgb(248, 249, 250);
    line-height: 2rem;

    ${media.custom(767)} {
        line-height: 1.5rem;
        font-size: 0.75rem;
    }
    margin-bottom: 0.75rem;
    min-width: 8rem;
    border: none;
`;

export default TagsInput;
