import { css } from '@emotion/react';
import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router-dom';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';
import { responsePost } from '../../types/Post';

export interface PostsGridItemProps {
    post: responsePost;
}

function PostsGridItem({ post }: PostsGridItemProps) {
    return (
        <Link to={`post/${post.slug}`} css={card}>
            <div>
                {post.thumbnail_img ? (
                    <div className="thumbnail">
                        <img src={post.thumbnail_img} alt="img" />
                    </div>
                ) : null}
                <div className="content">
                    <h2>{post.title}</h2>
                    <p>{post.content.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\\{\\}\\[\]\\\\/]/gi, '')}</p>
                </div>
                <div className="date">
                    <p>{dayjs(post.updatedAt).format('YYYY년 MM월 DD일 HH시 mm분')}</p>
                </div>
                <div className="bottom">
                    <div className="category">
                        카테고리 <strong>{post.category.name}</strong>
                    </div>
                    <div className="userInfo">
                        <img src={post.user.photo_url} alt="me" />
                        <span>
                            by <strong>{post.user.nickname}</strong>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
const card = css`
    display: block;
    width: 20rem;
    overflow: hidden;
    color: ${palette.black};
    background: ${palette.white};
    // height: 23rem;
    box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
    border-radius: 4px;
    text-decoration: none;
    // margin:1rem;
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
    &:hover {
        transform: translate3d(0, -0.25rem, 0);
        box-shadow: 0px 1.125rem 1.125rem rgba(67, 67, 67, 0.08);
    }
    .thumbnail {
        width: 100%;
        img {
            width: 100%;
        }
    }
    .content {
        padding:1rem;
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

export default PostsGridItem;
