import React, { useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/authState';
import PostsGrid from '../../components/PostsGrid';
import PostWriteButton from '../../components/PostWriteButton';
import getCategoryPosts from '../../hooks/query/category/getCategoryPosts';

// export interface CategoriesProps {}
function Categories() {
    const { data, onLoadMore, hasMorePost, loading } = getCategoryPosts();
    console.log(data);
    const user = useRecoilValue(userState);

    const handleScroll = () => {
        const { scrollHeight } = document.documentElement;
        const { scrollTop } = document.documentElement;
        const { clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight && hasMorePost) {
            onLoadMore(data[data.length - 1].id);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <>
            <PostsGrid posts={data || []} loading={!data || loading} />
            {user ? <PostWriteButton /> : null}
        </>
    );
}

export default Categories;
