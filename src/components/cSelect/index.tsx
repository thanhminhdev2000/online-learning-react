import { IOptions } from '@common/type';
import ErrorMessage from '@components/error';
import { CFormLabel, FormWrapper, InputWrapper } from '@components/styled';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { UseFormRegisterReturn, useFormContext } from 'react-hook-form';

interface CSelectProps {
  label: string;
  errorMsg?: string;
  registerProps: UseFormRegisterReturn;
  size?: 'small' | 'medium';
  selectOptions: IOptions[];
  placeholder?: string;
  disabled?: boolean;
}

const CSelect = ({
  label,
  errorMsg,
  registerProps,
  size = 'small',
  selectOptions = [],
  placeholder,
  disabled,
}: CSelectProps) => {
  const { watch } = useFormContext();
  const selectedValue = watch(registerProps.name);

  const handleChange = (event: SelectChangeEvent<string>) => {
    if (registerProps.onChange) {
      registerProps.onChange({
        target: {
          name: registerProps.name,
          value: event.target.value || '',
        },
      });
    }
  };

  return (
    <FormWrapper>
      <CFormLabel>{label}</CFormLabel>
      <InputWrapper>
        <Select
          size={size}
          value={selectedValue || ''}
          onChange={handleChange}
          sx={{ width: '100%' }}
          displayEmpty
          disabled={disabled}
        >
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
          {selectOptions.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.key}
            </MenuItem>
          ))}
        </Select>
      </InputWrapper>
      <ErrorMessage message={errorMsg} />
    </FormWrapper>
  );
};

export default CSelect;
