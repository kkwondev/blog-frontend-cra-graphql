import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { SEARCH_POST } from '../../../lib/apollo/queries/post';

interface SearchParams {
    search: string;
}

export default function getSearchPosts() {
    const { search } = useParams<SearchParams>();
    const { data, loading } = useQuery(SEARCH_POST, {
        variables: { keyword: search },
        skip: search === '' || search === undefined,
    });

    return {
        data: data?.searchPost,
        loading,
    };
}
