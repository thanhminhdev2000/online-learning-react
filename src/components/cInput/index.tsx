import ErrorMessage from '@components/error';
import { Box, FormLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { IOptions } from 'common';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CInputProps {
  label: string;
  type?: 'textFiled' | 'select' | 'textArea' | 'datePicker';
  size?: 'small' | 'medium';
  errorMsg?: string;
  registerProps: UseFormRegisterReturn;
  textFiledType?: 'text' | 'password';
  selectOptions?: IOptions[];
}

const CInput = ({
  label,
  type = 'textFiled',
  size = 'small',
  errorMsg,
  registerProps,
  textFiledType = 'text',
  selectOptions = [],
}: CInputProps) => {
  return (
    <Stack flexDirection="column" width="100%">
      <FormLabel sx={{ color: '#222c37' }}>{label}</FormLabel>
      <Box marginTop={1}>
        {type === 'textFiled' && (
          <TextField
            fullWidth
            type={textFiledType}
            variant="outlined"
            size={size}
            placeholder={label}
            {...registerProps}
          />
        )}

        {type === 'select' && (
          <Select size={size} placeholder={label} {...registerProps} sx={{ width: '100%' }}>
            {selectOptions.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.key}
              </MenuItem>
            ))}
          </Select>
        )}
      </Box>
      <ErrorMessage message={errorMsg} />
    </Stack>
  );
};

export default CInput;
