import { Background } from '@components/layout/styled';
import Navbar from '@components/navbar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Background alignItems="center">
      <Box width="90%">
        <Navbar />
        <Outlet />
      </Box>
    </Background>
  );
};

export default Layout;
