import { css } from '@emotion/react';
import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import media from '../../lib/styles/media';

function WriteFooter() {
    return (
        <div css={WriterFooterWrap}>
            <button css={BackBtn} type="button">
                <MdArrowBack />
                <span>나가기</span>
            </button>
            <button type="button" css={StyledButton}>
                등록하기
            </button>
        </div>
    );
}

const WriterFooterWrap = css`
    padding-left: 1rem;
    padding-right: 1rem;
    height: 4rem;
    // width: 100%;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.85);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BackBtn = css`
    height: 2.5rem;
    padding: 0.5rem 1rem;
    align-items: center;
    background: none;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    display: flex;
    outline: none;
    &:hover,
    &:focus {
        background: rgba(0, 0, 0, 0.05);
    }
    svg {
        font-size: 1.25rem;
        margin-right: 0.5rem;
    }
    span {
        font-size: 1.125rem;
        ${media.xsmall} {
            display: none;
        }
    }
`;

const StyledButton = css`
    height: 2.5rem;
    font-size: 1.125rem;
    background: rgb(35, 100, 170);
    border-radius: 4px;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    outline: none;
    &:hover,
    &:focus {
        background: rgba(46, 147, 255);
    }
`;

export default WriteFooter;
