import { css } from '@emotion/react';
import React from 'react';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';
import TagsGrid from '../TagsGrid';

function PostHead() {
    return (
        <div css={headBlock}>
            <h1>제목입니다 제목</h1>
            <div css={information}>
                <span className="username">username</span>
                <span className="separator">&middot;</span>
                <span>2021년 5월 25일</span>
            </div>
            <TagsGrid />
        </div>
    );
}

const headBlock = css`
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
    padding: 1.5rem;
    border-radius: 4px;
    background: ${palette.white};
    box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
    ${media.small} {
        padding: 1rem;
        text-align: center;
    }
    h1 {
        color: ${palette.grey[900]};
        font-size: 2.5rem;
        letter-spacing: -2.5px;
        margin-bottom: 2rem;
        ${media.small} {
            font-size: 1.6rem;
            margin-bottom: 1rem;
        }
    }
`;
const information = css`
    width: 100%;
    letter-spacing: -1px;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    .username {
        font-weight: 600;
    }
    .separator {
        margin: 0 0.5rem;
    }
`;

export default PostHead;
