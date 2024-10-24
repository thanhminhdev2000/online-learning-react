import { useResetPassword } from '@apis/hooks/authentication.hook';
import { AuthContainer, ItemCenter, TypographyLink } from '@common/styled';
import CInput from '@components/cInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { resetPasswordInit } from '@pages/authentication/constant';
import { resetPasswordSchema } from '@pages/authentication/type';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ResetPasswordPage = () => {
  const { token = '' } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    values: resetPasswordInit,
  });

  const { mutate } = useResetPassword({ token });

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
    <>
      <ItemCenter height="80vh">
        <AuthContainer onSubmit={onSubmit}>
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            ĐẶT LẠI MẬT KHẨU
          </Typography>

          <Stack flexDirection="column" gap={3} marginTop={3}>
            <CInput
              label="Mật khẩu"
              type="password"
              errorMsg={errors.password?.message}
              registerProps={register('password')}
            />
            <CInput
              label="Nhập lại mật khẩu"
              type="password"
              errorMsg={errors.confirmPassword?.message}
              registerProps={register('confirmPassword')}
            />
          </Stack>

          <Box marginTop={4}>
            <Button fullWidth variant="contained" type="submit">
              Xác nhận
            </Button>
          </Box>

          <Box marginTop={2}>
            <ItemCenter>
              <TypographyLink onClick={() => navigate('/signup')}>Đăng ký tài khoản mới!</TypographyLink>
            </ItemCenter>

            <ItemCenter>
              <TypographyLink onClick={() => navigate('/forgot-password')}>Quên mật khẩu?</TypographyLink>
            </ItemCenter>
          </Box>
        </AuthContainer>
      </ItemCenter>
    </>
  );
};

export default ResetPasswordPage;
