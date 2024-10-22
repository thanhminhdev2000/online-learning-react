import { Box, Divider, FormLabel, Stack, styled, Typography } from '@mui/material';

export const AuthContainer = styled('form')(() => ({
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  maxWidth: '600px',
  minWidth: '400px',
  width: '100%',
}));

export const HorizontalDivider = styled(Divider)(() => ({
  color: '#fff',
  margin: '5px 10px',
}));

export const ItemCenter = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
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

export const FlexEnd = styled(Stack)(() => ({
  justifyContent: 'flex-end',
}));
