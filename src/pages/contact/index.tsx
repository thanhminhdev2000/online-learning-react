import { useContact } from '@apis/hooks/contact.hook';
import { BoxContainer, ItemCenter } from '@common/styled';
import CInput from '@components/cInput';
import { zodResolver } from '@hookform/resolvers/zod';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Stack, Typography } from '@mui/material';
import { contactSchema } from '@pages/contact/type';
import { FormProvider, useForm } from 'react-hook-form';

const ContactPage = () => {
  const formInstance = useForm({
    resolver: zodResolver(contactSchema),
    values: {
      fullName: '',
      email: '',
      title: '',
      content: '',
    },
  });

  const { mutate, isPending } = useContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = formInstance;

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess() {
        reset();
      },
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <FormProvider {...formInstance}>
        <ItemCenter marginTop={5}>
          <Stack flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
            <BoxContainer>
              <Stack flexDirection="column">
                <Typography variant="h6" gutterBottom>
                  GỬI THÔNG TIN LIÊN HỆ - GÓP Ý
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Góp ý hoặc liên hệ cho tôi nếu bạn có nhu cầu về dịch vụ, quảng cáo hoặc những thắc mắc khác.
                </Typography>

                <Stack flexDirection="column" gap={2} marginTop={4}>
                  <CInput label="Họ tên" registerProps={register('fullName')} errorMsg={errors.fullName?.message} />
                  <CInput label="Email" registerProps={register('email')} errorMsg={errors.email?.message} />
                  <CInput label="Tiêu đề" registerProps={register('email')} errorMsg={errors.email?.message} />
                  <CInput
                    label="Nội dung"
                    registerProps={register('content')}
                    errorMsg={errors.content?.message}
                    textArea
                  />
                </Stack>
                <Button variant="contained" endIcon={<SendIcon />} sx={{ mt: 2 }} type="submit" disabled={isPending}>
                  Gửi
                </Button>
              </Stack>
            </BoxContainer>

            <BoxContainer>
              <Typography variant="h6" gutterBottom>
                THÔNG TIN LIÊN HỆ KHÁC
              </Typography>
              <Typography variant="body2" gutterBottom>
                Mọi thông tin đóng góp ý kiến hoặc hỗ trợ, người dùng có thể liên hệ trực tiếp qua các kênh sau:
              </Typography>
              <Box mt={2}>
                <Typography variant="body1" gutterBottom>
                  <strong>Điện thoại:</strong> <br />
                  (+84) 945 036 530 (Mr. Minh) <br />
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Email:</strong> thanhminh.nguyendev@gmail.com
                </Typography>
              </Box>
            </BoxContainer>
          </Stack>
        </ItemCenter>
      </FormProvider>
    </form>
  );
};

export default ContactPage;
