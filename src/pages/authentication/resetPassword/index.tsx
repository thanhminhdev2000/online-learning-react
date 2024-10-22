import CInput from '@components/cInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { errorMsg } from '@utils/index';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { AuthContainer, ItemCenter, TypographyLink } from '../../../common/styled';

const resetPasswordSchema = z
  .object({
    password: z.string().min(1, errorMsg('Mật khẩu')),
    confirmPassword: z.string().min(1, errorMsg('Mật khẩu')),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu không khớp',
    path: ['confirmPassword'],
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
      confirmPassword: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <ItemCenter height="80vh">
        <AuthContainer onSubmit={onSubmit}>
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            ĐẶT LẠI MẬT KHẨU
          </Typography>

          <Stack gap={3} marginTop={3}>
            <CInput label="Mật khẩu" errorMsg={errors.password?.message} registerProps={register('password')} />
            <CInput
              label="Nhập lại mật khẩu"
              errorMsg={errors.confirmPassword?.message}
              registerProps={register('confirmPassword')}
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
