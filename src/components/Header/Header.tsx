import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { FiSearch } from 'react-icons/fi';
import GoogleLoginButton from '../GoogleLoginButton';
import CurrentUserInfo from '../CurrentUserInfo';
import { userState } from '../../atoms/authState';
import media from '../../lib/styles/media';

function Header() {
    const user = useRecoilValue(userState);
    return (
        <div css={headerStyle}>
            <div className="logo">
                <Link to="/">Klog</Link>
            </div>
            <div className="search">
                <FiSearch size="22" color="#333" />
            </div>
            <div className="login">{user ? <CurrentUserInfo /> : <GoogleLoginButton />}</div>
        </div>
    );
}

const headerStyle = css`
    width: 1400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    ${media.xlarge} {
        width: 100%;
        justify-content: flex-start;
        padding: 0 2rem;
    }
    .logo {
        font-family: 'Cabin', sans-serif;
        font-size: 1.8rem;
        text-align: center;
        a {
            color: #333;
        }
        ${media.xlarge} {
            text-align: left;
        }
    }
    .search {
        position: absolute;
        top: 55%;
        right: 12rem;
        transform: translateY(-50%);
        ${media.xlarge} {
            right: 10rem;
        }
    }
`;

export default Header;
