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
  textArea?: boolean;
  disabled?: boolean;
}

const CInput = ({ label, errorMsg, registerProps, type = 'text', size = 'small', textArea, disabled }: CInputProps) => {
  return (
    <FormWrapper>
      <CFormLabel>{label}</CFormLabel>
      <InputWrapper>
        <TextField
          fullWidth
          type={type}
          variant="outlined"
          size={size}
          placeholder={label}
          multiline={textArea}
          rows={4}
          disabled={disabled}
          {...registerProps}
        />
      </InputWrapper>
      <ErrorMessage message={errorMsg} />
    </FormWrapper>
  );
};

export default CInput;
