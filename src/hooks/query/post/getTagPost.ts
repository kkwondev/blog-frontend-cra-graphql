import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { GET_TAG_POST } from '../../../lib/apollo/queries/post';

interface TagPostParams {
    name: string;
}

export default function getTagPost() {
    const { name } = useParams<TagPostParams>();
    const { data, loading } = useQuery(GET_TAG_POST, {
        variables: { name },
    });

    return {
        data: data?.getTagPost,
        loading,
    };
}
