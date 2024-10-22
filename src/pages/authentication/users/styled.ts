import { Box, Paper, styled } from '@mui/material';

export const BoxContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  gap: 16,
  padding: 16,
  borderRadius: 16,
}));

export const PaperContainer = styled(Paper)(() => ({
  height: 150,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px dashed #ccc',
}));
