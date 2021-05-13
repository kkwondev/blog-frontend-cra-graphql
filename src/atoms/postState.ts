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
    key: 'postTagsState',
    get: ({ get }) => {
        return get(postState).title;
    },
});

export const postTagsState = selector({
    key: 'postTagsState',
    get: ({ get }) => {
        const Tags = get(postState).tags;
        return Tags;
    },
});

export const postContentState = selector({
    key: 'postTagsState',
    get: ({ get }) => {
        return get(postState).content;
    },
});
