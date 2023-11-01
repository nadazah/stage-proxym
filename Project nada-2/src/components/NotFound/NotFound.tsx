import { Link as RouterLink } from 'react-router-dom';
import config from 'config/app_config';

// Customization state
import { Box, Container, Image, styled, Text, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import type { AppState } from 'app/store';
import { images } from 'assets/images';

// ----------------------------------------------------------------------

const RootStyle = styled('div', {
	baseStyle: {
		display: 'flex',
		minHeight: '100%',
		alignItems: 'center',
		height: '100vh',
		backgroundColor: 'white',
	},
});

// ----------------------------------------------------------------------

const NotFound = (): JSX.Element => {
	const _isAuthenticated = useSelector(
		(state: AppState) => state.auth.isAuthenticated,
	);
	return (
		<RootStyle title='404 Page Not Found'>
			<Container minW={'100%'}>
				<Image
					src={images._404NotFound}
					alt='404 Not Found'
					sx={{
						height: 450,
						mx: 'auto',
					}}
				/>
				<Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
					<Text variant='h3'>Sorry, page not found!</Text>
					<Text sx={{ color: 'black', mb: 5 }}>
						Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
						mistyped the URL? Be sure to check your spelling.
					</Text>
					<Button
						as={RouterLink}
						to={
							_isAuthenticated ? config.defaultTraineePath : config?.loginPath
						}>
						Go Back
					</Button>
				</Box>
			</Container>
		</RootStyle>
	);
};

export default NotFound;
