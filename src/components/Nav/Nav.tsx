import { css } from '@emotion/react';
import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

export interface NavProps {}

// TODO: api connect before dummyData
const menuDummyData = ['개발', '일', '일기', 'test', 'text2'];

function Nav({ match }: RouteComponentProps) {
    return (
        <div css={Block}>
            <ul>
                <li>
                    <Link to="/posts" className={match.path === '/posts' || match.path === '/' ? 'active' : ''}>
                        전체
                    </Link>
                </li>
                {menuDummyData.map((menu, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index}>
                        <Link
                            to={`/categories/${menu}`}
                            className={match.url === `/categories/${menu}` ? 'active' : ''}
                        >
                            {menu}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const Block = css`
    width: 1400px;
    margin: 0 auto;
    @media (max-width: 1400px) {
        width: 100%;
    }
    ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li {
            width: 7rem;
            height: 3rem;
            line-height: 3rem;
            list-style: none;
            text-align: center;
            font-size: 1.125rem;
            letter-spacing: -1.5px;
            @media (max-width: 1400px) {
                width: 5rem;
                font-size: 1rem;
            }
            a {
                width: 100%;
                height: 100%;
                display: block;
                color: #333;
            }
        }
        a.active {
            font-weight: 600;
            border-bottom: 2px solid #333;
        }
    }
`;

export default withRouter(Nav);
