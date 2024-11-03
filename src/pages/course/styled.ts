import { styled } from '@mui/material';

export const ImageStyled = styled('img')(({ theme }) => ({
  width: '100%',
  height: 120,

  [theme.breakpoints.up('sm')]: {
    height: 160,
  },

  [theme.breakpoints.up('md')]: {
    height: 200,
  },
}));
