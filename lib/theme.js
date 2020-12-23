import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const palette = {
    primary: {
        light: '#459675',
        main: '#0c6749',
        dark: '#003b21',
        contrastText: '#ffffff',
    },
    secondary: {
        light: '#45646f',
        main: '#1a3a44',
        dark: '#00151d',
        contrastText: '#ffffff',
    },
};

const theme = responsiveFontSizes(createMuiTheme({ palette }));

export default theme;
