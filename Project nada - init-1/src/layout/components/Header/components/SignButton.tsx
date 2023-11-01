import { useSelector } from 'react-redux';
import type { AppState } from 'app/store';
import { IconButton, Tooltip, Button, styled, Text } from '@chakra-ui/react';
import { Icon } from 'components/Icon';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import config from 'config/app_config';
import { logout } from 'modules/Shared/Authentication/redux';
import { useAppDispatch } from 'hooks/useAppDispatch';

const CapitalizedButton = styled(Button, {
	baseStyle: {
		textTransform: 'uppercase',
		width: 32,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		gap: 2,
	},
});

const SignButton = (): JSX.Element => {
	const { t } = useTranslation('common');
	const _isAuthenticated = useSelector(
		(state: AppState) => state.auth.isAuthenticated,
	);

	// const isGuest = useSelector((state: IRootState) => state.auth.isGuest);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	function onSignButtonClick(): void {
		dispatch(logout());
		navigate(config.loginPath);
	}
	return (
		<Tooltip label={_isAuthenticated ? t('logout') : ''}>
			{_isAuthenticated ? (
				<IconButton
					bg='transparent'
					aria-label='sign-button'
					variant={'iconButtonTransparent'}
					onClick={onSignButtonClick}
					icon={<Icon color='primary.500' displayName='logout' />}
				/>
			) : (
				<CapitalizedButton bg='primary.500' onClick={onSignButtonClick}>
					<Text color='white' ml={2}>
						{t('login')}
					</Text>
					<Icon width={'17px'} color='white' displayName='login' />
				</CapitalizedButton>
			)}
		</Tooltip>
	);
};

export default SignButton;
