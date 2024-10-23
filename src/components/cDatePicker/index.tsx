import ErrorMessage from '@components/error';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form';
import { CFormLabel, FormWrapper, InputWrapper } from '../../common/styled';
import { DATE_FORMAT } from '@common/constant';

interface CDatePickerProps {
  label: string;
  errorMsg?: string;
  registerProps: UseFormRegisterReturn;
  size?: 'small' | 'medium';
  disabled?: boolean;
}

const CDatePicker = ({ label, errorMsg, registerProps, size = 'small', disabled }: CDatePickerProps) => {
  const { watch } = useFormContext();
  const selectedValue = watch(registerProps.name);
  const parsedValue = selectedValue ? dayjs(selectedValue) : null;

  const handleDateChange = (date: Dayjs | null) => {
    if (registerProps.onChange) {
      registerProps.onChange({
        target: {
          name: registerProps.name,
          value: date ? dayjs(date).format(DATE_FORMAT) : '',
        },
      });
    }
  };

  return (
    <FormWrapper>
      <CFormLabel>{label}</CFormLabel>
      <InputWrapper>
        <DatePicker
          value={parsedValue}
          onChange={handleDateChange}
          slotProps={{ textField: { size, fullWidth: true } }}
          format="DD/MM/YYYY"
          disabled={disabled}
        />
      </InputWrapper>
      {errorMsg && <ErrorMessage message={errorMsg} />}
    </FormWrapper>
  );
};

export default CDatePicker;
