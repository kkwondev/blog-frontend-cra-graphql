import { useCallback, useMemo } from 'react';
import { useHistory, useParams } from 'react-router';
import { useRecoilState } from 'recoil';
import { debounce } from 'throttle-debounce';
import { searchInputState } from '../atoms/searchPostState';

interface SearchParams {
    search_str: string;
}

export default function useSearch() {
    const params = useParams<SearchParams>();
    const history = useHistory();
    const search = params.search_str;
    const [searchInput, setSearchInput] = useRecoilState(searchInputState);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const onSearch = useCallback(
        (search: string) => {
            history.replace(`/search/${search}`);
        },
        [history, search]
    );

    const debouncedSearch = useMemo(() => {
        return debounce(300, (keyword: string) => {
            onSearch(keyword);
        });
    }, [onSearch]);

    const onKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSearch(searchInput);
        }
    };

    return {
        searchInput,
        onChange,
        debouncedSearch,
        onKeyPress,
    };
}
