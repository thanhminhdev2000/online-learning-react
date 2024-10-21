import CInput from '@components/cInput';
import { AuthContainer, ItemCenter, TypographyLink } from '@components/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { errorMsg } from '@utils/index';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const resetPasswordSchema = z
  .object({
    password: z.string().min(1, errorMsg('Mật khẩu')),
    retypePassword: z.string().min(1, errorMsg('Mật khẩu')),
  })
  .refine((data) => data.password === data.retypePassword, {
    message: 'Mật khẩu không khớp',
    path: ['retypePassword'],
  });

const ResetPasswordPage = () => {
  const navigate = useNavigate();

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
      <ItemCenter height="80vh">
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
            <TypographyLink onClick={() => navigate('/signup')}>Đăng ký tài khoản mới!</TypographyLink>

            <TypographyLink onClick={() => navigate('/forgot-password')}>Quên mật khẩu?</TypographyLink>
          </Box>
        </AuthContainer>
      </ItemCenter>
    </>
  );
};

export default ResetPasswordPage;
