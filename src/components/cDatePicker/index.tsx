import ErrorMessage from '@components/error';
import { Box, FormLabel, Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CDatePickerProps {
  label: string;
  errorMsg?: string;
  registerProps: UseFormRegisterReturn;
  size?: 'small' | 'medium';
}

const CDatePicker = ({ label, errorMsg, registerProps, size = 'small' }: CDatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
    if (registerProps.onChange) {
      registerProps.onChange({
        target: {
          name: registerProps.name,
          value: date?.toISOString() || '',
        },
      });
    }
  };

  return (
    <Stack flexDirection="column" width="100%">
      <FormLabel sx={{ color: '#222c37' }}>{label}</FormLabel>
      <Box marginTop={0.5} width="100%">
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          slotProps={{ textField: { size, fullWidth: true } }}
        />
      </Box>
      <ErrorMessage message={errorMsg} />
    </Stack>
  );
};

export default CDatePicker;
