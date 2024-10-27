import { useForgotPassword } from '@apis/hooks/authentication.hook';
import { AuthContainer, ItemCenter, TypographyLink } from '@common/styled';
import CInput from '@components/cInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { forgotPasswordSchema } from '@pages/authentication/type';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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

  const { mutate, isPending } = useForgotPassword();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess() {
        setNextStep(true);
      },
      onError(data) {
        toast.error(data.error);
      },
    });
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
            <Typography variant="h6" fontWeight="bold" textAlign="center">
              QUÊN MẬT KHẨU
            </Typography>

            <Stack flexDirection="column" marginTop={4}>
              <CInput label="Email" errorMsg={errors.email?.message} registerProps={register('email')} />
            </Stack>

            <Box marginTop={4}>
              <Button fullWidth variant="contained" disabled={isPending} type="submit">
                Xác nhận
              </Button>
            </Box>

            <Box marginTop={4}>
              <ItemCenter gap={1}>
                <Typography>Bạn đã có tài khoản?</Typography>
                <TypographyLink onClick={() => navigate('/login')}>Đăng nhập!</TypographyLink>
              </ItemCenter>

              <ItemCenter>
                <TypographyLink onClick={() => navigate('/signup')}>Đăng ký tài khoản mới!</TypographyLink>
              </ItemCenter>
            </Box>
          </AuthContainer>
        </ItemCenter>
      )}
    </>
  );
};

export default ForgotPasswordPage;
