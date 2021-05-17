import { useRecoilState } from 'recoil';
import { searchInputState } from '../atoms/searchPostState';

export default function useSearch() {
    const [searchInput, setSearchInput] = useRecoilState(searchInputState);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return {
        searchInput,
        onChange,
    };
}
