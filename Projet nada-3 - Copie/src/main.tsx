import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from 'app/store';
import { Fonts } from 'theme/fonts.tsx';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
//import graphqlClient from 'app/api/index.ts';
const graphqlClient = new ApolloClient({
	uri: 'http://localhost:3000/graphql', // Remplacez par l'URL de votre backend GraphQL
	cache: new InMemoryCache(),
  });
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={graphqlClient}>
			<Provider store={store}> 
				<App />
				<Fonts />
			</Provider>
		</ApolloProvider>
	</React.StrictMode>,
);
