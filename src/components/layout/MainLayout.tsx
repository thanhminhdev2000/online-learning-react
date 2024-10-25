import { Background } from '@components/layout/styled';
import Navbar from '@components/navbar';
import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Background alignItems="center">
      <Box width="100%">
        <Navbar />
        <Stack flexDirection="column" alignItems="center">
          <Box width="90%">
            <Outlet />
          </Box>
        </Stack>
      </Box>
    </Background>
  );
};

export default MainLayout;
