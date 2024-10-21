import CInput from '@components/cInput';
import { AuthContainer, ItemCenter, TypographyLink } from '@components/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { errorMsg } from '@utils/index';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const forgotPasswordSchema = z.object({
  email: z.string().min(1, errorMsg('Email')),
});

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [nextStep, setNextStep] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    values: {
      email: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    setNextStep(true);
    console.log(data);
  });

  return (
    <>
      {nextStep ? (
        <ItemCenter height="80vh">
          <AuthContainer>Vui lòng kiểm tra email để đặt lại mật khẩu.</AuthContainer>
        </ItemCenter>
      ) : (
        <ItemCenter height="80vh">
          <AuthContainer onSubmit={onSubmit}>
            <Typography variant="h5" fontWeight="bold" textAlign="center">
              QUÊN MẬT KHẨU
            </Typography>

            <Stack flexDirection="column" marginTop={3}>
              <CInput label="Email" errorMsg={errors.email?.message} registerProps={register('email')} />
            </Stack>

            <Box marginTop={4}>
              <Button fullWidth variant="contained" type="submit">
                Xác nhận
              </Button>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="space-between" marginTop={2}>
              <Stack gap={1}>
                <Typography>Bạn đã có tài khoản?</Typography>
                <TypographyLink onClick={() => navigate('/login')}>Đăng nhập!</TypographyLink>
              </Stack>

              <TypographyLink onClick={() => navigate('/signup')}>Đăng ký tài khoản mới!</TypographyLink>
            </Box>
          </AuthContainer>
        </ItemCenter>
      )}
    </>
  );
};

export default ForgotPasswordPage;
