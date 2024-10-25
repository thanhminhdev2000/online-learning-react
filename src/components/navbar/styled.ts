import { BACKGROUND_COLOR_HOVER } from '@common/constant';
import { IconButton, MenuItem, Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)(() => ({
  cursor: 'pointer',
}));

export const NavbarWrapper = styled(Stack)(() => ({
  justifyContent: 'center',
  backgroundColor: '#fff',
}));

export const NavItem = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  textDecoration: 'none',
  padding: theme.spacing(2, 4),
  borderRadius: 4,
  color: '#000',

  '&:hover': {
    backgroundColor: BACKGROUND_COLOR_HOVER,
  },
}));

export const MenuLink = styled(Link)(({ theme: { spacing } }) => ({
  cursor: 'pointer',
  textDecoration: 'none',
  padding: spacing(1, 2),
  color: '#000',
}));

export const IconCursor = styled(IconButton)(() => ({
  cursor: 'pointer',
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(2, 10, 2, 2),
}));
