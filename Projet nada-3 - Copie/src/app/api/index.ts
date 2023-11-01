import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

//? Uncomment to disable cache
// const defaultOptions: DefaultOptions = {
// 	watchQuery: {
// 		fetchPolicy: 'no-cache',
// 		errorPolicy: 'ignore',
// 	},
// 	query: {
// 		fetchPolicy: 'no-cache',
// 		errorPolicy: 'all',
// 	},
// };

const graphqlClient = (): ApolloClient<NormalizedCacheObject> => {
	return new ApolloClient({
		uri: import.meta.env.VITE_API_URL,
		cache: new InMemoryCache(),
		// defaultOptions,
	});
};

export default graphqlClient;
