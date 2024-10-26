import { DocumentListParamsDto, UserRoleDto } from '@apis/generated/data-contracts';
import { useDeleteDocument, useGetDocuments, useGetSubjects } from '@apis/hooks/document.hook';
import { MAIN_COLOR } from '@common/constant';
import { AlignCenter, OverflowMultiLine, SpaceBetween } from '@common/styled';
import CInput from '@components/cInput';
import { SearchOutlined } from '@mui/icons-material';

import DownloadIcon from '@mui/icons-material/Download';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, CardContent, Divider, Stack, Typography } from '@mui/material';
import DocumentUploadModal from '@pages/document/components/DocumentUploadModal';
import { CardStyled, DeleteIconStyled, DocumentListWrapper } from '@pages/document/styled';
import useAuthStore from '@store/authStore';
import useSubjectStore from '@store/subjectStore';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const DocumentCard = ({ refetch }: { refetch: () => void }) => {
  const { user } = useAuthStore();
  const { classId, subjectId } = useSubjectStore();
  const [search, setSearch] = useState<DocumentListParamsDto>({});
  const [openUploadDocumentModal, setOpenUploadDocumentModal] = useState(false);
  const { data: subjectData = [] } = useGetSubjects();

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    setSearch(data);
  });

  const { data } = useGetDocuments({
    ...search,
    subjectId: subjectId ? subjectId : undefined,
  });

  const { mutate } = useDeleteDocument();

  const openPdfFile = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDeleteDocument = (documentId: number) => {
    mutate(documentId, {
      onSuccess() {
        refetch();
      },
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Box padding={2}>
        <SpaceBetween>
          <Box>
            <Typography variant="h6" marginTop={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
              TÀI LIỆU NỔI BẬT
            </Typography>
          </Box>

          <AlignCenter gap={2}>
            {user.role === UserRoleDto.RoleAdmin && (
              <Button variant="contained" sx={{ width: '140px' }} onClick={() => setOpenUploadDocumentModal(true)}>
                Đăng tải tài liệu
              </Button>
            )}
            <AlignCenter gap={2}>
              <CInput label="Tìm kiếm theo tiêu đề" registerProps={register('title')} showLabel={false} />
              <SearchOutlined onClick={onSubmit} sx={{ width: 32, height: 32 }} />
            </AlignCenter>
          </AlignCenter>
        </SpaceBetween>

        <DocumentListWrapper>
          {data?.map((document) => (
            <CardStyled key={document.id} onClick={() => openPdfFile(document.fileUrl)}>
              <CardContent>
                <Box paddingX={2} sx={{ position: 'relative' }}>
                  <OverflowMultiLine
                    variant="h6"
                    lines={2}
                    sx={{
                      fontWeight: 'bold',
                      color: MAIN_COLOR,
                      height: 64,
                      paddingRight: 3,
                    }}
                  >
                    {document.title}
                  </OverflowMultiLine>

                  {user.role === UserRoleDto.RoleAdmin && (
                    <DeleteIconStyled
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteDocument(document.id);
                      }}
                    />
                  )}

                  <AlignCenter marginTop={1} gap={1}>
                    <FolderIcon sx={{ fontSize: 26 }} />
                    <OverflowMultiLine sx={{ textAlign: 'center' }}>{document.category}</OverflowMultiLine>
                  </AlignCenter>
                </Box>

                <Divider sx={{ paddingY: 2 }} />

                <Box paddingX={2}>
                  <AlignCenter justifyContent="space-between" marginTop={4}>
                    <Stack gap={1}>
                      <VisibilityIcon />
                      <Typography>{document.views}</Typography>
                    </Stack>

                    <Stack gap={1}>
                      <DownloadIcon />
                      <Typography>{document.downloads}</Typography>
                    </Stack>
                  </AlignCenter>

                  <AlignCenter marginTop={1} gap={1}>
                    <PersonIcon />
                    <OverflowMultiLine
                      sx={{
                        WebkitLineClamp: 1,
                      }}
                    >
                      Tác giả: {document.author}
                    </OverflowMultiLine>
                  </AlignCenter>
                </Box>
              </CardContent>
            </CardStyled>
          ))}
        </DocumentListWrapper>
      </Box>

      <DocumentUploadModal
        refetch={refetch}
        data={subjectData}
        classId={classId}
        subjectId={subjectId}
        open={openUploadDocumentModal}
        onClose={() => setOpenUploadDocumentModal(false)}
      />
    </form>
  );
};

export default DocumentCard;
