import { BACKGROUND_COLOR_HOVER, MAIN_COLOR } from '@common/constant';
import { IconButton, MenuItem, Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)(() => ({
  cursor: 'pointer',
}));

export const NavbarWrapper = styled(Stack)(() => ({
  backgroundColor: MAIN_COLOR,
}));

export const NavItem = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  textDecoration: 'none',
  padding: theme.spacing(2, 4),
  borderRadius: 4,
  color: 'black',

  '&:hover': {
    backgroundColor: BACKGROUND_COLOR_HOVER,
  },
}));

export const MenuLink = styled(Link)(({ theme: { spacing } }) => ({
  cursor: 'pointer',
  textDecoration: 'none',
  padding: spacing(1, 2),
  color: 'black',
}));

export const IconCursor = styled(IconButton)(() => ({
  cursor: 'pointer',
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(2, 10, 2, 2),
}));
