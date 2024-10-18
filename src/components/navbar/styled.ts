import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(Link)(() => ({
  cursor: 'pointer',
  color: '#000',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
}));
