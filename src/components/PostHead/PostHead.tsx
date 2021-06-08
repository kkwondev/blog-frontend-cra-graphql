/* eslint-disable react/jsx-boolean-value */
import { css } from '@emotion/react';
import dayjs from 'dayjs';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/authState';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';
import { responsePost, responseTag } from '../../types/Post';
import PopupOKCancel from '../PopupOKCancel/PopupOKCancel';
import TagsGrid from '../TagsGrid';

export interface PostHeadProps {
    post: responsePost;
    postLoading: boolean;
    tags: responseTag[];
    tagsLoading: boolean;
    toggleAskRemove: () => any;
    onConfirmRemove: () => any;
    onEdit: () => any;
    askRemove: boolean;
}

function PostHead({
    post,
    postLoading,
    toggleAskRemove,
    askRemove,
    onConfirmRemove,
    tags,
    tagsLoading,
    onEdit,
}: PostHeadProps) {
    if (!post) return null;
    const user = useRecoilValue(userState);

    if (postLoading || tagsLoading) return <div>Loading</div>;
    return (
        <div css={headBlock}>
            <h1>{post.title}</h1>
            {user?.email === post.user.email ? (
                <div css={editRemoveWrap}>
                    <button type="button" onClick={onEdit}>
                        수정
                    </button>
                    <button type="button" onClick={toggleAskRemove}>
                        삭제
                    </button>
                </div>
            ) : null}
            <div css={information}>
                <span className="username">{post.user.nickname}</span>
                <span className="separator">&middot;</span>
                <span>{dayjs(post.updatedAt).format('YYYY년 MM월 DD일 HH시 mm분')}</span>
            </div>
            {tags && <TagsGrid tags={tags} loading={tagsLoading} link={true} />}
            {post.thumbnail_img ? (
                <div className="thumbnail">
                    <img src={post.thumbnail_img} alt="post-thumbnail" />
                </div>
            ) : null}
            <PopupOKCancel
                visible={askRemove}
                title="포스트 삭제"
                onCancel={toggleAskRemove}
                onConfirm={onConfirmRemove}
            >
                정말로 삭제하시겠습니까?
            </PopupOKCancel>
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

const editRemoveWrap = css`
    display: flex;
    justify-content: flex-end;
    margin-bottom: -1.25rem;
    ${media.medium} {
        margin-top: -0.5rem;
        margin-bottom: 1.5rem;
    }
    button {
        padding: 0;
        outline: none;
        border: none;
        background: none;
        font-size: inherit;
        cursor: pointer;
        color: ${palette.grey[600]};
        &:hover {
            color: ${palette.grey[900]};
        }
        ${media.small} {
            font-size: 0.875rem;
        }
    }
    button + button {
        margin-left: 0.5rem;
    }
`;

export default PostHead;
