import { UserListParamsDto } from '@apis/generated/data-contracts';
import { roleOptions } from '@common/constant';
import CDatePicker from '@components/cDatePicker';
import CInput from '@components/cInput';
import CSelect from '@components/cSelect';
import { Box, Button, Stack } from '@mui/material';
import { userSearchInit } from '@pages/users/constant';
import { FormProvider, useForm } from 'react-hook-form';

const SearchForm = ({ onSearch }: { onSearch: (data: UserListParamsDto) => void }) => {
  const formInstance = useForm<UserListParamsDto>({
    values: userSearchInit,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formInstance;

  const onSubmit = handleSubmit((data) => {
    onSearch(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <FormProvider {...formInstance}>
        <Box marginTop={2}>
          <Stack gap={4}>
            <CInput label="Email" errorMsg={errors.email?.message} registerProps={register('email')} />
            <CInput label="Username" errorMsg={errors.username?.message} registerProps={register('username')} />
            <CInput label="Họ và tên" errorMsg={errors.fullName?.message} registerProps={register('fullName')} />
          </Stack>

          <Stack marginTop={2} gap={2}>
            <Stack width="75%" gap={4} justifyContent="space-between">
              <CDatePicker
                label="Ngày sinh"
                errorMsg={errors.dateOfBirth?.message}
                registerProps={register('dateOfBirth')}
              />

              <CSelect
                label="Vai trò"
                errorMsg={errors.role?.message}
                registerProps={register('role')}
                selectOptions={roleOptions}
              />
            </Stack>

            <Stack width="25%" justifyContent="end" alignItems="end" gap={2}>
              <Button size="large">Reset</Button>
              <Button size="large" variant="contained" type="submit">
                Tìm kiếm
              </Button>
            </Stack>
          </Stack>
        </Box>
      </FormProvider>
    </form>
  );
};

export default SearchForm;
