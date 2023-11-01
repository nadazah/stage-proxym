import {
	Flex,
	useMediaQuery,
	Container as ChakraContainer,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Header from 'layout/components/Header';
import useSideBarStyle from 'hooks/useSideBarStyle';
import useToggleSideBar from 'hooks/useToggleSideBar';
import Container from 'layout/components/Container';
import Backdrop from 'layout/components/Backdrop';
import SideBar from 'layout/components/Sidebar/SideBar';
import { LayoutType } from 'types/enums/layoutType';

const ManagementLayout = (): JSX.Element => {
	const { toggleSideBar, closeSidebar, sideToggled, openSideBar } =
		useToggleSideBar();
	const { toggledLayoutStyle } = useSideBarStyle({ sideToggled });
	const [isLarge] = useMediaQuery('(max-width: 59.9em)');

	return (
		<ChakraContainer h='100vh' minWidth='100%'>
			<Flex
				as={motion.main}
				fontSize='xl'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 'ease-in-out' }}>
				<SideBar toggleSideBar={toggleSideBar} sideToggled={sideToggled} />
				{sideToggled && isLarge && <Backdrop closeSidebar={closeSidebar} />}
				<Flex
					flex='1'
					flexDirection='column'
					minHeight='100vh'
					gap='2rem'
					{...toggledLayoutStyle}
					maxW='100%'>
					<Header
						toggleSideBar={openSideBar}
						sideBarWidth={sideToggled ? 280 : 97}
						sideToggled={sideToggled}
						layoutType={LayoutType.ADMIN}
					/>
					<Container />
				</Flex>
			</Flex>
		</ChakraContainer>
	);
};

export default ManagementLayout;
