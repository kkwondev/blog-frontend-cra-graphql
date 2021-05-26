import { useQuery } from '@apollo/client';
import { GET_POST_TAGS } from '../../../lib/apollo/queries/post';

export default function getTags(id: number) {
    const { data, loading } = useQuery(GET_POST_TAGS, { variables: { id } });

    return {
        data,
        loading,
    };
}
