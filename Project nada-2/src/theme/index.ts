import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';
import { breakpoints } from './foundations/breakpoints';
import { buttonStyles } from './components/button';
import { fontSizes } from './foundations/fontSize';
import { customFonts } from './fonts';
import { textStyles } from './components/text';
import { tooltipStyles } from './components/tooltip';
import { CardBodyComponent } from './additions/card/CardBody';
import { CardHeaderComponent } from './additions/card/CardHeader';
import { CardComponent } from './additions/card/Card';
import { tagStyles } from './components/tag';
import { badgeStyles } from './components/badge';
import { CardFooterComponent } from './additions/card/CardFooter';
import { inputStyles } from './components/Input';
import { checkboxStyles } from './components/checkbox';
import { radioStyles } from './components/radio';
import { ModalComponent } from './additions/modal/Modal';
import { toastStyles } from './components/toast';
import { accordionStyles } from './components/accordion';

const theme = (dir?: string): Record<string, any> => {
	return extendTheme(
		{ direction: dir },
		{ breakpoints }, // Breakpoints
		{
			fontSizes,
		},
		{
			fonts: customFonts,
		},
		globalStyles,
		// components
		buttonStyles,
		textStyles,
		tooltipStyles,
		CardFooterComponent,
		CardHeaderComponent,
		CardComponent,
		CardBodyComponent,
		ModalComponent,
		tagStyles,
		badgeStyles,
		inputStyles,
		checkboxStyles,
		radioStyles,
		toastStyles,
		accordionStyles,
	);
};

export default theme;
