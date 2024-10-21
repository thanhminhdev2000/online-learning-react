import { useLogin } from '@apis/hooks/authentication.hook';
import CInput from '@components/cInput';
import { AuthContainer, ItemCenter, TypographyLink } from '@components/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { errorMsg } from '@utils/index';

import useAuthStore from '@store/authStore';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, errorMsg('Email hoặc Username'))
    .min(6, errorMsg('Email hoặc Username', 'tối thiếu có 6 kí tự')),
  password: z.string().min(1, errorMsg('Mật khẩu')).min(6, errorMsg('Mật khẩu', 'tối thiếu có 6 kí tự')),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
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
        login(data.user, data.accessToken);
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
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          ĐĂNG NHẬP
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
            <TypographyLink onClick={() => navigate('/signup')}>Đăng ký!</TypographyLink>
          </Box>

          <TypographyLink onClick={() => navigate('/forgot-password')}>Quên mật khẩu?</TypographyLink>
        </Box>
      </AuthContainer>
    </ItemCenter>
  );
};

export default LoginPage;
