/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { UseToastOptions, ToastId } from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { ToastPosition, ToastStatus } from 'types/models/toast';
import i18n from 'i18next';

const DEFAULT_TOAST_DURATION = 3000;
const defaultOptions = {
	position: ToastPosition.TOP,
	status: ToastStatus.ERROR,
	duration: DEFAULT_TOAST_DURATION,
	isClosable: true,
} as const;

let currentToast: ToastId | undefined;

// Maybe refactor later
const getToastUtils = () => {
	const id = Math.random();
	return { id };
};

const getToastStatusColor = (status: string): string =>
	status === ToastStatus.ERROR
		? 'error'
		: status === ToastStatus.WARN
		? 'warning'
		: status === ToastStatus.INFO
		? 'info'
		: 'success';

const CreateOutsideToast = ({
	description,
	title = 'Error',
	status = ToastStatus.ERROR,
	...options
}: UseToastOptions) => {
	const { toast } = createStandaloneToast();
	const { id } = getToastUtils();

	if (currentToast) {
		toast.close(currentToast);
	}

	currentToast = toast({
		...defaultOptions,
		...options,
		description: <Description description={description} />,
		title,
		status,
		id,
		variant: getToastStatusColor(status),
	});
};
const Description = ({ description }: any) => {
	const { t } = useTranslation();
	let translatedDescription;

	if (description && typeof description === 'string') {
		translatedDescription = t(description);
	} else {
		translatedDescription = description;
	}
	return <>{translatedDescription}</>;
};

export const notImplemented = () => {
	const description = i18n.t('COMMON.NOT_IMPLEMENTED');
	const title = i18n.t('COMMON.INFO');
	CreateOutsideToast({ description, title, status: ToastStatus.INFO });
};

export default CreateOutsideToast;
