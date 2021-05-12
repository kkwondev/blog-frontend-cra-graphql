import { css } from '@emotion/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/authState';
import { postState } from '../../atoms/postState';
import MarkdownEditor from '../../components/MarkdownEditor/MarkdownEditor';
import PostWriteTitle from '../../components/PostWriteTitle';

export interface WriteProps {}
function Write({ history }: RouteComponentProps) {
    const user = useRecoilValue(userState);
    const post = useRecoilValue(postState);
    console.log(post);
    if (!user) {
        history.push('/');
    }
    return (
        <div css={left}>
            <PostWriteTitle />
            <MarkdownEditor />
        </div>
    );
}
const left = css`
    min-width: 0px;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 8px;
}
`;

export default withRouter(Write);
