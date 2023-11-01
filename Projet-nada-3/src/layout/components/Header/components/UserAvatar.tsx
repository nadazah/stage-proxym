import { Text, HStack, Image, useMediaQuery, Box } from '@chakra-ui/react';
import { memo } from 'react';
import { withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import type { WithTranslation } from 'react-i18next';
import type { AppState } from 'app/store';
import { motion } from 'framer-motion';

const AnimatedBox = motion(Box);

const UserAvatar = ({
	i18n,
}: {
	i18n: WithTranslation<'common'>['i18n'];
}): JSX.Element => {
	const [isNotLarge] = useMediaQuery('(max-width: 59.9em)');
	const _isAuthenticated = useSelector(
		(state: AppState) => state.auth.isAuthenticated,
	);
	return (
		<HStack>
			{_isAuthenticated && (
				<AnimatedBox
					w='58px'
					alignSelf='center'
					borderWidth={2}
					borderRadius={50}
					borderColor='primary.100'
					whileTap={{ scale: 0.9 }}>
					<Image
						src='https://api.dicebear.com/5.x/adventurer/svg?seed=Hachem'
						alt='avatar'
					/>
				</AnimatedBox>
			)}
			{!isNotLarge && (
				<HStack w='100%' alignItems='baseline'>
					{_isAuthenticated ? (
						<>
							<Text fontWeight={400} fontSize='fs-30'>
								{i18n.t('hello', { ns: 'common' })},
							</Text>
							<Text fontWeight={800} fontSize='fs-20'>
								Very Much Unknown
							</Text>
						</>
					) : (
						<>
							<Text fontWeight={800} fontSize='fs-30'>
								{i18n.t('welcome', { ns: 'common' })}
							</Text>
							<Text fontWeight={400} fontSize='fs-20'>
								{i18n.t('trainees_platform', { ns: 'common' })}
							</Text>
						</>
					)}
				</HStack>
			)}
		</HStack>
	);
};

export default withTranslation()(memo(UserAvatar));
