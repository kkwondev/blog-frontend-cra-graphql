import { css } from '@emotion/react';
import React from 'react';
import palette from '../../lib/styles/palette';

function PostWriteButton() {
    return (
        <div css={PostWriteBtn}>
            <p>새글 작성</p>
        </div>
    );
}

const PostWriteBtn = css`
    height: 2.5rem;
    padding: 1rem;
    box-sizing: border-box;
    background: ${palette.white};
    border: 1px solid ${palette.grey[600]};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
    p {
        font-size: 1rem;
        color: ${palette.black};
    }
`;

export default PostWriteButton;
