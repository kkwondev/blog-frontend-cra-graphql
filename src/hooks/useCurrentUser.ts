import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/authState';
import { CURRENT_USER } from '../lib/apollo/queries/auth';
import { User } from '../types/User';

function useCurrentUser() {
    const setUser = useSetRecoilState(userState);
    const getCurrentUser = useQuery<{ currentUser: User }>(CURRENT_USER);
    const logged = localStorage.getItem('Authorization');

    const user = getCurrentUser.data ? getCurrentUser.data.currentUser : undefined;

    if (user) {
        setUser(user);
    }
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (!logged) {
            localStorage.removeItem('Authorization');
            setUser(null);
        }
    }, [user]);

    useEffect(() => {
        if (user === undefined) return;
        // eslint-disable-next-line no-useless-return
        if (user === null) return; // not logged in
    }, [user]);
}

export default useCurrentUser;
