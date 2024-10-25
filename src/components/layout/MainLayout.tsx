import { Background } from '@components/layout/styled';
import Navbar from '@components/navbar';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Box width="100vw" height="100vh">
      <Navbar />
      <Background alignItems="center">
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Background>
    </Box>
  );
};

export default MainLayout;
