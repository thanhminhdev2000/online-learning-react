import { IOptions } from '@common/type';
import ErrorMessage from '@components/error';
import { Box, FormLabel, MenuItem, Select, Stack } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CSelectProps {
  label: string;
  errorMsg?: string;
  registerProps: UseFormRegisterReturn;
  size?: 'small' | 'medium';
  selectOptions: IOptions[];
  placeholder?: string;
}

const CSelect = ({ label, errorMsg, registerProps, size = 'small', selectOptions = [], placeholder }: CSelectProps) => {
  return (
    <Stack flexDirection="column" width="100%">
      <FormLabel sx={{ color: '#222c37' }}>{label}</FormLabel>
      <Box marginTop={0.5}>
        <Select size={size} {...registerProps} sx={{ width: '100%' }} defaultValue="" displayEmpty>
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
          {selectOptions.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.key}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <ErrorMessage message={errorMsg} />
    </Stack>
  );
};

export default CSelect;
