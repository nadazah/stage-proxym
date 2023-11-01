import type { InitOptions } from 'i18next';
import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import * as resources from 'assets/locales';
import { Languages } from 'types';

const ns = Object.keys(Object.values(resources)[0]);
export const defaultNS = ns[0];

const config: InitOptions = {
	ns,
	defaultNS,
	resources: {
		...Object.entries(resources).reduce(
			(acc, [key, value]) => ({
				...acc,
				[key]: value,
			}),
			{},
		),
	},
	lng: i18n.dir('rtl') ? Languages.AR : Languages.EN,
	fallbackLng: Languages.EN,
	interpolation: {
		escapeValue: false,
	},
	compatibilityJSON: 'v3',
};

i18n.use(initReactI18next).init(config);

export default i18n;
