import { css } from '@emotion/react';
import React from 'react';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';

function PostContent() {
    return (
        <div css={contentBlock}>
            <h2 id="-들어가기">🙏 들어가기</h2>
        </div>
    );
}
const contentBlock = css`
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
export default PostContent;