import { useCreateUser } from '@apis/hooks/user.hook';
import { DATE_FORMAT, genderOptions } from '@common/constant';
import CDatePicker from '@components/cDatePicker';
import CInput from '@components/cInput';
import CSelect from '@components/cSelect';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { UserGenderDto } from '@apis/generated/data-contracts';
import { AuthContainer, ItemCenter, TypographyLink } from '@common/styled';
import { signUpInit } from '@pages/authentication/constant';
import { signUpSchema } from '@pages/authentication/type';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const formInstance = useForm({
    resolver: zodResolver(signUpSchema),
    values: signUpInit,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formInstance;
  const { mutate, isPending } = useCreateUser();

  const onSubmit = handleSubmit((data) => {
    mutate(
      {
        ...data,
        dateOfBirth: dayjs(data.dateOfBirth).format(DATE_FORMAT),
        gender: data.gender === UserGenderDto.GenderMale ? UserGenderDto.GenderMale : UserGenderDto.GenderFemale,
      },
      {
        onSuccess() {
          navigate('/login');
        },
      },
    );
  });

  return (
    <ItemCenter height="90vh">
      <AuthContainer onSubmit={onSubmit}>
        <Typography variant="h6" fontWeight="bold" textAlign="center">
          ĐĂNG KÝ
        </Typography>
        <FormProvider {...formInstance}>
          <Stack flexDirection="column" gap={2} marginTop={4}>
            <CInput label="Email" errorMsg={errors.email?.message} registerProps={register('email')} />
            <CInput label="Username" errorMsg={errors.username?.message} registerProps={register('username')} />
            <CInput label="Họ và tên" errorMsg={errors.fullName?.message} registerProps={register('fullName')} />
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

            <Stack gap={2}>
              <CSelect
                label="Giới tính"
                errorMsg={errors.gender?.message}
                registerProps={register('gender')}
                selectOptions={genderOptions}
                placeholder="Chọn giới tính"
              />

              <CDatePicker
                label="Ngày sinh"
                errorMsg={errors.dateOfBirth?.message}
                registerProps={register('dateOfBirth')}
              />
            </Stack>
          </Stack>
        </FormProvider>

        <Box marginTop={4}>
          <Button fullWidth variant="contained" type="submit" disabled={isPending}>
            Đăng ký
          </Button>
        </Box>

        <Typography marginTop={4} color="textSecondary">
          Khi đăng ký, bạn đã đồng ý với Điều khoản sử dụng và Chính sách bảo mật của chúng tôi.
        </Typography>

        <Box marginTop={4}>
          <ItemCenter gap={1}>
            <Typography>Bạn đã có tài khoản?</Typography>
            <TypographyLink onClick={() => navigate('/login')}>Đăng nhập!</TypographyLink>
          </ItemCenter>

          <ItemCenter>
            <TypographyLink onClick={() => navigate('/forgot-password')}>Quên mật khẩu?</TypographyLink>
          </ItemCenter>
        </Box>
      </AuthContainer>
    </ItemCenter>
  );
};

export default SignUpPage;
