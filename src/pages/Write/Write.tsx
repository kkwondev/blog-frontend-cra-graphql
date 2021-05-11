import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/authState';
import MarkdownEditor from '../../components/MarkdownEditor/MarkdownEditor';

export interface WriteProps {}
function Write({ history }: RouteComponentProps) {
    const user = useRecoilValue(userState);
    if (!user) {
        history.push('/');
    }
    return <MarkdownEditor />;
}

export default withRouter(Write);
