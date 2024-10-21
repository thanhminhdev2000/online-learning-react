import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { BoxContainer } from '@pages/authentication/users/userProfile/styled';

const UserProfile = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" width="60%" marginTop={4} gap={2}>
        <BoxContainer width="25%">
          <Typography variant="h6">CÀI ĐẶT</Typography>
          <Typography variant="body1">Hồ sơ</Typography>
          <Typography variant="body1">Ảnh đại diện</Typography>
          <Typography variant="body1">Mật khẩu</Typography>
          <Typography variant="body1">Email</Typography>
        </BoxContainer>

        <BoxContainer width="75%">
          <Typography variant="h6">CHỈNH SỬA HỒ SƠ CỦA BẠN</Typography>
          <Typography variant="subtitle1">Thông tin cơ bản</Typography>
          <Typography variant="body2" color="textSecondary">
            Giới thiệu để mọi người hiểu thêm về bạn. Một số thông tin sẽ được hiển thị công khai.
          </Typography>

          <Box display="flex" gap={2}>
            <TextField label="Tên hiển thị" fullWidth value="thanhminh05" />
            <TextField label="Ngày sinh" fullWidth value="21/10/2024" InputProps={{ readOnly: true }} />
          </Box>

          <Select value="Không xác định">
            <MenuItem value="Nam">Nam</MenuItem>
            <MenuItem value="Nữ">Nữ</MenuItem>
            <MenuItem value="Không xác định">Không xác định</MenuItem>
          </Select>

          <TextField label="Nghề nghiệp" fullWidth multiline rows={2} placeholder="..." />
          <TextField label="Kỹ năng chuyên môn" fullWidth multiline rows={2} placeholder="..." />

          <Box display="flex" justifyContent="flex-end" marginTop={4}>
            <Button>Lưu thay đổi</Button>
          </Box>
        </BoxContainer>
      </Box>
    </Box>
  );
};

export default UserProfile;
