import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import defaults from './defaults';

export function createApolloClient() {
    const cache = new InMemoryCache();

    const client = new ApolloClient({
        uri: 'http://ec2-54-93-246-146.eu-central-1.compute.amazonaws.com/graphql',
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