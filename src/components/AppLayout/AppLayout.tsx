import { css } from '@emotion/react';
import React from 'react';

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

AppLayout.Header = Header;
AppLayout.GnbNav = GnbNav;
AppLayout.Main = Main;

const headerStyle = css`
    width: 100%;
    height: 70px;
    position: fixed;
    display: flex;
    align-items: center;
`;

const gnbNavStyle = css`
    width: 100%;
    height: 70px;
    display: flex;
    padding-top: 100px;
    align-items: center;
`;

const mainStyle = css`
    width: 1400px;
    margin: 0 auto;
    padding-top: 3rem;
`;
