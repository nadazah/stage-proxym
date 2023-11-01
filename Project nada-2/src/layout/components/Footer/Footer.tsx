// Core Imports
import { memo } from 'react';

// Theme Imports
import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

//Assets Imports

const Footer = (): JSX.Element => {
	const currentDate = new Date().getFullYear();
	return (
		<Flex
			as={motion.div}
			position='fixed'
			bottom='0'
			right='0'
			zIndex='9'
			transition='0.5s ease-in-out'
			w='100%'>
			<Flex
				gap={{ base: 5, lg: 20 }}
				justifyContent='center'
				alignItems='center'
				w='100%'
				p={3}>
				<Text fontWeight='bold' color='primary.500'>
					© {currentDate} Proxym Group®. All rights reserved.
				</Text>
			</Flex>
		</Flex>
	);
};

export default memo(Footer);
