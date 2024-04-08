
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { store } from './store';
import FormPage from './components/pages/DayTwo';
import Second from './components/pages/About';
import DemoPage from './components/pages/ThirdPage';

const theme = createTheme();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" Component={DemoPage} />
            <Route path="/about" Component={Second} />
           
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

