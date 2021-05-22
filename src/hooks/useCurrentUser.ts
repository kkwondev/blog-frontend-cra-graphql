import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../atoms/authState';
import { CURRENT_USER } from '../lib/apollo/queries/auth';
import { User } from '../types/User';

// eslint-disable-next-line consistent-return
function useCurrentUser() {
    const user = useRecoilValue(userState);
    const setUser = useSetRecoilState(userState);
    const logged = localStorage.getItem('Authorization');
    const [me, { data, error }] = useLazyQuery<{ currentUser: User }>(CURRENT_USER);

    useEffect(() => {
        if (logged) {
            me();
            if (data && data.currentUser) {
                setUser(data.currentUser);
            } else if (error) {
                alert('로그인 실패하였습니다.');
                console.error(error);
            }
        }
    }, [logged, user, data]);
}

export default useCurrentUser;
