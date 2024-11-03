import { BACKGROUND_COLOR_HOVER, MAIN_COLOR } from '@common/constant';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box, Card, FormLabel, ListItem, Stack, styled, Typography } from '@mui/material';

export const AuthContainer = styled('form')(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(4),
  borderRadius: '8px',
  boxShadow: `0px 4px 12px ${BACKGROUND_COLOR_HOVER}`,
  backgroundColor: 'white',
  maxWidth: '600px',
  width: '100%',

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

  '&:hover': {
    backgroundColor: BACKGROUND_COLOR_HOVER,
    cursor: 'pointer',
  },
}));

export const TypographyLink = styled(Typography)(() => ({
  cursor: 'pointer',
  color: '#2e69ff',
}));

export const OverflowMultiLine = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'lines',
})<{ lines?: number }>(({ lines = 1 }) => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: lines,
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
  alignItems: 'center',
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

export const HoverBox = styled(Box)(() => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: MAIN_COLOR,
  color: 'white',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: 95,
  transform: 'translateY(100%)',
  transition: 'transform 0.3s ease-in-out',
}));

export const MaxFourElement = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1,1fr)',
  gap: theme.spacing(4),
  marginTop: theme.spacing(5),

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2,1fr)',
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4,1fr)',
  },
}));

export const MaxTwoElement = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1,1fr)',
  gap: theme.spacing(4),
  marginTop: theme.spacing(5),

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2,1fr)',
  },
}));

export const CardStyled = styled(Card)(() => ({
  height: 220,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
}));

export const DeleteIconStyled = styled(DeleteOutlineIcon)(() => ({
  position: 'absolute',
  top: 5,
  right: 5,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: BACKGROUND_COLOR_HOVER,
  },
}));

export const EditIconStyled = styled(EditOutlinedIcon)(() => ({
  position: 'absolute',
  top: 30,
  right: 5,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: BACKGROUND_COLOR_HOVER,
  },
}));

export const ListItemStyled = styled(ListItem)(() => ({
  backgroundColor: MAIN_COLOR,
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
}));

export const ImageStyled = styled('img')(() => ({
  width: '100%',
  height: '320px',
  objectFit: 'cover',
}));
