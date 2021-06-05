import { useApolloClient, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { writeState } from '../../../atoms/writeState';
import { DELETE_POST, EDIT_POST, GET_POST, GET_POST_TAGS } from '../../../lib/apollo/queries/post';

export interface PostParams {
    slug: string;
}

export default function getPost() {
    const history = useHistory();
    const client = useApolloClient();
    // const setPost = useSetRecoilState(writeState);
    const [write, setWrite] = useRecoilState(writeState);
    const { slug } = useParams<PostParams>();
    const { data, loading } = useQuery(GET_POST, { variables: { url_slug: slug } });
    const [tags, { data: tagsData, loading: tagsLoading }] = useLazyQuery(GET_POST_TAGS, {
        variables: { id: data?.readPost.post.id },
    });
    const [deletePost] = useMutation(DELETE_POST, {
        variables: { postId: data?.readPost.post.id },
    });

    const [editPost] = useMutation(EDIT_POST, {
        variables: {
            id: data?.readPost.post.id,
            post: {
                title: write.title,
                content: write.content,
                tags: write.tags,
                thumbnail_img: write.thumbnail_img === '' ? null : write.thumbnail_img,
                categoryName: write.categoryName,
            },
        },
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

    const onEditConfirm = async () => {
        if (write.title === '' || write.content === '' || write.categoryName === '') {
            alert('필수 항목을 입력하세요.');
            // eslint-disable-next-line no-useless-return
            return;
        }
        try {
            const response = await editPost();
            if (!response || !response.data) return;
            const { slug } = response.data.updatePost.post;
            await client.resetStore();
            history.push(`/post/${slug}`);
        } catch (e) {
            // eslint-disable-next-line no-alert
            alert('포스트 수정 실패');
            console.error(e);
        }
    };

    return {
        data,
        loading,
        onRemove,
        tagsData: tagsData?.getPostTags,
        tagsLoading,
        tags,
        onEdit,
        onEditConfirm,
    };
}
