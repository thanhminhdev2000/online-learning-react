import { ClassWithSubjectsDto } from '@apis/generated/data-contracts';
import { useUploadDocument } from '@apis/hooks/document.hook';
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
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface DocumentUploadModalProps extends CModalProps {
  refetch: () => void;
  data: ClassWithSubjectsDto[];
  classId: number;
  subjectId: number;
}

const DocumentUploadModal = ({ refetch, data, classId, subjectId, open, onClose }: DocumentUploadModalProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const formInstance = useForm({
    resolver: zodResolver(uploadDocumentSchema),
    values: {
      title: '',
      classId,
      subjectId,
      author: '',
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
    const options: IOptions[] = data.map((item) => ({
      key: item.className,
      value: item.classId,
    }));

    return options;
  }, [data]);

  const subjectOptions = useMemo(() => {
    const classData = data.find((item) => item.classId === classIdSelected)?.subjects;
    const options: IOptions[] = (classData || [])?.map((item) => ({
      key: item.subjectName,
      value: item.subjectId,
    }));

    return options;
  }, [classIdSelected, data]);

  const { mutate } = useUploadDocument();

  const handleSubmitForm = handleSubmit((data) => {
    if (!data.file) {
      return;
    }

    mutate(
      {
        title: data.title,
        subjectId: Number(data.subjectId),
        file: data.file,
        author: data.author,
      },
      {
        onSuccess() {
          reset();
          onClose();
          refetch();
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
                        setFileName(file ? file.name : null);
                      },
                    })}
                  />
                </Button>
                {fileName && (
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                    {fileName}
                  </Typography>
                )}
                <ErrorMessage message={errors.file?.message} />
              </Stack>
            </Stack>

            <FlexEnd marginTop={4} gap={2}>
              <Button onClick={closeModal}>Cancel</Button>
              <Button variant="contained" type="submit" onClick={handleSubmitForm}>
                Save
              </Button>
            </FlexEnd>
          </form>
        </ModalWrapper>
      </Modal>
    </FormProvider>
  );
};

export default DocumentUploadModal;
