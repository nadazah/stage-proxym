import _401 from 'assets/images/401.jpg';
import config from 'config/app_config';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Image, styled, Text, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import type { AppState } from 'app/store';

// ----------------------------------------------------------------------

const RootStyle = styled('div', {
	baseStyle: {
		display: 'flex',
		minHeight: '100%',
		alignItems: 'center',
		height: '100vh',
	},
});

// ----------------------------------------------------------------------

const AccessDenied = (): JSX.Element => {
	const _isAuthenticated = useSelector(
		(state: AppState) => state.auth.isAuthenticated,
	);

	return (
		<RootStyle title='404 Page Not Found'>
			<Container minW={'100%'}>
				<Image
					src={_401}
					alt='404 Not Found'
					sx={{
						height: 450,
						mx: 'auto',
					}}
				/>

				<Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
					<Text variant='h3' mb='3'>
						Sorry, you can't access this page!
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

export default AccessDenied;
