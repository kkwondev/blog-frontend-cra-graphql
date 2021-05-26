import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../../lib/apollo/queries/category';

export default function getCategory() {
    const { data } = useQuery(GET_CATEGORIES);

    return {
        data: data?.getCategories,
    };
}
