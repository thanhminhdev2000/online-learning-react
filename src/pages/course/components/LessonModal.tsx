import { useCreateLesson, useUpdateLesson } from '@api-hooks/lesson.hook';
import { CFormLabel, FlexEnd, SpaceBetween } from '@common/styled';
import { CModalProps } from '@common/type';
import CInput from '@components/cInput';
import ErrorMessage from '@components/error';
import { ModalWrapper } from '@components/layout/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Close } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { createdLessonSchema, updatedLessonSchema } from '@pages/course/type';
import useClassStore from '@store/classStore';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

interface LessonModalProps extends CModalProps {
  length: number;
}

const LessonModal = ({ length, open, onClose }: LessonModalProps) => {
  const { id } = useParams();
  const { selectedLesson } = useClassStore();
  const [fileName, setFileName] = useState<string | null>();

  const formInstance = useForm({
    resolver: zodResolver(selectedLesson.id ? updatedLessonSchema : createdLessonSchema),
    values: {
      title: selectedLesson.title,
      position: selectedLesson.id ? String(selectedLesson.position) : String(length + 1),
      video: undefined as unknown as File | undefined,
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    clearErrors,
    setError,
    formState: { errors },
  } = formInstance;

  const position = watch('position');

  const createLesson = useCreateLesson();
  const updateLesson = useUpdateLesson();

  const handleSubmitForm = handleSubmit((formData) => {
    if (selectedLesson.id) {
      updateLesson.mutate(
        {
          id: selectedLesson.id,
          data: {
            title: formData.title,
            video: formData?.video ? formData.video : undefined,
            position: Number(formData.position),
          },
        },
        {
          onSuccess() {
            closeModal();
          },
        },
      );
      return;
    }

    if (!formData.video) {
      return;
    }

    createLesson.mutate(
      {
        courseId: Number(id) || 0,
        title: formData.title,
        video: formData.video,
        position: Number(formData.position),
      },
      {
        onSuccess() {
          closeModal();
        },
      },
    );
  });

  const closeModal = () => {
    reset();
    setFileName(null);
    onClose?.();
  };

  useEffect(() => {
    clearErrors('position');
    if (Number(position) < 1) {
      setError('position', { message: 'Vị trí bài học không hợp lệ' });
      return;
    }

    if (selectedLesson.id && Number(position) > length) {
      setError('position', { message: 'Vị trí bài học vượt quá số bài hiện tại' });
      return;
    }

    if (Number(position) > length + 1) {
      setError('position', { message: 'Vị trí bài học vượt quá số bài hiện tại' });
      return;
    }
  }, [position, selectedLesson, length, setError, clearErrors]);

  return (
    <FormProvider {...formInstance}>
      <Modal open={open} onClose={closeModal}>
        <ModalWrapper>
          <form onSubmit={handleSubmitForm}>
            <SpaceBetween>
              <Typography variant="h6">Đăng tải tài liệu</Typography>
              <Close onClick={closeModal} sx={{ cursor: 'pointer' }} />
            </SpaceBetween>

            <Stack flexDirection="column" gap={4} marginY={2}>
              <CInput label="Tên bài học" registerProps={register('title')} errorMsg={errors.title?.message} />
              <CInput label="Bài học số" registerProps={register('position')} errorMsg={errors.position?.message} />

              <Stack flexDirection="column">
                <CFormLabel>Video bài giảng</CFormLabel>
                <Button variant="outlined" component="label" sx={{ textTransform: 'none' }}>
                  Chọn file từ máy tính
                  <input
                    hidden
                    accept="video/mp4,video/avi,video/mov"
                    type="file"
                    onChange={(e) => {
                      const files = e.target.files;
                      const video = (files?.length || 0) > 0 ? files?.[0] : undefined;
                      setValue('video', video, { shouldValidate: true });
                      setValue('title', video ? video.name.split('.')[0] : '', { shouldValidate: true });
                      setFileName(video?.name || null);
                    }}
                  />
                </Button>
                {fileName && (
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                    {fileName}
                  </Typography>
                )}
                <ErrorMessage message={errors.video?.message} />
              </Stack>
            </Stack>

            <FlexEnd marginTop={4} gap={2}>
              <Button onClick={closeModal}>Huỷ bỏ</Button>
              <Button
                variant="contained"
                type="submit"
                disabled={createLesson.isPending || updateLesson.isPending}
                onClick={handleSubmitForm}
              >
                Lưu
              </Button>
            </FlexEnd>
          </form>
        </ModalWrapper>
      </Modal>
    </FormProvider>
  );
};

export default LessonModal;
