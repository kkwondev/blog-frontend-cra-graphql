import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/authState';
import PostsGrid from '../../components/PostsGrid';
import PostWriteButton from '../../components/PostWriteButton';

// export interface PostsProps {}
function Posts() {
    const user = useRecoilValue(userState);
    return (
        <>
            <PostsGrid />
            {user ? <PostWriteButton /> : null}
        </>
    );
}

export default Posts;
