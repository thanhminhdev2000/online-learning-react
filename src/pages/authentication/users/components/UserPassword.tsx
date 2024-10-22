import { useUpdateUserPassword } from '@apis/hooks/user.hook';
import { FlexEnd } from '@common/styled';
import CInput from '@components/cInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mui/material';
import { userPasswordSchema } from '@pages/authentication/type';
import useAuthStore from '@store/authStore';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { updatePasswordInit } from '../../constant';

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

  const { mutate } = useUpdateUserPassword({ userId: user.id });

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess(data) {
        toast.success(data.message);
      },
      onError(data) {
        toast.error(data.error);
      },
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack flexDirection="column">
        <Stack flexDirection="column" gap={2}>
          <CInput
            label="Mật khẩu hiện tại"
            errorMsg={errors.currentPassword?.message}
            registerProps={register('currentPassword')}
          />

          <CInput label="Mật khẩu mới" errorMsg={errors.newPassword?.message} registerProps={register('newPassword')} />
          <CInput
            label="Nhập lại mật khẩu mới"
            errorMsg={errors.confirmNewPassword?.message}
            registerProps={register('confirmNewPassword')}
          />

          <FlexEnd marginTop={2}>
            <Button variant="contained" type="submit">
              Đổi mật khẩu
            </Button>
          </FlexEnd>
        </Stack>
      </Stack>
    </form>
  );
};

export default UserPassword;
