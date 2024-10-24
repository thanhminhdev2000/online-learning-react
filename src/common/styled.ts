import { Box, FormLabel, Stack, styled, Typography } from '@mui/material';

export const AuthContainer = styled('form')(({ theme }) => ({
  padding: 16,
  borderRadius: '8px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  maxWidth: '600px',
  minWidth: '300px',
  width: '100%',

  [theme.breakpoints.down('xs')]: {
    padding: 8,
  },
}));

export const BoxContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  gap: 16,
  padding: 8,
  borderRadius: 16,
}));

export const TypographyHover = styled(Typography)(() => ({
  padding: '8px 4px',
  borderRadius: 8,

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
}));

export const TypographyLink = styled(Typography)(() => ({
  cursor: 'pointer',
  color: '#2e69ff',
}));

export const CFormLabel = styled(FormLabel)(() => ({
  color: '#222c37',
}));

export const InputWrapper = styled(Box)(() => ({
  marginTop: 2,
  width: '100%',
}));

export const FormWrapper = styled(Stack)(() => ({
  flexDirection: 'column',
  width: '100%',
}));

export const ItemCenter = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
}));

export const SpaceBetween = styled(Stack)(() => ({
  justifyContent: 'space-between',
}));

export const JustifyCenter = styled(Stack)(() => ({
  justifyContent: 'center',
}));

export const AlignCenter = styled(Stack)(() => ({
  alignItems: 'center',
}));

export const FlexEnd = styled(Stack)(() => ({
  justifyContent: 'flex-end',
}));
