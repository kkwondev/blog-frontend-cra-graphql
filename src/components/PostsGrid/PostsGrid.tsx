import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { responsePost } from '../../types/Post';
import Empty from '../../assets/images/empty_posts.svg';
import media from '../../lib/styles/media';
import PostsGridItem from '../PostsGridItem';
import PostsGridItemSkeleton from '../PostsGridItemSkeleton';

function PostsGrid() {
    const [items, setItems] = useState<responsePost[]>([]);
    const [loading, setLoding] = useState(false);

    const Dummydata = (id: number) => {
        const dataArray = items;
        // eslint-disable-next-line no-plusplus
        for (let i = id; i < id + 10; i++) {
            const addData = {
                id: i,
                title: `post#${i}`,
                slug: `post#${i}`,
                content: '가나다라마바사아차다타카치나마바사아',
                thumnbnail_img:
                    'https://media.vlpt.us/images/juno7803/post/96b970e7-445c-48e2-9bc3-b6e45b55d538/recoil.png?w=640',
                category: '개발',
                createdAt: '2021-05-04',
                user: {
                    email: 'kkwoncokr@gmail.com',
                    nickname: '강경원',
                    photo_url:
                        'https://lh5.googleusercontent.com/-lIncMlxHURw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmBNBT5zpjlqPWsuhydqKEfbGW3Tg/s100/photo.jpg',
                },
            };
            setLoding(false);
            dataArray.push(addData);
        }
        dataArray.map(data => setItems([...items, data]));
    };

    const onScroll = () => {
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 500) {
            if (items.length < 30) {
                setLoding(true);
                setTimeout(() => {
                    Dummydata(items[items.length - 1].id);
                }, 1000);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [items]);

    useEffect(() => {
        Dummydata(1);
    }, []);
    // TODO: Post items dummu data

    if (items && items.length === 0) {
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
                {items
                    ? items.map((item: responsePost, index) => (
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
