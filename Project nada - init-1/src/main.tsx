import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from 'app/store';
import { Fonts } from 'theme/fonts.tsx';
import { ApolloProvider } from '@apollo/client';
import graphqlClient from 'app/api/index.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={graphqlClient()}>
			<Provider store={store}>
				<App />
				<Fonts />
			</Provider>
		</ApolloProvider>
	</React.StrictMode>,
);
