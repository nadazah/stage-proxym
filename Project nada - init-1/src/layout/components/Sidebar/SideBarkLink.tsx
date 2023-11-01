import {
	Flex,
	Text,
	HStack,
	useDisclosure,
	Button,
	VStack,
	Box,
} from '@chakra-ui/react';
import type { FunctionComponent } from 'react';
import { Icon } from 'components/Icon';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { borderRadius } from 'utils/constant';
import { useSelector } from 'react-redux';
import Modal from 'components/Modal';
import type { AppState } from 'app/store';
import { useAppDispatch } from 'hooks/useAppDispatch';
import config from 'config/app_config';
import { removeCookie } from 'utils/functions';
import { logout } from 'modules/Shared/Authentication/redux';

const variants = {
	open: {
		x: [-100, 0],
		opacity: [0, 1],
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		x: [50, 0],
		opacity: [0, 1],
		transition: {
			y: { stiffness: 1000 },
		},
	},
};
interface SideBarLinkProps {
	label: string;
	path: string;
	icon: string;
	sideToggled: boolean;
}
const SideBarkLink: FunctionComponent<SideBarLinkProps> = ({
	sideToggled,
	icon,
	path,
	label,
	...props
}) => {
	const { t } = useTranslation('common');
	const navigate = useNavigate();
	const _isAuthenticated = useSelector(
		(state: AppState) => state.auth.isAuthenticated,
	);
	const { isOpen, onClose, onOpen } = useDisclosure();
	const dispatch = useAppDispatch();
	const inaccessibleRoutes = ['/public/history', '/public/profile'];
	const sideBarLink = label.split('.');
	return (
		<>
			<NavLink
				onClick={(e): void => {
					if (!_isAuthenticated && inaccessibleRoutes?.includes(path)) {
						e.preventDefault();
						onOpen();
					}
				}}
				to={path}>
				{({ isActive }): JSX.Element => (
					<Flex
						gap='1rem'
						p='.5rem'
						pl='1.2rem'
						cursor='pointer'
						position='relative'
						alignItems='center'
						overflow='hidden'
						_hover={{
							fill: 'white',
							background:
								'linear-gradient(80deg, rgb(255 255 255 / 28%) 0%, rgb(255 255 255 / 2%) 100%)',
						}}
						role='group'
						background={
							isActive
								? 'linear-gradient(80deg, rgb(255 255 255 / 28%) 0%, rgb(255 255 255 / 2%) 30%)'
								: ''
						}
						justifyContent={sideToggled ? 'flex-start' : 'center'}
						{...props}
						as={motion.li}
						variants={variants}
						whileHover={{ scale: 1.01 }}
						whileTap={{ scale: 0.95 }}>
						{/* //? To be added in case design required it else remove it. */}
						<Box
							borderRadius='0 3px 3px 0'
							height='100%'
							position='absolute'
							left='0'
							bg='secondary.500'
							transition='all .2s'
							top='0'
							_groupHover={{
								width: '4px',
							}}
							w={isActive ? '4px' : '0'}
						/>
						<HStack
							borderRadius={borderRadius}
							w={sideToggled ? '100%' : '80%'}
							p={sideToggled ? 5 : 3}>
							<Icon displayName={icon} color='white' w='2.5rem' h='1.5rem' />
							<Text
								overflow='hidden'
								_groupHover={{
									fontWeight: 'bold',
								}}
								whiteSpace='nowrap'
								color='white'
								fontWeight={isActive ? 'bold' : 'normal'}
								fontSize='16px'>
								{t(sideBarLink[1], { ns: sideBarLink[0] })}
							</Text>
						</HStack>
					</Flex>
				)}
			</NavLink>
			<Modal
				isLoading={false}
				isOpen={isOpen}
				onClose={onClose}
				centerFooter
				centerHeader
				renderContent={
					<VStack alignItems={'center'}>
						<Text>{t('no_permission')}</Text>
					</VStack>
				}
				footerContent={
					<Button
						onClick={(): void => {
							dispatch(logout());
							removeCookie('isAuthenticated');
							navigate(config.loginPath);
						}}>
						{t('login_now')}
					</Button>
				}
				title={t('restricted_area')}
			/>
		</>
	);
};

export default SideBarkLink;
