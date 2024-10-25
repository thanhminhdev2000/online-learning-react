import { useLogin } from '@apis/hooks/authentication.hook';
import CInput from '@components/cInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { AuthContainer, ItemCenter, TypographyLink } from '../../../common/styled';

import { HEADER_HEIGHT } from '@common/constant';
import { loginInit } from '@pages/authentication/constant';
import { loginSchema } from '@pages/authentication/type';
import useAuthStore from '@store/authStore';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, setToken } = useAuthStore();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    values: loginInit,
  });

  const { mutate } = useLogin();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess(data) {
        login(data.user);
        setToken(data.accessToken, data.expiresIn);
        navigate('/');
      },
      onError(data) {
        setError('password', { message: data.error });
      },
    });
  });

  return (
    <ItemCenter height={`calc(100vh - ${HEADER_HEIGHT}px)`}>
      <AuthContainer onSubmit={onSubmit}>
        <Typography variant="h6" fontWeight="bold" textAlign="center">
          ĐĂNG NHẬP
        </Typography>

        <Stack flexDirection="column" gap={3} marginTop={4}>
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

        <Box marginTop={4}>
          <ItemCenter gap={1}>
            <Typography>Bạn chưa có tài khoản?</Typography>
            <TypographyLink onClick={() => navigate('/signup')}>Đăng ký!</TypographyLink>
          </ItemCenter>

          <ItemCenter>
            <TypographyLink onClick={() => navigate('/forgot-password')}>Quên mật khẩu?</TypographyLink>
          </ItemCenter>
        </Box>
      </AuthContainer>
    </ItemCenter>
  );
};

export default LoginPage;
