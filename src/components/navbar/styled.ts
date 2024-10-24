import { IconButton, MenuItem, Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)(() => ({
  cursor: 'pointer',
}));

export const NavbarWrapper = styled(Stack)(() => ({
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
}));

export const NavItem = styled(Link)(() => ({
  cursor: 'pointer',
  textDecoration: 'none',
  padding: '4px 8px',
  borderRadius: 4,
  color: '#000',

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
}));

export const MenuLink = styled(Link)(() => ({
  cursor: 'pointer',
  textDecoration: 'none',
  padding: '4px 8px',
  color: '#000',
}));

export const IconCursor = styled(IconButton)(() => ({
  cursor: 'pointer',
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1, 2),
}));
