import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import RouteApp from '../route';
import { theme } from '../../constants/theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteApp />
      </ThemeProvider>
  );
}

export default App;