import { atom } from 'recoil';

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
