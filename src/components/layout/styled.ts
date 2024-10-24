import { Paper, Stack, styled } from '@mui/material';

export const Background = styled(Stack)(() => ({
  flexDirection: 'column',
  backgroundColor: '#f0f0f0',
  minHeight: '100vh',
  width: '100%',
}));

export const ModalWrapper = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  minWidth: 350,
  bgcolor: '#fff',
  padding: theme.spacing(4),
  border: 'none',
  outline: 'none',
}));
