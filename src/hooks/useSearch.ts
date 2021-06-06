import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import { debounce } from 'throttle-debounce';
import { searchInputState } from '../atoms/searchPostState';

export default function useSearch() {
    const history = useHistory();
    const [searchInput, setSearchInput] = useRecoilState(searchInputState);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const onSearch = useCallback(
        (search: string) => {
            history.push(`/search/${search}`);
        },
        [history]
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
