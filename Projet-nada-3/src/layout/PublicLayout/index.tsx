import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Footer from 'layout/components/Footer';
import Header from 'layout/components/Header';
import Container from 'layout/components/Container';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import type { AppState } from 'app/store';
import { LayoutType } from 'types';

const PublicLayout = (): JSX.Element => {
	const isGuest = useSelector((state: AppState) => state.auth.isGuest);
	const { pathname } = useLocation();
	return isGuest && !pathname?.includes('login') ? (
		<Flex
			as={motion.main}
			fontSize='xl'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 'ease-in-out' }}
			bg={'secondary.500'}>
			<Flex
				flex='1'
				flexDirection='column'
				minHeight='100vh'
				gap='2rem'
				maxW='100%'>
				<Header sideBarWidth={0} layoutType={LayoutType.PUBLIC} />
				<Container />
			</Flex>
			<Footer />
		</Flex>
	) : (
		<motion.main
			style={{
				height: '100vh',
			}}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}>
			<Outlet />
		</motion.main>
	);
};

export default PublicLayout;
