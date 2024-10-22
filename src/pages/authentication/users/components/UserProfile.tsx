import { useUpdateUser } from '@apis/hooks/user.hook';
import { genderOptions } from '@common/constant';
import { FlexEnd, FormWrapper } from '@common/styled';
import CDatePicker from '@components/cDatePicker';
import CInput from '@components/cInput';
import CSelect from '@components/cSelect';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mui/material';

import { userProfileSchema } from '@pages/authentication/users/type';
import useAuthStore from '@store/authStore';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UserProfile = () => {
  const { user, login } = useAuthStore();
  const formInstance = useForm({
    resolver: zodResolver(userProfileSchema),
    values: {
      id: user.id,
      email: user.email,
      username: user.username,
      fullName: user.fullName,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
      avatar: user.avatar,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formInstance;

  const { mutate } = useUpdateUser({ userId: user?.id as number });

  const onSubmit = handleSubmit((data) => {
    data.id = user.id;
    mutate(data, {
      onSuccess(data) {
        toast.success(data.message);
        login(data.user);
      },
      onError(data) {
        toast.error(data.error);
      },
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <FormWrapper gap={2}>
        <FormProvider {...formInstance}>
          <CInput label="Email" registerProps={register('email')} errorMsg={errors.email?.message} />
          <CInput label="Username" registerProps={register('username')} errorMsg={errors.username?.message} />
          <CInput label="Họ và tên" registerProps={register('fullName')} errorMsg={errors.fullName?.message} />
          <Stack gap={2}>
            <CSelect
              label="Giới tính"
              selectOptions={genderOptions}
              registerProps={register('gender')}
              errorMsg={errors.gender?.message}
              placeholder="Chọn giới tính"
              disabled
            />
            <CDatePicker
              label="Ngày sinh"
              errorMsg={errors.dateOfBirth?.message}
              registerProps={register('dateOfBirth')}
              disabled
            />
          </Stack>
        </FormProvider>
        <FlexEnd marginTop={2}>
          <Button variant="contained" type="submit">
            Lưu thay đổi
          </Button>
        </FlexEnd>
      </FormWrapper>
    </form>
  );
};

export default UserProfile;
