import { useMutation } from '@apollo/client';
import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/authState';
import { GOOGLE_LOGIN } from '../lib/apollo/queries/auth';
import { User } from '../types/User';

interface loginData {
    // eslint-disable-next-line camelcase
    access_token: string;
    user: User;
}

interface authReseponse {
    google: loginData;
}

export default function useAuth() {
    const setUser = useSetRecoilState(userState);
    const [googleLogin] = useMutation<authReseponse>(GOOGLE_LOGIN);

    const login = ({ accessToken }: any) => {
        // TODO: 백엔드와 연결 성공 2021-05-22
        googleLogin({ variables: { access_token: accessToken } }).then(response => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const { user, access_token } = response.data!.google;
            setUser(user);
            localStorage.setItem('Authorization', `Bearer ${access_token}`);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('Authorization');
    };

    return {
        login,
        logout,
    };
}
