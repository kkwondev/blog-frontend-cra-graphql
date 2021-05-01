import { css } from '@emotion/react';
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/authState';
import useAuth from '../../hooks/useAuth';

function CurrentUserInfo() {
    const { logout } = useAuth();
    const user = useRecoilValue(userState);
    return (
        <div css={block}>
            <img src={user?.photo_url || ''} alt="img" />
            <div className="info">
                <div className="name">{user?.nickname}</div>
                {/* <div className="logout" onClick={() => logout()} onKeyDown={() => logout()} role="button" tabIndex={0}>
                    로그아웃
                </div> */}
                <GoogleLogout
                    clientId="186011341425-kkubd7de7hmd1gqvrai4cfblill9eboa.apps.googleusercontent.com"
                    render={renderProps => (
                        <button
                            className="logout"
                            type="button"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            tabIndex={0}
                        >
                            로그아웃
                        </button>
                    )}
                    onLogoutSuccess={logout}
                />
            </div>
        </div>
    );
}
const block = css`
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 3rem;
    transform: translateY(-50%);
    img {
        display: block;
        width: 3rem;
        height: 3rem;
        margin-right: 0.75rem;
        background: #333;
        border-radius: 1.5rem;
    }
    .info {
        .name {
            font-size: 1rem;
            font-weight: 600;
            color: #33;
        }
        .logout {
            display: inline-block;
            text-decoration: underline;
            margin-top: 0.25rem;
            font-size: 0.75rem;
            color: #333;
            cursor: pointer;
            outline: none;
            background: transparent;
            border: none;
            &:hover,
            &:focus-visible {
                color: #333;
            }
            &:focus-visible {
                outline: 1px solid #333;
            }
        }
    }
`;
export default CurrentUserInfo;
