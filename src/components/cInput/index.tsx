import { CFormLabel, FormWrapper, InputWrapper } from '@common/styled';
import ErrorMessage from '@components/error';
import { TextField } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CInputProps {
  label: string;
  errorMsg?: string;
  registerProps: UseFormRegisterReturn;
  type?: 'text' | 'password';
  size?: 'small' | 'medium';
  multiline?: boolean;
  disabled?: boolean;
  showLabel?: boolean;
  backgroundColor?: string;
}

const CInput = ({ label, errorMsg, registerProps, showLabel = true, ...rest }: CInputProps) => {
  return (
    <FormWrapper>
      {showLabel && <CFormLabel>{label}</CFormLabel>}

      <InputWrapper>
        <TextField
          variant="outlined"
          fullWidth
          placeholder={label}
          rows={4}
          {...rest}
          sx={{
            textarea: {
              padding: 0,
            },
          }}
          {...registerProps}
        />
      </InputWrapper>
      <ErrorMessage message={errorMsg} />
    </FormWrapper>
  );
};

export default CInput;
