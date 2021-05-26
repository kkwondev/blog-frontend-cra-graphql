import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { GET_POST } from '../../../lib/apollo/queries/post';

export interface PostParams {
    slug: string;
}

export default function getPost() {
    const { slug } = useParams<PostParams>();
    const { data } = useQuery(GET_POST, { variables: { url_slug: slug } });

    return {
        data,
    };
}
