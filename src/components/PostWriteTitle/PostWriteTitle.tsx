import { css } from '@emotion/react';
import React from 'react';
import useCreatePost from '../../hooks/useCreatePost';
import palette from '../../lib/styles/palette';

function PostWriteTitle() {
    const { onChange } = useCreatePost();
    return (
        <div css={PostWriteTitleWrap}>
            <input type="text" placeholder="제목을 입력해주세요." onChange={e => onChange(e)} name="title" />
        </div>
    );
}

const PostWriteTitleWrap = css`
    width: 100%;
    max-height: 540px;
    padding-top: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
    box-sizing: border-box;
    input {
        display: block;
        padding: 0px;
        font-size: 2.55rem;
        letter-spacing: -1.5px;
        width: 100%;
        line-height: 1.5;
        outline: none;
        border: none;
        font-weight: bold;
        border-bottom: 4px solid ${palette.grey[200]};
    }
    input:placeholder {
        color: ${palette.grey[200]};
    }
`;

export default PostWriteTitle;
