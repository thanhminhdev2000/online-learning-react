import CInput from '@components/cInput';
import { AuthContainer, ItemCenter, LinkItem } from '@components/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { forgotPasswordSchema } from '@pages/forgotPassword/type';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ForgotPasswordPage = () => {
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
            <Typography variant="h4" textAlign="center">
              Quên mật khẩu
            </Typography>

            <Stack marginTop={3}>
              <CInput label="Email" errorMsg={errors.email?.message} registerProps={register('email')} />
            </Stack>

            <Box marginTop={4}>
              <Button fullWidth variant="contained" type="submit">
                Xác nhận
              </Button>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" marginTop={2} gap={1}>
                <Typography>Bạn đã có tài khoản?</Typography>
                <LinkItem to="/login" color="primary">
                  Đăng nhập!
                </LinkItem>
              </Box>

              <Typography>
                <LinkItem to="/signup" color="primary">
                  Đăng ký tài khoản mới?
                </LinkItem>
              </Typography>
            </Box>
          </AuthContainer>
        </ItemCenter>
      )}
    </>
  );
};

export default ForgotPasswordPage;
