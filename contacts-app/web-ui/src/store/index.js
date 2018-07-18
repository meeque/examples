import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import defaults from './defaults';
// import builder from './../commons/builder';

export function createApolloClient() {
    const cache = new InMemoryCache();

    const client = new ApolloClient({
        uri: '/graphql',
        request: async operation => {
            operation.setContext(({ headers = {} }) => ({
                headers: {
                    ...headers
                },
            }));
        },
        cache: cache,
        onError: ({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                console.log('Apollo GraphQLError:', graphQLErrors);
            }
            if (networkError) {
                console.log('Apollo NetworkError:', networkError);
            }
        },
        clientState: {
            defaults,
        },
    });

    return client;
}

