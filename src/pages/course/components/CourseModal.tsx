import { CFormLabel, FlexEnd, SpaceBetween } from '@common/styled';
import { CModalProps, IOptions } from '@common/type';
import CInput from '@components/cInput';
import CSelect from '@components/cSelect';
import ErrorMessage from '@components/error';
import { ModalWrapper } from '@components/layout/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Close } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { createdCourseSchema, updatedCourseSchema } from '@pages/course/type';
import useClassStore from '@store/classStore';
import { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useCreateCourse, useUpdateCourse } from '../../../hooks/course.hook';

const CourseModal = ({ open, onClose }: CModalProps) => {
  const { classId, subjectId, classes, selectedCourse } = useClassStore();
  const [fileName, setFileName] = useState<string | null>();

  const formInstance = useForm({
    resolver: zodResolver(selectedCourse.id ? updatedCourseSchema : createdCourseSchema),
    values: {
      title: selectedCourse.title,
      classId: selectedCourse.classId || classId,
      subjectId: selectedCourse.subjectId || subjectId,
      instructor: selectedCourse.instructor,
      price: selectedCourse.id ? String(selectedCourse.price) : '',
      description: selectedCourse.description,
      thumbnail: undefined,
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = formInstance;

  const classIdSelected = watch('classId');

  const classOptions = useMemo(() => {
    const options: IOptions[] = classes.map((item) => ({
      key: item.name,
      value: item.id,
    }));

    return options;
  }, [classes]);

  const subjectOptions = useMemo(() => {
    const classData = classes.find((item) => item.id === classIdSelected)?.subjects;
    const options: IOptions[] = (classData || [])?.map((item) => ({
      key: item.name,
      value: item.id,
    }));

    return options;
  }, [classIdSelected, classes]);

  const createCourse = useCreateCourse();
  const updateCourse = useUpdateCourse();

  const handleSubmitForm = handleSubmit((formData) => {
    if (selectedCourse.id) {
      updateCourse.mutate(
        {
          id: selectedCourse.id,
          data: {
            ...formData,
            price: Number(formData.price),
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

    if (!formData.thumbnail) {
      return;
    }

    createCourse.mutate(
      {
        ...formData,
        price: Number(formData.price),
        thumbnail: formData.thumbnail,
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
    onClose();
  };

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
              <CInput label="Tiêu đề" registerProps={register('title')} errorMsg={errors.title?.message} />

              <CSelect
                label="Tên lớp học"
                registerProps={register('classId')}
                errorMsg={errors.classId?.message}
                selectOptions={classOptions}
                disabled={!!selectedCourse.id}
              />
              <CSelect
                label="Tên môn học"
                registerProps={register('subjectId')}
                errorMsg={errors.subjectId?.message}
                selectOptions={subjectOptions}
                disabled={!!selectedCourse.id}
              />

              <CInput label="Giá bán" registerProps={register('price')} errorMsg={errors.price?.message} />

              <CInput
                label="Mô tả"
                registerProps={register('description')}
                errorMsg={errors.description?.message}
                multiline
              />

              <CInput label="Giáo viên" registerProps={register('instructor')} errorMsg={errors.instructor?.message} />

              <Stack flexDirection="column">
                <CFormLabel>Ảnh bìa</CFormLabel>
                <Button variant="outlined" component="label" sx={{ textTransform: 'none' }}>
                  Chọn file từ máy tính
                  <input
                    hidden
                    accept="image/jpeg,image/png,image/gif"
                    type="file"
                    {...register('thumbnail', {
                      onChange: (e) => {
                        const file = e.target.files?.[0] || null;
                        setValue('thumbnail', file, { shouldValidate: true });
                        setFileName(file.name);
                      },
                    })}
                  />
                </Button>
                {fileName && (
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                    {fileName}
                  </Typography>
                )}
                <ErrorMessage message={errors.thumbnail?.message} />
              </Stack>
            </Stack>

            <FlexEnd marginTop={4} gap={2}>
              <Button onClick={closeModal}>Huỷ bỏ</Button>
              <Button
                variant="contained"
                type="submit"
                disabled={createCourse.isPending || updateCourse.isPending}
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

export default CourseModal;
