import { UserListParamsDto } from '@api-swagger/data-contracts';
import { roleOptions } from '@common/constant';
import CDatePicker from '@components/cDatePicker';
import CInput from '@components/cInput';
import CSelect from '@components/cSelect';
import { Box, Button, Stack } from '@mui/material';
import { userSearchInit } from '@pages/users/constant';
import { FormProvider, useForm } from 'react-hook-form';

const SearchForm = ({
  onSearch,
  isFetching,
}: {
  onSearch: (data: UserListParamsDto) => void;
  isFetching?: boolean;
}) => {
  const formInstance = useForm<UserListParamsDto>({
    values: userSearchInit,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = formInstance;

  const onSubmit = handleSubmit((data) => {
    onSearch(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <FormProvider {...formInstance}>
        <Box marginTop={4}>
          <Stack gap={2}>
            <CInput label="Email" errorMsg={errors.email?.message} registerProps={register('email')} />
            <CInput label="Username" errorMsg={errors.username?.message} registerProps={register('username')} />
            <CInput label="Họ và tên" errorMsg={errors.fullName?.message} registerProps={register('fullName')} />
          </Stack>

          <Stack marginTop={4}>
            <Stack width="60%" gap={4} justifyContent="space-between">
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

            <Stack width="40%" justifyContent="end" alignItems="end">
              <Button size="small" onClick={() => reset()}>
                Reset
              </Button>
              <Button size="small" variant="contained" type="submit" disabled={isFetching}>
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
