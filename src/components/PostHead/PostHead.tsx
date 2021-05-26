import { css } from '@emotion/react';
import React from 'react';
import getTags from '../../hooks/query/post/getTags';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';
import { responsePost } from '../../types/Post';
import TagsGrid from '../TagsGrid';

export interface PostHeadProps {
    post: responsePost;
}

function PostHead({ post }: PostHeadProps) {
    const { data, loading } = getTags(post.id);
    if (!data) return null;
    return (
        <div css={headBlock}>
            <h1>{post.title}</h1>
            <div css={information}>
                <span className="username">{post.user.nickname}</span>
                <span className="separator">&middot;</span>
                <span>{post.updatedAt}</span>
            </div>
            <TagsGrid tags={data.getPostTags} />
            {post.thumbnail_img ? (
                <div className="thumbnail">
                    <img src={post.thumbnail_img} alt="post-thumbnail" />
                </div>
            ) : null}
        </div>
    );
}

const headBlock = css`
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
    padding: 1.5rem;
    border-radius: 4px;
    // background: ${palette.white};
    // box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
    .thumbnail {
        width: 100%;
        margin-top: 1rem;
        img {
            width: 100%;
        }
    }
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
