import { useContact } from '@apis/hooks/contact.hook';
import { BoxContainer, TypographyLink } from '@common/styled';
import CInput from '@components/cInput';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();

  const formInstance = useForm({
    values: {
      fullName: '',
      email: '',
      title: '',
      content: '',
    },
  });

  const { mutate } = useContact();

  const { register, handleSubmit, reset } = formInstance;

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
        <Stack marginTop={5} justifyContent="center">
          <Stack flexDirection={{ xs: 'column', sm: 'row' }} gap={3}>
            <BoxContainer >
              <Stack flexDirection="column">
                <Typography variant="h6" gutterBottom>
                  GỬI THÔNG TIN LIÊN HỆ - GÓP Ý
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Góp ý hoặc liên hệ cho tôi nếu bạn có nhu cầu về dịch vụ, quảng cáo hoặc những thắc mắc khác.
                </Typography>

                <Stack flexDirection="column" gap={2} marginTop={2}>
                  <CInput label="Họ tên" registerProps={register('fullName')} />
                  <CInput label="Email" registerProps={register('email')} />
                  <CInput label="Tiêu đề" registerProps={register('email')} />
                  <CInput label="Nội dung" registerProps={register('content')} textArea />
                </Stack>
                <Button variant="contained" endIcon={<SendIcon />} sx={{ mt: 2 }} type="submit">
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

                <Stack gap={1}>
                  <strong>Fan Page: </strong>
                  <TypographyLink onClick={() => navigate('https://www.facebook.com/360LearningSuite/')}>
                    https://www.facebook.com/360LearningSuite/
                  </TypographyLink>
                </Stack>
              </Box>
            </BoxContainer>
          </Stack>
        </Stack>
      </FormProvider>
    </form>
  );
};

export default ContactPage;
