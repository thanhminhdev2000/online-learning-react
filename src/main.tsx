import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './index.css';

const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    body1: {
      '@media (max-width:600px)': {
        fontSize: '13px',
      },
    },
  },
  components: {
    MuiStack: {
      defaultProps: {
        direction: 'row',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            fontSize: '13px',
            padding: '4px 8px',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 24,
          height: 24,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '0 6px',
        },
      },
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <ToastContainer autoClose={2000} pauseOnHover={false} hideProgressBar />
    </ThemeProvider>
  </StrictMode>,
);
