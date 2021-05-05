import { css, keyframes } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';

export interface PostsGridItemSkeletonProps {}

function PostsGridItemSkeleton({}: PostsGridItemSkeletonProps) {
    return (
        <Link to="/" css={card}>
            <div>
                <div className="thumbnail" css={[skeleton, imgSkeleton]} />
                <div className="content">
                    <div className="title" css={[skeleton, titleSkeleton]} />
                    <div className="body" css={[skeleton, contentSkeleton]} />
                </div>
                <div className="date" />
                <div className="bottom" css={[skeleton, bottomSkeleton]}>
                    <div className="category" />
                    <div className="userInfo" />
                </div>
            </div>
        </Link>
    );
}

const shining = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
  `;
const card = css`
    display: block;
    width: 20rem;
    overflow: hidden;
    color: ${palette.black};
    background: ${palette.white};
    // height: 23rem;
    box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
    border-radius: 4px;
    .thumbnail {
        width: 100%;
        animation: ${shining} 1s ease-in-out infinite;
    }
    .content {
        box-sizing:border-box;
        display:flex;
        flexL 1 1 0%;
        flex-direction:column;
        letter-spacing:-1.3px;
        margin: 0px 0px 0.25rem;
        h2 {
            font-size:1.3rem;
            word-break: break-word;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        p {
            margin: 0px 0px 1.5rem;
            word-break: break-word;
            overflow-wrap: break-word;
            font-size: 0.875rem;
            line-height: 1.5;
            height: 3.9375rem;
            overflow: hidden;
            text-overflow: ellipsis;
            color:${palette.grey[600]}
        }
    }
    
    .date {
        padding: 0.625rem 1rem;
        box-sizing:border-box;
        font-size:14px;
        letter-spacing:-1.3px;
        color:${palette.grey[700]}
    }
    .bottom {
        padding: 0.625rem 1rem;
        border-top: 1px solid rgb(248, 249, 250);
        display: flex;
        font-size: 0.75rem;
        line-height: 1.5;
        justify-content: space-between;
        letter-spacing:-1.3px;
        .userInfo {
            text-decoration: none;
            color: inherit;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
        }
        .category {
            strong{
                font-weight:600;
            }
        }
        img {
            object-fit: cover;
            border-radius: 50%;
            width: 1.5rem;
            height: 1.5rem;
            display: block;
            margin-right: 0.5rem;
        }
    }

    ${media.small} {
        width: 100%;
        /* grid-template-columns: 1fr; */
    }
`;
const skeleton = css`
    background: ${palette.blueGrey[50]};
    border-radius: 0.25rem;
    animation: ${shining} 1s ease-in-out infinite;
`;

const imgSkeleton = css`
    height: 9rem;
    width: 100%;
    // margin-top: 0.3125rem;
    margin-bottom: 0.5rem;
`;

const titleSkeleton = css`
    height: 2rem;
    width: 100%;
    margin-top: 0.3125rem;
    margin-bottom: 0.3125rem;
`;

const contentSkeleton = css`
    height: 5rem;
    width: 100%;
    margin-top: 0.3125rem;
    margin-bottom: 2rem;
`;
const bottomSkeleton = css`
    width: 100%;
    height: 0.75rem;
    margin-top: 0.1875rem;
    margin-bottom: 0.1875rem;
    & + & {
        margin-top: 0.4375rem;
    }
`;

export default PostsGridItemSkeleton;
