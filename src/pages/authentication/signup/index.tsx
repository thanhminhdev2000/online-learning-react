import { useCreateUser } from '@apis/hooks/user.hook';
import CInput from '@components/cInput';
import { AuthContainer, ItemCenter, TypographyLink } from '@components/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { signUpInit } from '@pages/authentication/signup/constant';
import { signUpSchema } from '@pages/authentication/signup/type';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    values: signUpInit,
  });
  const { mutate } = useCreateUser();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess(data) {
        toast.success(data.message);
        navigate('/login');
      },
      onError(data) {
        toast.error(data.error);
      },
    });
  });

  return (
    <ItemCenter height="80vh">
      <AuthContainer onSubmit={onSubmit}>
        <Typography variant="h4" textAlign="center">
          Đăng ký
        </Typography>

        <Stack flexDirection="column" gap={3} marginTop={3}>
          <CInput label="Email" errorMsg={errors.email?.message} registerProps={register('email')} />
          <CInput label="Username" errorMsg={errors.username?.message} registerProps={register('username')} />
          <CInput label="Họ và tên" errorMsg={errors.fullName?.message} registerProps={register('fullName')} />
          <CInput
            label="Mật khẩu"
            textFiledType="password"
            errorMsg={errors.password?.message}
            registerProps={register('password')}
          />
          <CInput
            label="Nhập lại mật khẩu"
            textFiledType="password"
            errorMsg={errors.retypePassword?.message}
            registerProps={register('retypePassword')}
          />
        </Stack>

        <Box marginTop={4}>
          <Button fullWidth variant="contained" type="submit">
            Đăng ký
          </Button>
        </Box>

        <Typography marginTop={1} color="textSecondary">
          Khi đăng ký, bạn đã đồng ý với Điều khoản sử dụng và Chính sách bảo mật của chúng tôi.
        </Typography>

        <Stack alignItems="center" justifyContent="space-between">
          <Box display="flex" marginTop={2} gap={1}>
            <Typography>Bạn đã có tài khoản?</Typography>
            <TypographyLink onClick={() => navigate('/login')}>Đăng nhập!</TypographyLink>
          </Box>

          <TypographyLink onClick={() => navigate('/forgot-password')}>Quên mật khẩu?</TypographyLink>
        </Stack>
      </AuthContainer>
    </ItemCenter>
  );
};

export default SignUpPage;
