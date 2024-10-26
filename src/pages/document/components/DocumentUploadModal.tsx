import { useGetSubjects, useUploadDocument } from '@apis/hooks/document.hook';
import { FlexEnd, SpaceBetween } from '@common/styled';
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
import { uploadDocumentSchema } from '@pages/document/type';
import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const DocumentUploadModal = ({ open, onClose }: CModalProps) => {
  const formInstance = useForm({
    resolver: zodResolver(uploadDocumentSchema),
    values: {
      title: '',
      classId: 0,
      subjectId: 0,
      file: undefined,
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

  const { data = [] } = useGetSubjects();
  const classId = watch('classId');

  const classOptions = useMemo(() => {
    const options: IOptions[] = data.map((item) => ({
      key: item.className,
      value: item.classId,
    }));
    return options;
  }, [data]);

  const subjectOptions = useMemo(() => {
    const classData = data.find((item) => item.classId === classId)?.subjects;
    const options: IOptions[] = (classData || [])?.map((item) => ({
      key: item.subjectName,
      value: item.subjectId,
    }));

    return options;
  }, [classId, data]);

  const { mutate } = useUploadDocument();

  const handleSubmitForm = handleSubmit((data) => {
    console.log(data.file);
    if (!data.file) {
      return;
    }

    mutate({
      title: data.title,
      subjectId: Number(data.subjectId),
      file: data.file,
    });
  });

  const closeModal = () => {
    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <FormProvider {...formInstance}>
        <Modal open={open} onClose={closeModal}>
          <ModalWrapper>
            <SpaceBetween alignItems="center">
              <Typography variant="h6">Đăng tải tài liệu</Typography>
              <Close onClick={closeModal} sx={{ cursor: 'pointer' }} />
            </SpaceBetween>

            <Stack flexDirection="column" gap={4} marginY={2}>
              <CInput label="Tiêu đề" registerProps={register('title')} errorMsg={errors.title?.message} />
              <CSelect
                label="Lớp học"
                registerProps={register('classId')}
                errorMsg={errors.classId?.message}
                selectOptions={classOptions}
              />
              <CSelect
                label="Môn học"
                registerProps={register('subjectId')}
                errorMsg={errors.subjectId?.message}
                selectOptions={subjectOptions}
              />

              <Stack flexDirection="column">
                <Button variant="outlined" component="label" sx={{ textTransform: 'none' }}>
                  Chọn file từ máy tính
                  <input
                    hidden
                    accept="application/pdf,application/msword"
                    type="file"
                    {...register('file', {
                      onChange: (e) => {
                        const file = e.target.files?.[0] || null;
                        setValue('file', file, { shouldValidate: true });
                      },
                    })}
                  />
                </Button>
                <ErrorMessage message={errors.file?.message} />
              </Stack>
            </Stack>

            <FlexEnd marginTop={4} gap={2}>
              <Button onClick={closeModal}>Cancel</Button>
              <Button variant="contained" type="submit" onClick={handleSubmitForm}>
                Save
              </Button>
            </FlexEnd>
          </ModalWrapper>
        </Modal>
      </FormProvider>
    </form>
  );
};

export default DocumentUploadModal;
