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
        <Stack flexDirection="column" width="80%" height="100%" justifyContent="center" color="white" paddingTop={6}>
          <Typography variant="h6" color="#f05622" fontWeight="bold">
            KHÓA HỌC
          </Typography>

          <Typography variant="h3" fontWeight="700" gutterBottom>
            Thư viện khóa học lập trình
            <br />
            từ cơ bản đến nâng cao
          </Typography>

          <Typography variant="body1">
            Python? C++? C# hay Java?
            <br />
            Bạn lựa chọn ngôn ngữ nào để bắt đầu chặng đường trở thành lập trình viên của mình?
          </Typography>

          <Box width={200} marginTop={2}>
            <Button variant="contained" onClick={() => navigate('/learn')}>
              Học ngay
            </Button>
          </Box>
        </Stack>
      </Background>
    </>
  );
};

export default HomePage;
