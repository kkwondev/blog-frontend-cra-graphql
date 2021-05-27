import { ApolloClient, ApolloLink, concat, createHttpLink, InMemoryCache } from '@apollo/client';

const host =
    process.env.REACT_APP_ENV === 'local'
        ? 'http://localhost:3001/graphql'
        : (process.env.REACT_APP_API_HOST as string);

const graphqlURI = host.concat('/graphql');
const link = createHttpLink({
    uri: graphqlURI,
    // credentials: true,
});

const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext({
        headers: {
            Authorization: localStorage.getItem('Authorization') || null,
        },
    });

    return forward(operation);
});

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                getPosts: {
                    keyArgs: [],
                    read(existing) {
                        return existing;
                    },
                    merge(existing, incoming) {
                        if (!existing) return incoming;
                        return {
                            post: [...existing.post, ...incoming.post],
                            hasMorePost: incoming.hasMorePost,
                        };
                    },
                },
            },
        },
    },
});

const client = new ApolloClient({
    link: concat(authMiddleware, link),
    cache,
});

export default client;
