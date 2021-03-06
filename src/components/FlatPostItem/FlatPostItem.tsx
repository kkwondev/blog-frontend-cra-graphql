import { css } from '@emotion/react';
import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router-dom';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';
import { responsePost } from '../../types/Post';

interface FlatPostItemProps {
    post: responsePost;
    loading: boolean;
}

function FlatPostItem({ post, loading }: FlatPostItemProps) {
    if (!post) return null;

    if (loading) return <p>loading...</p>;
    return (
        <div css={FlatPostItemWrap}>
            <div className="userInfo">
                <img src={post.user.photo_url} alt="user_photo_url" />
                <div className="username">
                    <span>{post.user.nickname}</span>
                </div>
            </div>
            {post.thumbnail_img && (
                <Link to={`/post/${post.slug}`}>
                    <img src={post.thumbnail_img} alt="post_img" className="postThumbnail" />
                </Link>
            )}
            <Link to={`/post/${post.slug}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>{post.content.substring(0, 20)}</p>
            {/* <div className="tags_wrap">
                {post.tags.map(tag => (
                    <TagsGridItem name={tag} />
                ))}
            </div> */}
            <div className="subInfo">
                <span>{dayjs(post.updatedAt).format('YYYY년 MM월 DD일 HH시 mm분')}</span>
            </div>
        </div>
    );
}

const FlatPostItemWrap = css`
    padding:4rem 2rem;
    box-sizing:border-box;
    border-bottom:1px solid #ccc;
    &:last-child {
        border-bottom: none;
    }
    ${media.small} {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    a {
        width:100%;
        height:100%;
        display:block;
        img {
        width:100%;
        display:block;
        max-height:320px;
        margin-bottom: 1rem;
        }
    }
    h2 {
        font-size: 1.5rem;
        margin: 0;
        color: ${palette.grey[900]};
        word-break: keep-all;
        ${media.small} {
        font-size: 1rem;
        }
    }
    p {
        margin-bottom: 2rem;
        margin-top: 0.5rem;
        font-size: 1rem;
        color: ${palette.grey[700]};
        word-break: keep-all;
        overflow-wrap: break-word;
        ${media.small} {
        font-size: 0.875rem;
        margin-bottom: 1.5rem;
        }
    }
    .userInfo {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
        img {
            width: 3rem;
            height: 3rem;
            display: block;
            margin-right: 1rem;
            background: ${palette.grey[100]};
            object-fit: cover;
            border-radius: 1.5rem;
            box-shadow: 0px 0 8px rgba(0, 0, 0, 0.1);
            ${media.small} {
                width: 2rem;
                height: 2rem;
                border-radius: 1rem;
            }
        }
        .username {
            font-size: 1rem;
            color: ${palette.grey[900]};
            font-weight: bold;
            }
        }
    .subInfo {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        color: ${palette.grey[600]};
        font-size: 0.875rem;
        ${media.small} {
        font-size: 0.75rem;
        }
      & + & {
        border-top: 1px solid ${palette.grey[200]};
    }
`;

export default FlatPostItem;
