import { BACKGROUND_COLOR_HOVER } from '@common/constant';
import { Box, FormLabel, Stack, styled, Typography } from '@mui/material';

export const AuthContainer = styled('form')(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '8px',
  boxShadow: `0px 4px 12px ${BACKGROUND_COLOR_HOVER}`,
  backgroundColor: 'white',
  minWidth: '600px',

  [theme.breakpoints.down('xs')]: {
    padding: 8,
  },
}));

export const BoxContainer = styled(Box)(({ theme: { spacing } }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  gap: spacing(4),
  padding: spacing(4),
  borderRadius: spacing(4),
}));

export const TypographyHover = styled(Typography)(({ theme: { spacing } }) => ({
  padding: spacing(1, 2),
  borderRadius: spacing(2),
  textTransform: 'uppercase',

  '&:hover': {
    backgroundColor: BACKGROUND_COLOR_HOVER,
    cursor: 'pointer',
  },
}));

export const TypographyLink = styled(Typography)(() => ({
  cursor: 'pointer',
  color: '#2e69ff',
}));

export const OverflowMultiLine = styled(Typography)(() => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
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
