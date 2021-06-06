import { useApolloClient, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { writeState } from '../../../atoms/writeState';
import { DELETE_POST, GET_POST, GET_POST_TAGS } from '../../../lib/apollo/queries/post';

export interface PostParams {
    slug: string;
}

export default function getPost() {
    const history = useHistory();
    const client = useApolloClient();
    const setWrite = useSetRecoilState(writeState);
    const { slug } = useParams<PostParams>();
    console.log(slug);
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

    const onEdit = async () => {
        const tags: string[] = [];
        tagsData.getPostTags.map((tag: { tags: { title: string } }) => tags.push(tag.tags.title));
        // eslint-disable-next-line no-useless-return
        if (!data || !tagsData) return;
        setWrite({
            id: data?.readPost.post.id,
            title: data?.readPost.post.title,
            content: data?.readPost.post.content,
            categoryName: data?.readPost.post.category.name,
            thumbnail_img: data?.readPost.post.thumbnail_img,
            tags,
        });
        history.push(`/write/${data?.readPost.post.slug}`);
    };

    return {
        data,
        loading,
        onRemove,
        tagsData: tagsData?.getPostTags,
        tagsLoading,
        tags,
        onEdit,
    };
}
