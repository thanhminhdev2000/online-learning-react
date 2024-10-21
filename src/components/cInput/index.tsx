import ErrorMessage from '@components/error';
import { Box, FormLabel, Stack, TextField } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CInputProps {
  label: string;
  errorMsg?: string;
  registerProps: UseFormRegisterReturn;
  type?: 'text' | 'password';
  size?: 'small' | 'medium';
  textArea?: boolean;
}

const CInput = ({ label, errorMsg, registerProps, type = 'text', size = 'small', textArea }: CInputProps) => {
  return (
    <Stack flexDirection="column" width="100%">
      <FormLabel sx={{ color: '#222c37' }}>{label}</FormLabel>
      <Box marginTop={0.5}>
        <TextField
          fullWidth
          type={type}
          variant="outlined"
          size={size}
          placeholder={label}
          multiline={textArea}
          rows={4}
          {...registerProps}
        />
      </Box>
      <ErrorMessage message={errorMsg} />
    </Stack>
  );
};

export default CInput;
