import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const LinkItem = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#2e69ff',

  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const AuthContainer = styled('form')(() => ({
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  maxWidth: '600px',
  minWidth: '400px',
  width: '100%',
}));
