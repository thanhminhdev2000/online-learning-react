import { FlexEnd, SpaceBetween } from '@common/styled';
import { CModalProps } from '@common/type';
import CInput from '@components/cInput';
import { ModalWrapper } from '@components/layout/styled';
import { Close } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const CourseModal = ({ open, onClose }: CModalProps) => {
  const formInstance = useForm({
    values: {
      file: undefined,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = formInstance;

  // const { mutate: createDocument, isPending: pendingCreate } = useCreateDocument();
  // const { mutate: updateDocument, isPending: pendingUpdate } = useUpdateDocument();

  const handleSubmitForm = handleSubmit((formData) => {
    if (!formData.file) {
      return;
    }
  });

  const closeModal = () => {
    reset();
    onClose();
  };

  useEffect(() => {}, []);

  return (
    <FormProvider {...formInstance}>
      <Modal open={open} onClose={closeModal}>
        <ModalWrapper>
          <form onSubmit={handleSubmitForm}>
            <SpaceBetween alignItems="center">
              <Typography variant="h6">Đăng tải tài liệu</Typography>
              <Close onClick={closeModal} sx={{ cursor: 'pointer' }} />
            </SpaceBetween>

            <Stack flexDirection="column" gap={4} marginY={2}>
              <CInput label="Tiêu đề" registerProps={register('file')} errorMsg={errors.file?.message} />

              <CInput label="Tên tác giả" registerProps={register('file')} errorMsg={errors.file?.message} />

              <Stack flexDirection="column">
                <Button variant="outlined" component="label" sx={{ textTransform: 'none' }}>
                  Chọn file từ máy tính
                  <input
                    hidden
                    accept="application/pdf,application/msword"
                    type="file"
                    {...register('file', {
                      onChange: () => {
                        // const file = e.target.files?.[0] || null;
                        // setValue('file', file, { shouldValidate: true });
                        // setValue('title', file ? file.name.split('.')[0] : '');
                        // setFileName(file.name);
                      },
                    })}
                  />
                </Button>
                {/* {(awsFileName || fileName) && (
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                    {awsFileName || fileName}
                  </Typography>
                )}
                <ErrorMessage message={errors.file?.message} /> */}
              </Stack>
            </Stack>

            <FlexEnd marginTop={4} gap={2}>
              <Button onClick={closeModal}>Huỷ bỏ</Button>
              <Button variant="contained" type="submit" onClick={handleSubmitForm}>
                Lưu
              </Button>
            </FlexEnd>
          </form>
        </ModalWrapper>
      </Modal>
    </FormProvider>
  );
};

export default CourseModal;
