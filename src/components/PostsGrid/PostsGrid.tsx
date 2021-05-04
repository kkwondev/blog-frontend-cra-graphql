import { css } from '@emotion/react';
import React from 'react';
import { Post } from '../../types/Post';
import Empty from '../../assets/images/empty_posts.svg';
import media from '../../lib/styles/media';

function PostsGrid() {
    // TODO: Post items dummu data
    const items: Post[] = [];
    if (items && items.length === 0) {
        return (
            <div css={empty}>
                <img src={Empty} alt="empty" />
                <p>포스트가 없습니다.</p>
            </div>
        );
    }
    return <p>포스트가 있습니다.</p>;
}

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
