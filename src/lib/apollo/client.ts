import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const host = (process.env.NODE_ENV === 'development' ? '/' : process.env.REACT_APP_API_HOST) || '/';

const graphqlURI = host.concat('graphql');
const link = createHttpLink({
    uri: graphqlURI,
    credentials: 'include',
});

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default client;
