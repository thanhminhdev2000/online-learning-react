import { Paper, styled } from '@mui/material';

export const PaperContainer = styled(Paper)(() => ({
  height: 150,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px dashed #ccc',
}));
