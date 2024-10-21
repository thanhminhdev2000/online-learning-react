import ErrorMessage from '@components/error';
import { Box, FormLabel, Stack, TextField } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CInputProps {
  label: string;
  type?: 'text' | 'password';
  size?: 'small' | 'medium';
  errorMsg?: string;
  registerProps: UseFormRegisterReturn;
}

const CInput = ({ label, type = 'text', size = 'small', errorMsg, registerProps }: CInputProps) => {
  return (
    <Stack flexDirection="column">
      <FormLabel sx={{ color: '#222c37' }}>{label}</FormLabel>
      <Box display="flex" alignItems="center" gap={2} marginTop={1}>
        <TextField fullWidth type={type} variant="outlined" size={size} placeholder={label} {...registerProps} />
      </Box>
      <ErrorMessage message={errorMsg} />
    </Stack>
  );
};

export default CInput;
