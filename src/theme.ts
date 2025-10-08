import { type GlobalTheme, darkTheme as NDarkTheme } from 'naive-ui'

const COLORS = {
  DEFAULT_BG_BLUE: '#05057e',
  DEFAULT_ACCENT_ORANGE: '#ec9a29',
  DEFAULT_TEXT_COLOR: '#f2f4f3',
}

export const darkTheme: GlobalTheme = {
  name: 'darktheme',
  common: {
    ...NDarkTheme.common,
    baseColor: COLORS.DEFAULT_BG_BLUE,
    primaryColor: COLORS.DEFAULT_ACCENT_ORANGE,
    textColorBase: COLORS.DEFAULT_TEXT_COLOR,
    fontSize: '16px',
    fontFamily: 'Lato',
  },
}

export default darkTheme
