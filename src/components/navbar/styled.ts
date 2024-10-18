import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled(Link)(() => ({
  cursor: 'pointer',
}));

export const NavItem = styled(Link)(() => ({
  cursor: 'pointer',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
}));
