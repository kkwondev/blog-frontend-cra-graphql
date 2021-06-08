import { css } from '@emotion/react';
import React from 'react';
import { useParams } from 'react-router';
import media from '../../lib/styles/media';

interface TagParams {
    name: string;
}

interface TagHeadProps {
    count: number;
}

function TagHead({ count }: TagHeadProps) {
    const { name } = useParams<TagParams>();
    return (
        <div css={TagWrap}>
            <h1># {name}</h1>
            <p className="count">총 {count}개의 포스트</p>
        </div>
    );
}

const TagWrap = css`
    font-size: 3rem;
    margin: 0px;
    line-height: 1.5;
    color: rgb(52, 58, 64);
    letter-spacing: -1px;
    padding: 2rem;
    text-align: center;
    .count {
        margin-top: 1rem;
        color: rgb(134, 142, 150);
        font-size: 1rem;
    }
    ${media.small} {
        font-size: 2rem;
    }
`;

export default TagHead;
