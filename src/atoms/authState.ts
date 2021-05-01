import { atom } from 'recoil';

export type User = {
    email: string;
    nickname: string;
    // eslint-disable-next-line camelcase
    photo_url: string | null;
};
export const userState = atom<User | null>({
    key: 'userState',
    default: null,
});
