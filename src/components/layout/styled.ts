import { Paper, Stack, styled } from '@mui/material';

export const Background = styled(Stack)(() => ({
  flexDirection: 'column',
  backgroundColor: '#f0f0f0',
  minHeight: '100vh',
  width: '100%',
}));

export const ModalWrapper = styled(Paper)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#fff',
  padding: 16,
  border: 'none',
  outline: 'none',
}));
