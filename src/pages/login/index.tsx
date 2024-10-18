import CInput from '@components/cInput';
import { AuthContainer, LinkItem } from '@components/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { loginSchema } from '@pages/login/type';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    values: {
      identifier: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  console.log(errors);

  return (
    <Stack alignItems="center" justifyContent="center" height="80vh">
      <AuthContainer onSubmit={onSubmit}>
        <Typography variant="h4" textAlign="center">
          Đăng nhập
        </Typography>

        <Stack gap={3} marginTop={3}>
          <CInput
            label="Email hoặc Username"
            errorMsg={errors.identifier?.message}
            registerProps={register('identifier')}
          />
          <CInput
            label="Mật khẩu"
            type="password"
            errorMsg={errors.password?.message}
            registerProps={register('password')}
          />
        </Stack>

        <Box marginTop={4}>
          <Button fullWidth variant="contained" type="submit">
            Đăng nhập
          </Button>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" marginTop={2} gap={1}>
            <Typography>Bạn chưa có tài khoản?</Typography>
            <LinkItem to="/signup" color="primary">
              Đăng ký!
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

export default LoginPage;
