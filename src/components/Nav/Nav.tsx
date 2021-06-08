import { useApolloClient } from '@apollo/client';
import { css } from '@emotion/react';
import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import getCategory from '../../hooks/query/category/getCategory';
import media from '../../lib/styles/media';

export interface NavProps {}

function Nav({ match }: RouteComponentProps) {
    const { data, refetch } = getCategory();
    const client = useApolloClient();
    if (!data) return null;
    return (
        <div css={Block}>
            <ul>
                <li>
                    <Link to="/posts" className={match.path === '/posts' || match.path === '/' ? 'active' : ''}>
                        전체
                    </Link>
                </li>
                {data.map(({ name }: any, index: number) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index}>
                        <Link
                            to={`/categories/${name}`}
                            onClick={() => client.resetStore()}
                            className={match.url === `/categories/${name}` ? 'active' : ''}
                        >
                            {name}
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
            ${media.xlarge} {
                width: 5rem;
                font-size: 1rem;
            }
            a {
                width: 100%;
                height: 100%;
                display: block;
                color: rgb(134, 142, 150);
            }
        }
        a.active {
            color: #333;
            font-weight: 600;
            border-bottom: 2px solid #333;
        }
    }
`;

export default withRouter(Nav);
