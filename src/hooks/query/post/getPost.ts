import { useApolloClient, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { DELETE_POST, GET_POST, GET_POST_TAGS } from '../../../lib/apollo/queries/post';

export interface PostParams {
    slug: string;
}

export default function getPost() {
    const history = useHistory();
    const client = useApolloClient();
    const { slug } = useParams<PostParams>();
    const { data, loading } = useQuery(GET_POST, { variables: { url_slug: slug } });
    const [tags, { data: tagsData, loading: tagsLoading }] = useLazyQuery(GET_POST_TAGS, {
        variables: { id: data?.readPost.post.id },
    });
    const [deletePost] = useMutation(DELETE_POST, {
        variables: { postId: data?.readPost.post.id },
    });

    useEffect(() => {
        if (!data || !data.readPost) {
            // eslint-disable-next-line no-useless-return
            return;
        }
    }, [data]);

    const onRemove = async () => {
        // eslint-disable-next-line no-useless-return
        if (!data || !data.readPost.post) return;
        try {
            await deletePost();
            history.push('/');
            await client.resetStore();
        } catch (e) {
            console.debug(e);
        }
    };

    return {
        data,
        loading,
        onRemove,
        tagsData: tagsData?.getPostTags,
        tagsLoading,
        tags,
    };
}
