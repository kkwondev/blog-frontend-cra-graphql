import { atom, selector } from 'recoil';

export interface PostState {
    title: string;
    content: string;
    // eslint-disable-next-line camelcase
    thumnbnail_img: string;
    categoryName: string;
    tags: string[];
    user: string;
}

const intialState: PostState = {
    title: '',
    content: '',
    thumnbnail_img: '',
    categoryName: '',
    tags: [],
    user: '',
};

export const postState = atom({
    key: 'postState',
    default: intialState,
});

export const postTitleState = selector({
    key: 'postTitleState',
    get: ({ get }) => {
        return get(postState).title;
    },
});

export const postTagsState = selector({
    key: 'postTagsState',
    get: ({ get }) => {
        return get(postState).tags;
    },
});

export const postContentState = selector({
    key: 'postContentState',
    get: ({ get }) => {
        return get(postState).content;
    },
});
