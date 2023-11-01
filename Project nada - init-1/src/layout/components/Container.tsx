import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { LayoutType } from 'types';
import { scrollbarStyle } from 'utils/constant';

const Container = ({
	layoutType,
}: {
	layoutType?: LayoutType.ADMIN | LayoutType.PUBLIC | LayoutType.TRAINEE;
}): JSX.Element => {
	const { i18n } = useTranslation();
	return (
		<Box
			width={'100%'}
			p={2}
			mt='8rem'
			mb='1rem'
			flex={1}
			bg={layoutType === LayoutType.ADMIN ? 'white' : 'transparent'}
			maxW='100%'
			overflowY={'auto'}
			overflowX={'hidden'}
			dir={i18n.dir()}
			sx={scrollbarStyle}
			borderBottomRadius={10}>
			<Outlet />
		</Box>
	);
};

export default Container;
