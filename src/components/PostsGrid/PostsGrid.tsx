import { css } from '@emotion/react';
import React from 'react';
import Empty from '../../assets/images/empty_posts.svg';
import media from '../../lib/styles/media';
import PostsGridItem from '../PostsGridItem';
import PostsGridItemSkeleton from '../PostsGridItemSkeleton';
import { responsePost } from '../../types/Post';

interface postGridProps {
    posts: responsePost[];
    loading: boolean;
}

function PostsGrid({ posts, loading }: postGridProps) {
    // TODO: Post items dummu data

    if (posts && posts.length === 0) {
        return (
            <div css={empty}>
                <img src={Empty} alt="empty" />
                <p>포스트가 없습니다.</p>
            </div>
        );
    }
    return (
        <section css={block}>
            <article css={grid}>
                {posts.length > 0
                    ? posts.map((item: responsePost, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <PostsGridItem post={item} key={index} />
                      ))
                    : // eslint-disable-next-line react/no-array-index-key
                      Array.from({ length: 10 }).map((_, i) => <PostsGridItemSkeleton key={i} />)}
                {loading &&
                    Array.from({ length: 10 }).map((_, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <PostsGridItemSkeleton key={i} />
                    ))}
            </article>
        </section>
    );
}

const block = css`
    width: 100%;
    padding-right: 2rem;
    display: flex;
    justify-content: center;
    ${media.small} {
        padding-left: 1rem;
        padding-right: 1rem;
        box-sizing: border-box;
    }
`;
const grid = css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem 2rem;
    ${media.xlarge} {
        grid-template-columns: repeat(3, 1fr);
    }
    ${media.medium} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${media.small} {
        width: 100%;
        grid-template-columns: 1fr;
    }
`;

const empty = css`
    max-width: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${media.xlarge} {
        width: 15vw;
    }
    ${media.large} {
        width: 25vw;
    }
    ${media.small} {
        width: 30vw;
    }
    ${media.xsmall} {
        width: 45vw;
    }
    img {
        width: 100%;
    }
    p {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: -1.5px;
        text-align: center;
    }
`;

export default PostsGrid;
