import { UserDetailDto, UserRoleDto } from '@apis/generated/data-contracts';
import { useCreateAdmin, useUpdateUser } from '@apis/hooks/user.hook';
import { genderOptions } from '@common/constant';
import { FlexEnd } from '@common/styled';
import { CModalProps } from '@common/type';
import CDatePicker from '@components/cDatePicker';
import CInput from '@components/cInput';
import CSelect from '@components/cSelect';
import { ModalWrapper } from '@components/layout/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Close } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { signUpSchema } from '@pages/authentication/type';
import { FormProvider, useForm } from 'react-hook-form';

interface UserProps extends CModalProps {
  data: UserDetailDto;
  refetch: () => void;
}

const UserModal = ({ open, onClose, data, refetch }: UserProps) => {
  const formInstance = useForm({
    resolver: zodResolver(signUpSchema),
    values: {
      id: data.id,
      email: data.email,
      username: data.username,
      fullName: data.fullName,
      password: data.id ? '******' : '',
      confirmPassword: data.id ? '******' : '',
      gender: data.gender,
      dateOfBirth: data.dateOfBirth,
      avatar: data.avatar,
      role: data.role,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = formInstance;

  const { mutate: createAdmin } = useCreateAdmin();
  const { mutate: updateUser } = useUpdateUser({ userId: data.id });

  const handleSubmitForm = handleSubmit((formData) => {
    if (data.id) {
      updateUser(formData, {
        onSuccess() {
          onClose();
          refetch();
        },
      });
    } else {
      createAdmin(
        { ...formData, role: UserRoleDto.RoleAdmin },
        {
          onSuccess() {
            onClose();
          },
        },
      );
    }
  });

  const closeModal = () => {
    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <FormProvider {...formInstance}>
        <Modal open={open} onClose={closeModal}>
          <ModalWrapper>
            <Stack justifyContent="space-between" alignItems="center">
              <Typography variant="h6">{data.id ? 'Chỉnh sửa thông tin' : 'Thêm người dùng'}</Typography>
              <Close onClick={closeModal} sx={{ cursor: 'pointer' }} />
            </Stack>

            <Stack flexDirection="column" gap={2} marginY={2}>
              <CInput label="Email" registerProps={register('email')} errorMsg={errors.email?.message} />
              <CInput label="Username" registerProps={register('username')} errorMsg={errors.username?.message} />
              <CInput label="Họ và tên" registerProps={register('fullName')} errorMsg={errors.fullName?.message} />

              {!data.id && (
                <Stack gap={2}>
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
              )}

              <Stack gap={2}>
                <CSelect
                  label="Giới tính"
                  selectOptions={genderOptions}
                  registerProps={register('gender')}
                  errorMsg={errors.gender?.message}
                  placeholder="Chọn giới tính"
                />
                <CDatePicker
                  label="Ngày sinh"
                  errorMsg={errors.dateOfBirth?.message}
                  registerProps={register('dateOfBirth')}
                />
              </Stack>
            </Stack>

            <FlexEnd marginTop={3} gap={2}>
              <Button onClick={closeModal}>Cancel</Button>
              <Button variant="contained" type="submit" onClick={handleSubmitForm}>
                Save
              </Button>
            </FlexEnd>
          </ModalWrapper>
        </Modal>
      </FormProvider>
    </form>
  );
};

export default UserModal;