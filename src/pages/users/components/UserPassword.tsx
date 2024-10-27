import { useUpdateUserPassword } from '@apis/hooks/user.hook';
import { FlexEnd } from '@common/styled';
import CInput from '@components/cInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mui/material';
import { updatePasswordInit } from '@pages/authentication/constant';
import { userPasswordSchema } from '@pages/authentication/type';
import useAuthStore from '@store/authStore';
import { useForm } from 'react-hook-form';

const UserPassword = () => {
  const { user } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userPasswordSchema),
    values: updatePasswordInit,
  });

  const { mutate, isPending } = useUpdateUserPassword({ userId: user.id });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack flexDirection="column">
        <Stack flexDirection="column" gap={2}>
          <CInput
            label="Mật khẩu hiện tại"
            type="password"
            errorMsg={errors.currentPassword?.message}
            registerProps={register('currentPassword')}
          />

          <CInput
            label="Mật khẩu mới"
            type="password"
            errorMsg={errors.newPassword?.message}
            registerProps={register('newPassword')}
          />
          <CInput
            label="Nhập lại mật khẩu mới"
            type="password"
            errorMsg={errors.confirmNewPassword?.message}
            registerProps={register('confirmNewPassword')}
          />

          <FlexEnd marginTop={4}>
            <Button variant="contained" type="submit" disabled={isPending}>
              Đổi mật khẩu
            </Button>
          </FlexEnd>
        </Stack>
      </Stack>
    </form>
  );
};

export default UserPassword;
