import { Box, Flex, HStack, IconButton, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import type { FunctionComponent } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import UserAvatar from './components/UserAvatar';
import Notifications from './components/Notifications';
import SignButton from './components/SignButton';
import Language from './components/Language';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { boxShadow } from 'utils/constant';
import type { AppState } from 'app/store';
import { LayoutType } from 'types/enums/layoutType';
import { log } from 'console';
interface NavbarProps {
	toggleSideBar?: () => void;
	sideBarWidth?: number;
	sideToggled?: boolean;
	layoutType: LayoutType.ADMIN | LayoutType.PUBLIC | LayoutType.TRAINEE;
}

const Navbar: FunctionComponent<NavbarProps> = ({
	toggleSideBar,
	sideBarWidth = -5,
	sideToggled,
	layoutType,
}) => {
	const { i18n } = useTranslation('common');
	const [isNotLarge] = useMediaQuery('(max-width: 59.9em)');
	const _isAuthenticated = useSelector(
		(state: AppState) => state.auth.isAuthenticated,
	);
	
	return (
		<Box
			as={motion.div}
			position='fixed'
			top='0'
			right='0'
			zIndex={isNotLarge ? '89' : sideToggled ? '91' : '51'}
			bg={layoutType === LayoutType.ADMIN ? 'white' : 'transparent'}
			dir={i18n.dir()}
			backdropFilter='auto'
			backdropBlur='15px'
			borderBottom={
				layoutType === LayoutType.ADMIN ? '1px solid #C7C7D280' : 'none'
			}
			boxShadow={layoutType === LayoutType.ADMIN ? boxShadow : 'none'}
			borderRadius={7}
			transition={sideToggled ? '1s ease-in-out' : '10s ease-in-out'}
			w={{
				base: '100%',
				lg:
					layoutType === LayoutType.PUBLIC
						? '100%'
						: `calc(100% - ${sideBarWidth + 5}px)`,
			}}>
			<Flex
				alignItems='center'
				justifyContent={'space-between'}
				py='2rem'
				px='1rem'>
				{isNotLarge && layoutType !== LayoutType.PUBLIC && (
					<Flex alignItems='center'>
						<IconButton
							px={5}
							variant='iconButtonTransparent'
							bg='transparent'
							onClick={toggleSideBar}
							color='primary.500'
							fontSize='fs-25'
							icon={<HamburgerIcon />}
							aria-label={'menu-sidebar'}
						/>
					</Flex>
				)}
				<HStack
					gap='0.5rem'
					color='gray.500'
					alignItems='center'
					w='100%'
					justifyContent={{
						base: 'space-between',
						md: 'space-between',
						sm: 'flex-end',
					}}
					display={'flex'}>
					{!isNotLarge && <UserAvatar />}
					<HStack flex={1} h='30px' gap={5} w='100%' justifyContent='flex-end'>
						<Language i18n={i18n} />
						{/* {isMedium && <Search />} */}
						{/* <Divider borderColor='primary.500' orientation='vertical' /> */}
						<SignButton />
						{_isAuthenticated && <Notifications />}
						{isNotLarge && <UserAvatar i18n={i18n} />}
					</HStack>
				</HStack>
			</Flex>
		</Box>
	);
};

export default memo(Navbar);
