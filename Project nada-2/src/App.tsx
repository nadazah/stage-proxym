import { ChakraProvider } from '@chakra-ui/react';
import RtlProvider from 'components/RtlProvider';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from 'routes';
import theme from 'theme';
import { getCookie } from 'utils/functions';

function App(): JSX.Element {
	const { i18n } = useTranslation();
	const themeExtended = theme('ltr');

	useEffect(() => {
		i18n.changeLanguage(getCookie('lang') ?? 'en');
	}, [i18n]);

	return (
		<ChakraProvider theme={themeExtended}>
			<RtlProvider>
				<RouterProvider router={AppRoutes} />
			</RtlProvider>
		</ChakraProvider>
	);
}

export default App;
