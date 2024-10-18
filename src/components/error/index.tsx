import { FormHelperText } from '@mui/material';

const ErrorMessage = ({ message }: { message?: string }) => {
  return <>{message && <FormHelperText sx={{ color: '#dc3545', fontSize: 13 }}>{message}</FormHelperText>}</>;
};

export default ErrorMessage;
