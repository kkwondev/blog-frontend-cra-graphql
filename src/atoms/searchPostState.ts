import { atom, DefaultValue, selector } from 'recoil';
import { User } from '../types/User';

interface requestPost {
    title: string;
    content: string;
    // eslint-disable-next-line camelcase
    thumnbnail_img: string;
    category: string;
    tags: string[];
    user: User;
}

interface searchPostState {
    searchInput: string;
    post: requestPost[];
}

const intialState: searchPostState = {
    searchInput: '',
    post: [],
};

export const searchPostState = atom({
    key: 'searchPostState',
    default: intialState,
});

export const searchInputState = selector<string>({
    key: 'serachInputState',
    get: ({ get }) => get(searchPostState).searchInput,
    set: ({ set }, newValue) =>
        set(searchPostState, prevValue =>
            newValue instanceof DefaultValue ? newValue : { ...prevValue, searchInput: newValue }
        ),
});
