import { ApolloClient, ApolloLink, concat, createHttpLink, InMemoryCache } from '@apollo/client';

const host =
    (process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : process.env.REACT_APP_API_HOST) || '/';

const graphqlURI = host.concat('graphql');
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

const client = new ApolloClient({
    link: concat(authMiddleware, link),
    cache: new InMemoryCache(),
});

export default client;