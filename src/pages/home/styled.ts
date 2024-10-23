import { Stack, styled } from '@mui/material';

export const Background = styled(Stack)(() => ({
  backgroundImage: 'url("/home-background.png")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: 'calc(100vh - 48px)',
  flexDirection: 'column',
}));
