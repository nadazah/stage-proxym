import type { ReactNode } from 'react';

// Components Imports
import type { ModalProps } from '@chakra-ui/react';
import {
	Modal as ChakraModal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	SkeletonText,
	ModalFooter,
} from '@chakra-ui/react';
import { scrollbarStyle } from 'utils/constant';
import i18n from 'config/i18n';

// ----------------------------------------------------------------------

type CustomModalProps = Omit<ModalProps, 'children'> & {
	title: string | ReactNode;
	renderContent: ReactNode;
	isOpen: boolean;
	onClose: () => void;
	footerContent?: ReactNode;
	centerHeader?: boolean;
	centerFooter?: boolean;
	isLoading?: boolean;
};

const Modal: React.FC<CustomModalProps> = ({
	title,
	renderContent,
	footerContent,
	isOpen,
	centerHeader,
	centerFooter,
	onClose,
	isLoading = true,
	...props
}) => {
	return (
		<ChakraModal isCentered isOpen={isOpen} onClose={onClose} {...props}>
			<ModalOverlay />
			<ModalContent dir={i18n.dir()}>
				<ModalHeader textAlign={centerHeader ? 'center' : 'inherit'}>
					{isLoading ? <SkeletonText noOfLines={1} /> : title}
					{/* <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' /> */}
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody sx={scrollbarStyle}>
					{isLoading ? <SkeletonText /> : renderContent}
				</ModalBody>
				{footerContent && (
					<ModalFooter justifyContent={centerFooter ? 'center' : 'flex-end'}>
						{footerContent}
					</ModalFooter>
				)}
			</ModalContent>
		</ChakraModal>
	);
};

export default Modal;
