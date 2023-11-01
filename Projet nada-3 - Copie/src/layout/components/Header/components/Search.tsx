import { InputGroup, Input } from '@chakra-ui/react';
import { Icon } from 'components/Icon';
import { hexToRGB } from 'theme/colors';
import { borderRadius } from 'utils/constant';
import { useTranslation } from 'react-i18next';

const Search = (): JSX.Element => {
	const { t } = useTranslation('common');
	return (
		<InputGroup
			borderRadius={borderRadius}
			bg={hexToRGB('tertiary', 0.1)}
			p='2'
			display='flex'
			alignItems='center'
			pl={5}
			width={{ base: '10rem', md: '15rem', lg: '20rem' }}>
			<Icon displayName='search' color='primary.500' />
			<Input
				placeholder={t('search').toString()}
				_placeholder={{
					color: '#2C2C2C',
					opacity: 0.57,
				}}
				focusBorderColor='transparent'
				bg='transparent'
				border='none !important'
			/>
		</InputGroup>
	);
};

export default Search;
