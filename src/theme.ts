import { type GlobalThemeOverrides } from 'naive-ui'

/**
  --tf-c-white: #f2f4f3;
  --tf-c-white-200: #d3d9d6;
  --tf-c-white-400: #b0bfb8;

  --tf-c-black: #03191e;
  --tf-c-white-1900: #2e3833;
  --tf-c-white-2100: #1c221f;
  --tf-c-accent: #ec9a29;
  --tf-c-secondary: #4c956c;
  --tf-c-ternary: #553e4e;
 */

export const lightTheme: GlobalThemeOverrides = {
  common: {
    bodyColor: '#f2f4f3',
    baseColor: '#f2f4f3',
    primaryColor: '#ec9a29',
    textColorBase: '##03191e',
    hoverColor: '#F0B056',
    primaryColorHover: '#BC7410',
  },
}

export const darkTheme: GlobalThemeOverrides = {
  common: {
    bodyColor: '#1c221f',
    primaryColor: '#ec9a29',
    cardColor: '#1c221f',
    textColor1: '#f2f4f3',
    textColor2: '#f2f4f3',
    textColor3: '#f2f4f3',
    hoverColor: '#b0bfb8',
    primaryColorHover: '#d3d9d6',
    fontSize: '16px',
    fontFamily: 'Lato',
  },
}

export default lightTheme
