import { useQuery } from '@apollo/client';
import { useCallback } from 'react';
import { useParams } from 'react-router';
import { GET_CATEGORY_POST } from '../../../lib/apollo/queries/post';

export interface CategoryPostParams {
    name: string;
}

export default function getCategoryPosts() {
    const { name } = useParams<CategoryPostParams>();
    const { data, loading, fetchMore } = useQuery(GET_CATEGORY_POST, {
        variables: { name },
        notifyOnNetworkStatusChange: true,
    });
    const onLoadMore = useCallback(
        async (lastId: number) => {
            await fetchMore({
                variables: {
                    lastId,
                },
            });
        },

        [fetchMore]
    );
    return {
        data: data?.getCategoryPost.post,
        hasMorePost: data?.getCategoryPost.hasMorePost,
        loading,
        onLoadMore,
    };
}
