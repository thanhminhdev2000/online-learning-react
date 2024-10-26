import { MAIN_COLOR } from '@common/constant';
import { Box, styled } from '@mui/material';

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

export const DocumentListWrapper = styled(Box)(({ theme }) => ({
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
