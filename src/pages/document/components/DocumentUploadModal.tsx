import { useCreateDocument } from '@apis/hooks/document.hook';
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
import useSubjectStore from '@store/subjectStore';
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const DocumentUploadModal = ({ refetch, open, onClose }: CModalProps) => {
  const AWS_URL = 'https://online-learning-aws.s3.us-east-1.amazonaws.com/pdfs/';
  const { classId, subjectId, subjects, selectedDocument } = useSubjectStore();

  const awsFileName = selectedDocument.fileUrl?.split(AWS_URL)[1];
  const [fileName, setFileName] = useState<string | null>(awsFileName);

  const formInstance = useForm({
    resolver: zodResolver(uploadDocumentSchema),
    values: {
      title: selectedDocument.title || '',
      classId: selectedDocument.classId || classId,
      subjectId: selectedDocument.subjectId || subjectId,
      author: selectedDocument.author,
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

  const classIdSelected = watch('classId');

  const classOptions = useMemo(() => {
    const options: IOptions[] = subjects.map((item) => ({
      key: item.className,
      value: item.classId,
    }));

    return options;
  }, [subjects]);

  const subjectOptions = useMemo(() => {
    const classData = subjects.find((item) => item.classId === classIdSelected)?.subjects;
    const options: IOptions[] = (classData || [])?.map((item) => ({
      key: item.subjectName,
      value: item.subjectId,
    }));

    return options;
  }, [classIdSelected, subjects]);

  const { mutate, isPending } = useCreateDocument();

  const handleSubmitForm = handleSubmit((formData) => {
    if (!formData.file) {
      return;
    }

    mutate(
      {
        title: formData.title,
        subjectId: Number(formData.subjectId),
        file: formData.file,
        author: formData.author,
      },
      {
        onSuccess() {
          closeModal();
          refetch?.();
        },
      },
    );
  });

  const closeModal = () => {
    reset();
    setFileName(null);
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
              <CInput label="Tiêu đề" registerProps={register('title')} errorMsg={errors.title?.message} />
              <CSelect
                label="Tên lớp học"
                registerProps={register('classId')}
                errorMsg={errors.classId?.message}
                selectOptions={classOptions}
                disabled={!!classId}
              />
              <CSelect
                label="Tên môn học"
                registerProps={register('subjectId')}
                errorMsg={errors.subjectId?.message}
                selectOptions={subjectOptions}
                disabled={!!subjectId}
              />

              <CInput label="Tên tác giả" registerProps={register('author')} errorMsg={errors.author?.message} />

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
                        setValue('title', file ? file.name.split('.')[0] : '');
                        setFileName(file.name);
                      },
                    })}
                  />
                </Button>
                {(awsFileName || fileName) && (
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                    {awsFileName || fileName}
                  </Typography>
                )}
                <ErrorMessage message={errors.file?.message} />
              </Stack>
            </Stack>

            <FlexEnd marginTop={4} gap={2}>
              <Button onClick={closeModal}>Huỷ bỏ</Button>
              <Button variant="contained" type="submit" disabled={isPending} onClick={handleSubmitForm}>
                Lưu
              </Button>
            </FlexEnd>
          </form>
        </ModalWrapper>
      </Modal>
    </FormProvider>
  );
};

export default DocumentUploadModal;
