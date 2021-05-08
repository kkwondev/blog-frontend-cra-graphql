import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/authState';

export interface WriteProps {}
function Write({ history }: RouteComponentProps) {
    const user = useRecoilValue(userState);
    if (!user) {
        history.push('/');
    }
    return <p>글쓰기 페이지</p>;
}

export default withRouter(Write);
