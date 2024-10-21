import { UserDetailDto } from '@apis/generated/data-contracts';
import CInput from '@components/cInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { genderOptions } from '@pages/authentication/users/constant';
import { userProfileSchema } from '@pages/authentication/users/type';
import { useForm } from 'react-hook-form';

const UserProfile = () => {
  const user: UserDetailDto = JSON.parse(localStorage.getItem('user') as string);

  const { register } = useForm({
    resolver: zodResolver(userProfileSchema),
    values: {
      email: user.email,
      username: user.username,
      fullName: user.fullName,
    },
  });

  return (
    <Stack flexDirection="column" gap={2}>
      <Typography variant="subtitle1">Thông tin cơ bản</Typography>
      <Typography variant="body2" color="textSecondary">
        Giới thiệu để mọi người hiểu thêm về bạn. Một số thông tin sẽ được hiển thị công khai.
      </Typography>

      <CInput label="Tên hiển thị" registerProps={register('email')} />
      <CInput label="Giới tính" type="select" selectOptions={genderOptions} registerProps={register('email')} />

      <TextField label="Nghề nghiệp" fullWidth multiline rows={2} placeholder="..." />
      <TextField label="Kỹ năng chuyên môn" fullWidth multiline rows={2} placeholder="..." />

      <Box display="flex" justifyContent="flex-end" marginTop={4}>
        <Button>Lưu thay đổi</Button>
      </Box>
    </Stack>
  );
};

export default UserProfile;
