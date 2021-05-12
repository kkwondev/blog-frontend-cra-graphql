import React from 'react';
import { useRecoilState } from 'recoil';
import { postState } from '../atoms/postState';

export default function useCreatePost() {
    const [post, setPost] = useRecoilState(postState);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    return {
        post,
        onChange,
        setPost,
    };
}
