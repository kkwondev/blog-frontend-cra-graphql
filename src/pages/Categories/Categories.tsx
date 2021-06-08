import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { RouteComponentProps, useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/authState';
import PostsGrid from '../../components/PostsGrid';
import PostWriteButton from '../../components/PostWriteButton';
import getCategoryPosts from '../../hooks/query/category/getCategoryPosts';

// export interface CategoriesProps {}
interface CategoriesParams {
    name: string;
}
function Categories() {
    const { name } = useParams<CategoriesParams>();
    const { data, onLoadMore, hasMorePost, loading } = getCategoryPosts();
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
            <Helmet>
                <title>{name} 포스트 - klog</title>
            </Helmet>
            <PostsGrid posts={data || []} loading={!data || loading} />
            {user ? <PostWriteButton /> : null}
        </>
    );
}

export default Categories;
