import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import { deepPurple, red } from '@material-ui/core/colors'
import './App.css';
import Routes from './routes'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: red[900]
    },
    primary: {
      main: deepPurple[700]
    }
  },
});

const App: React.FunctionComponent = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
