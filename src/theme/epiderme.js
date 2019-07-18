import { createMuiTheme } from '@material-ui/core/styles';

const epidermeTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#49acef',
      main: '#1C98EB',
      dark: '#136aa4',
      contrastText: '#fff',
    },
    secondary: {
      dark: '#00936d',
      main: '#00d39c',
      light: '#33dbaf',
      contrastText: '#fff',
    }
  },
});

export default epidermeTheme;