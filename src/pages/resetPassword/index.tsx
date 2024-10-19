import CInput from '@components/cInput';
import { AuthContainer, LinkItem } from '@components/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { resetPasswordSchema } from '@pages/resetPassword/type';
import { useForm } from 'react-hook-form';

const ResetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    values: {
      password: '',
      retypePassword: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <Stack alignItems="center" justifyContent="center" height="80vh">
        <AuthContainer onSubmit={onSubmit}>
          <Typography variant="h4" textAlign="center">
            Đặt lại mật khẩu
          </Typography>

          <Stack gap={3} marginTop={3}>
            <CInput label="Mật khẩu" errorMsg={errors.password?.message} registerProps={register('password')} />
            <CInput
              label="Nhập lại mật khẩu"
              errorMsg={errors.retypePassword?.message}
              registerProps={register('retypePassword')}
            />
          </Stack>

          <Box marginTop={4}>
            <Button fullWidth variant="contained" type="submit">
              Xác nhận
            </Button>
          </Box>

          <Box display="flex" alignItems="center" justifyContent="space-between" marginTop={1}>
            <LinkItem to="/signup" color="primary">
              Đăng ký tài khoản mới!
            </LinkItem>

            <LinkItem to="/forgot-password" color="primary">
              Quên mật khẩu?
            </LinkItem>
          </Box>
        </AuthContainer>
      </Stack>
    </>
  );
};

export default ResetPasswordPage;
