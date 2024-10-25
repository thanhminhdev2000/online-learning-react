import { MAIN_COLOR } from '@common/constant';
import { Box, Card, styled } from '@mui/material';

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

export const DocumentCard = styled(Card)(() => ({
  height: 220,
  position: 'relative',
  flex: '1 1 calc(25% - 16px)',
  minWidth: '250px',
  marginBottom: '16px',
  overflow: 'hidden',
  '&:hover .hover-content': {
    transform: 'translateY(0)',
  },
}));
