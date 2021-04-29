import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

function Header() {
    return (
        <div css={headerStyle}>
            <div className="logo">
                <Link to="/">Klog</Link>
            </div>
            <div className="search">
                <FiSearch size="22" color="#333" />
            </div>
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
    .logo {
        font-family: 'Cabin', sans-serif;
        font-size: 1.8rem;
        text-align: center;
        a {
            color: #333;
        }
    }
    .search {
        position: absolute;
        top: 55%;
        right: 3rem;
        transform: translateY(-50%);
    }
`;

export default Header;
