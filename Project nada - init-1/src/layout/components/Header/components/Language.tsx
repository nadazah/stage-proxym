import { memo } from 'react';
import Select from 'components/Select';
import { Box } from '@chakra-ui/react';
import { withTranslation } from 'react-i18next';
import { setCookie } from 'utils/functions';
import type { WithTranslation } from 'react-i18next';
import { Languages } from 'types';

interface ILanguage {
	label: string;
	value: string;
}

const Language = ({
	i18n,
}: {
	i18n: WithTranslation<'common'>['i18n'];
}): JSX.Element => {
	function changeLanguage(lang: ILanguage): void {
		setCookie('lang', lang?.value);
		i18n.changeLanguage(lang?.value);
	}
	return (
		<Box>
			<Select
				defaultValue={i18n.language}
				options={[
					{ label: 'English', value: Languages.EN },
					{ label: 'العربية', value: Languages.AR },
				]}
				onChange={(lang: any): void => {
					changeLanguage(lang);
				}}
			/>
		</Box>
	);
};

export default withTranslation()(memo(Language));
