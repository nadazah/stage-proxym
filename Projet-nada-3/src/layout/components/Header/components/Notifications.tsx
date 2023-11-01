import { useState } from 'react';
import {
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import { Icon } from 'components/Icon';
import NotificationItem from './NotificationItem';
import { hexToRGB } from 'theme/colors';
import { borderRadius } from 'utils/constant';

const Notifications = (): JSX.Element => {
	const [notifyBadge, displayNotifyBadge] = useState(true);

	function clearNotifications(): void {
		displayNotifyBadge(false);
	}

	return (
		<Box h='35px' position={'relative'}>
			<Menu onClose={clearNotifications}>
				<MenuButton
					borderRadius={borderRadius}
					_hover={{ bg: hexToRGB('primary', 0.2) }}>
					<Box
						h='35px'
						pr='2'
						pl='2'
						borderRadius={borderRadius}
						display='flex'
						alignItems='center'
						bg='transparent'
						position={'relative'}>
						<Icon displayName='notification' color='primary.500' />
						{notifyBadge && (
							<Box
								w='7px'
								h='7px'
								position='absolute'
								right='9px'
								top='4px'
								bg='red'
								boxShadow={'0px 2px 2px rgba(206, 14, 45, 0.1)'}
								borderRadius='full'
							/>
						)}
					</Box>
				</MenuButton>
				<MenuList p='16px 8px'>
					<Flex flexDirection='column'>
						<MenuItem
							_hover={{ bg: 'gray.10' }}
							borderRadius='8px'
							mb='10px'
							bg={notifyBadge ? 'gray.10' : 'none'}>
							<NotificationItem
								time='13 minutes ago'
								info='from Alicia'
								boldInfo='New Message'
								aName='Alicia'
								aSrc='https://api.dicebear.com/5.x/avataaars/svg?seed=Toby'
							/>
						</MenuItem>
						<MenuItem
							_hover={{ bg: 'gray.10' }}
							borderRadius='8px'
							mb='10px'
							bg={notifyBadge ? 'gray.10' : 'none'}>
							<NotificationItem
								time='2 days ago'
								info='by Josh Henry'
								boldInfo='New Album'
								aName='Josh Henry'
								aSrc='https://api.dicebear.com/5.x/avataaars/svg?seed=Moby'
							/>
						</MenuItem>
						<MenuItem _hover={{ bg: 'gray.10' }} borderRadius='8px' bg='none'>
							<NotificationItem
								time='3 days ago'
								info='Payment succesfully completed!'
								boldInfo=''
								aName='Kara'
								aSrc='https://api.dicebear.com/5.x/avataaars/svg?seed=Foby'
							/>
						</MenuItem>
					</Flex>
				</MenuList>
			</Menu>
		</Box>
	);
};

export default Notifications;
