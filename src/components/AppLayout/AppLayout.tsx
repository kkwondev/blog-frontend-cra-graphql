import { css } from '@emotion/react';
import React from 'react';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';

export interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return <section>{children}</section>;
}

export interface HeaderProps {
    children: React.ReactNode;
}

function Header({ children }: HeaderProps) {
    return <header css={headerStyle}>{children}</header>;
}

export interface GnbNavProps {
    children: React.ReactNode;
}

function GnbNav({ children }: GnbNavProps) {
    return <nav css={gnbNavStyle}>{children}</nav>;
}

export interface MainProps {
    children: React.ReactNode;
}

function Main({ children }: MainProps) {
    return <main css={mainStyle}>{children}</main>;
}

export interface PostProps {
    children: React.ReactNode;
}
function Post({ children }: PostProps) {
    return <section css={postStyle}>{children}</section>;
}

AppLayout.Header = Header;
AppLayout.GnbNav = GnbNav;
AppLayout.Main = Main;
AppLayout.Post = Post;

const headerStyle = css`
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 999;
    display: flex;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid ${palette.grey[200]};
    ${media.xlarge} {
        background: #fff;
        border-bottom: 1px solid ${palette.grey[300]};
    }
`;

const gnbNavStyle = css`
    width: 100%;
    height: 70px;
    display: flex;
    padding-top: 100px;
    align-items: center;
`;

const mainStyle = css`
    width: 1376px;
    margin: 0 auto;
    padding-top: 3rem;
    ${media.xlarge} {
        width: 1024px;
    }
    ${media.medium} {
        width: 768px;
    }
    ${media.small} {
        width: 100%;
    }
`;

const postStyle = css`
    padding-top: 8rem;
    width: 768px;
    margin: 0 auto;
    ${media.small} {
        width: 100%;
        // padding: 0 1rem;
        padding-top: 6rem;
        box-sizing: border-box;
    }
`;
