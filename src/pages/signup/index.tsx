import CInput from '@components/cInput';
import { AuthContainer, LinkItem } from '@components/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { signUpInit } from '@pages/signup/constant';
import { signUpSchema } from '@pages/signup/type';
import { useForm } from 'react-hook-form';

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    values: signUpInit,
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Stack alignItems="center" justifyContent="center" height="80vh">
      <AuthContainer onSubmit={onSubmit}>
        <Typography variant="h4" textAlign="center">
          Đăng ký
        </Typography>

        <Stack gap={3} marginTop={3}>
          <CInput label="Email" errorMsg={errors.email?.message} registerProps={register('email')} />
          <CInput label="Username" errorMsg={errors.username?.message} registerProps={register('username')} />
          <CInput label="Họ và tên" errorMsg={errors.fullName?.message} registerProps={register('fullName')} />
          <CInput
            label="Mật khẩu"
            type="password"
            errorMsg={errors.password?.message}
            registerProps={register('password')}
          />
          <CInput
            label="Nhập lại mật khẩu"
            type="password"
            errorMsg={errors.retypePassword?.message}
            registerProps={register('retypePassword')}
          />
        </Stack>

        <Box marginTop={4}>
          <Button fullWidth variant="contained" type="submit">
            Đăng nhập
          </Button>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" marginTop={2} gap={1}>
            <Typography>Bạn đã có tài khoản?</Typography>
            <LinkItem to="/login" color="primary">
              Đăng nhập!
            </LinkItem>
          </Box>

          <Typography>
            <LinkItem to="/reset-password" color="primary">
              Quên mật khẩu?
            </LinkItem>
          </Typography>
        </Box>
      </AuthContainer>
    </Stack>
  );
};

export default SignUpPage;
