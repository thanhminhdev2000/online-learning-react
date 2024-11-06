import Navbar from '@components/navbar';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Background } from '@pages/home/styled';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Background alignItems="center">
        <Stack flexDirection="column" width="80%" height="100%" justifyContent="center" color="white" paddingTop={8}>
          <Typography variant="h6" fontWeight="bold" maxWidth={600}>
            NỀN TẢNG HỌC TRỰC TUYẾN SỐ 1 DÀNH CHO HỌC SINH PHỔ THÔNG VIỆT NAM
            <br />
          </Typography>

          <Typography maxWidth={500}>
            Từ cơ bản đến nâng cao
            <br />
            50.000+ học sinh đỗ thủ khoa, á khoa và đỗ vào các trường THCS, THPT, Đại học hàng đầu cả nước
          </Typography>

          <Box marginTop={4}>
            <Button variant="contained" onClick={() => navigate('/courses')}>
              Học ngay
            </Button>
          </Box>
        </Stack>
      </Background>
    </>
  );
};

export default HomePage;
