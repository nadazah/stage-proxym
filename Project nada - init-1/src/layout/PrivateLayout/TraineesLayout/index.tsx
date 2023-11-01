import { Flex, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Footer from 'layout/components/Footer';
import Header from 'layout/components/Header';
import Container from 'layout/components/Container';
import { LayoutType } from 'types';

const TraineesLayout = (): JSX.Element => {
	return (
		<Box h='100vh' minWidth='100%' bg='secondary.500'>
			<Flex
				as={motion.main}
				fontSize='xl'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 'ease-in-out' }}>
				<Flex
					flex='1'
					flexDirection='column'
					minHeight='100vh'
					gap='2rem'
					pb={10}
					maxW='100%'>
					<Header sideToggled={undefined} layoutType={LayoutType.TRAINEE} />
					<Container layoutType={LayoutType.TRAINEE} />
				</Flex>
				<Footer />
			</Flex>
		</Box>
	);
};

export default TraineesLayout;
