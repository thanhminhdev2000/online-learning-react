import { BACKGROUND_COLOR_HOVER, MAIN_COLOR } from '@common/constant';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box, Card, ListItem, styled } from '@mui/material';

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
  right: 0,
  ':hover': {
    backgroundColor: BACKGROUND_COLOR_HOVER,
  },
}));

export const EditIconStyled = styled(EditOutlinedIcon)(() => ({
  position: 'absolute',
  top: 30,
  right: 0,
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
