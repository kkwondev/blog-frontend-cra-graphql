import { useCallback } from 'react';
import { atom, DefaultValue, selector, useSetRecoilState } from 'recoil';
import { responsePost } from '../types/Post';

interface postsState {
    posts: responsePost[];
    hasMorePost: boolean;
}

const intialState: postsState = {
    posts: [],
    hasMorePost: false,
};

export const postsState = atom({
    key: 'postsState',
    default: intialState,
});

export const postsArrayState = selector<postsState['posts']>({
    key: 'postsArrayState',
    get: ({ get }) => get(postsState).posts,
    set: ({ set }, newValue) =>
        set(postsState, prevValue =>
            newValue instanceof DefaultValue
                ? newValue
                : {
                      ...prevValue,
                      posts: [...prevValue.posts, ...newValue],
                  }
        ),
});

export const hasMorePostState = selector<postsState['hasMorePost']>({
    key: 'hasMorePostState',
    get: ({ get }) => get(postsState).hasMorePost,
    set: ({ set }, newValue) =>
        set(postsState, prevValue =>
            newValue instanceof DefaultValue ? newValue : { ...prevValue, hasMorePost: newValue }
        ),
});
