import { useLogin } from '@apis/hooks/authentication.hook';
import CInput from '@components/cInput';
import { AuthContainer, ItemCenter, LinkItem } from '@components/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { loginSchema } from '@pages/authentication/login/type';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    values: {
      identifier: '',
      password: '',
    },
  });

  const { mutate } = useLogin();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess(data) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('accessToken', data.accessToken);
        navigate('/');
      },
      onError(data) {
        setError('password', { message: data.error });
      },
    });
  });

  return (
    <ItemCenter height="80vh">
      <AuthContainer onSubmit={onSubmit}>
        <Typography variant="h4" textAlign="center">
          Đăng nhập
        </Typography>

        <Stack flexDirection="column" gap={3} marginTop={3}>
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
            <LinkItem to="/forgot-password" color="primary">
              Quên mật khẩu?
            </LinkItem>
          </Typography>
        </Box>
      </AuthContainer>
    </ItemCenter>
  );
};

export default LoginPage;
