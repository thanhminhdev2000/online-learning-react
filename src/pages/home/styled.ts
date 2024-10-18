import { Box } from '@mui/material';
import styled from 'styled-components';

export const Background = styled(Box)(() => ({
  backgroundImage: 'url("/home-background.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '100vh',
}));
