/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import SideBarkLink from './SideBarkLink';
// import Logo from 'assets/images/logo.png';
import { motion } from 'framer-motion';
import routes from './sidebarRoutes';
import CloseIcon from './CloseIcon';
import useSideBarStyle from 'hooks/useSideBarStyle';
import pxLogo from 'assets/svg/px_logo.svg';
import { getColor } from 'theme/colors';

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};
interface SideBarProps {
	sideToggled: boolean;
	toggleSideBar: () => void;
}

const SideBar: React.FunctionComponent<SideBarProps> = ({
	sideToggled,
	toggleSideBar,
}) => {
	const { toggledSideBarStyle } = useSideBarStyle({
		sideToggled,
	});

	return (
		<Box
			as={motion.div}
			initial={false}
			animate={sideToggled ? 'open' : 'closed'}
			style={{
				background: `linear-gradient(to bottom, ${getColor(
					'primary',
					200,
				)},  ${getColor('primary', 900)})`,
				height: '100%',
			}}
			{...toggledSideBarStyle}>
			<Flex justifyContent='center' w='full' alignItems='center' gap='2rem'>
				{sideToggled && <Image w={60} src={pxLogo} />}
				<CloseIcon sideToggled={sideToggled} toggleSideBar={toggleSideBar} />
			</Flex>
			<Flex
				as={motion.div}
				variants={variants}
				direction='column'
				mt={!sideToggled ? '3rem' : '0'}
				py='1rem'>
				{routes.map((route, index: number) => (
					<SideBarkLink
						key={'route' + index}
						{...route}
						sideToggled={sideToggled}
					/>
				))}
			</Flex>
		</Box>
	);
};

export default SideBar;
/* routes.map((route, index: number) => (
          <SideBarkLink
            key={'route' + index}
            {...route}
            sideToggled={sideToggled}
          />
        )) */
