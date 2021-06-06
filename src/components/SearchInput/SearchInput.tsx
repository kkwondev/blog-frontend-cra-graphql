import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import palette from '../../lib/styles/palette';

interface SearchInputProps {
    searchInput: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: () => any;
    debouncedSearch: (keyword: string) => any;
}

function SearchInput({ searchInput, onChange, onKeyPress, debouncedSearch }: SearchInputProps) {
    useEffect(() => {
        if (searchInput) {
            debouncedSearch(searchInput);
        }
    }, [searchInput, debouncedSearch]);
    return (
        <div css={serachInputWrap}>
            <FiSearch size="22" color="#333" />
            <input
                type="text"
                placeholder="검색어를 입력해주세요."
                value={searchInput}
                onChange={e => onChange(e)}
                onKeyPress={onKeyPress}
            />
        </div>
    );
}
const serachInputWrap = css`
    display: flex;
    border: 1px solid ${palette.grey[300]};
    align-items: center;
    transition: all 0.125s ease-in 0s;
    cursor: text;
    height: 4rem;
    padding: 0px 1.5rem;
    input {
        flex: 1 1 0%;
        display: block;
        padding: 0px;
        border: none;
        outline: 0px;
        color: rgb(73, 80, 87);
        min-width: 0px;
        font-size: 1.5rem;
        line-height: 2rem;
        height: 2rem;
    }
    svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1.25rem;
    }
`;

export default SearchInput;
