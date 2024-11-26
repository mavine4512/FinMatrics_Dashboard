import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  Theme,
} from '@material-ui/core';

export const primaryColor = {
  borderGray: '#e3e3e3',
  danger: '#C70039',
  lightBlue: '#0170BD',
  lightGray: '#ededed',
};

export const primaryFonts = {
  sourceSansPro: 'Source Sans Pro',
  rubik: 'Rubik',
};

export const theme: Theme = createMuiTheme({
  palette: {},
  typography: {
    button: {
      textTransform: 'uppercase',
    },
  },
});