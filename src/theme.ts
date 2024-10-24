import { Box, createTheme, styled } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
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
    MuiOutlinedInput: {
      styleOverrides: {
        inputSizeSmall: {
          padding: '6px 12px',
        },
      },
    },
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
        head: {
          padding: '8px 6px',
        },
        body: {
          padding: '2px 6px',
        },
      },
    },
  },
});

export const Container = styled(Box)(() => ({
  minHeight: '100vh',
  backgroundColor: '#f9f9f9',
}));
