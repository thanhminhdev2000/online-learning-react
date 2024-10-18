import Navbar from '@components/navbar';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Background } from '@pages/home/styled';

const HomePage = () => {
  return (
    <Background alignItems="center">
      <Box width="90%">
        <Navbar page="HOME" />
      </Box>

      <Stack width="80%" height="100%" justifyContent="center" color="white">
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
          <Button variant="contained">Học ngay</Button>
        </Box>
      </Stack>
    </Background>
  );
};

export default HomePage;
