import { Global } from '@emotion/react';
import AvenirRegular from 'assets/fonts/Avenir-Regular.ttf';
import AvenirBold from 'assets/fonts/Avenir-Bold.ttf';
import AvenirMedium from 'assets/fonts/Avenir-Medium.ttf';

export const customFonts = {
	heading: 'avenir-bold',
	body: 'avenir-regular, sans serif',
};

export const Fonts = (): JSX.Element => (
	<Global
		styles={`
      @font-face {
        font-family: 'avenir-regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('avenir-regular'), url(${AvenirRegular}) format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'avenir-bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('avenir-bold'),  url(${AvenirBold}) format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'avenir-medium';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: local('avenir-medium'),  url(${AvenirMedium}) format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
	/>
);
