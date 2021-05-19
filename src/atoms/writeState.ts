import { atom, selector } from 'recoil';

export interface writeState {
    title: string;
    content: string;
    // eslint-disable-next-line camelcase
    thumnbnail_img: string;
    categoryName: string;
    tags: string[];
    user: string;
}

const intialState: writeState = {
    title: '',
    content: '',
    thumnbnail_img: '',
    categoryName: '',
    tags: [],
    user: '',
};

export const writeState = atom({
    key: 'writeState',
    default: intialState,
});

export const writeTitleState = selector({
    key: 'writeTitleState',
    get: ({ get }) => {
        return get(writeState).title;
    },
});

export const writeTagsState = selector({
    key: 'writeTagsState',
    get: ({ get }) => {
        return get(writeState).tags;
    },
});

export const writeContentState = selector({
    key: 'writeContentState',
    get: ({ get }) => {
        return get(writeState).content;
    },
});
