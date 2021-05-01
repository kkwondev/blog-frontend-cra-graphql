import { css } from '@emotion/react';
import React from 'react';
import GoogleLogin from 'react-google-login';
import useAuth from '../../hooks/useAuth';

function GoogleLoginButton() {
    const { login } = useAuth();
    return (
        <GoogleLogin
            clientId="186011341425-kkubd7de7hmd1gqvrai4cfblill9eboa.apps.googleusercontent.com"
            buttonText="구글 로그인"
            onSuccess={login}
            onFailure={() => {
                return null;
            }}
            cookiePolicy="single_host_origin"
            css={googleBtnStyle}
        />
    );
}

const googleBtnStyle = css`
    width: 120px;
    display: inline-flex;
    letter-spacing: -1.5px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(96, 125, 139) !important;
    background: white;
    height: 2.8rem !important;
    font-size: 0.8rem !important;
    color: #333 !important;
    border-radius: 0.5rem !important;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 3rem;
    transition: all ease-in 0.125s;
    box-shadow: none !important;
    @media (max-width: 1400px) {
        right: 1.5rem;
    }
    &:hover {
        box-shadow: 0px 0.25rem 0.5rem rgb(0 0 0 / 11%) !important;
    }
`;

export default GoogleLoginButton;
