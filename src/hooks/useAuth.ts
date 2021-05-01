import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/authState';

export default function useAuth() {
    const setUser = useSetRecoilState(userState);

    const login = (response: any) => {
        console.log('bamm');
        // TODO: backend api connet
        setUser({
            email: 'kkwoncokr@naver.com',
            nickname: '강경원',
            photo_url:
                'https://lh5.googleusercontent.com/-lIncMlxHURw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmBNBT5zpjlqPWsuhydqKEfbGW3Tg/s100/photo.jpg',
        });
        localStorage.setItem('google', `Bearer ${response.access_token}`);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('google');
    };

    return {
        login,
        logout,
    };
}
