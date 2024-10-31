import { DocumentDto, DocumentListParamsDto, UserRoleDto } from '@apis/generated/data-contracts';
import { useDeleteDocument, useGetDocuments, useUpdateDocument } from '@apis/hooks/document.hook';
import { MAIN_COLOR } from '@common/constant';
import { AlignCenter, OverflowMultiLine, SpaceBetween } from '@common/styled';
import CConfirmModal from '@components/cConfirmModal';
import CInput from '@components/cInput';
import { SearchOutlined } from '@mui/icons-material';

import DownloadIcon from '@mui/icons-material/Download';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, CardContent, Divider, Stack, Typography } from '@mui/material';
import DocumentModal from '@pages/document/components/DocumentModal';
import { CardStyled, DeleteIconStyled, EditIconStyled, ListWrapper } from '@pages/document/styled';
import useAuthStore from '@store/authStore';
import useSubjectStore from '@store/subjectStore';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const DocumentCard = ({ refetch }: { refetch: () => void }) => {
  const { user } = useAuthStore();
  const { subjectId, setSelectedDocument } = useSubjectStore();
  const [search, setSearch] = useState<DocumentListParamsDto>({});
  const [openCreateDocumentModal, setOpenCreateDocumentModal] = useState(false);
  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const { register, handleSubmit } = useForm({});

  const onSubmit = handleSubmit((data) => {
    setSearch(data);
  });

  const { data } = useGetDocuments({
    ...search,
    subjectId: subjectId ? subjectId : undefined,
  });

  const { mutate: updateDocument } = useUpdateDocument();
  const { mutate: deleteDocument } = useDeleteDocument();

  const openPdfFile = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDeleteDocument = (documentId: number) => {
    deleteDocument(documentId, {
      onSuccess() {
        refetch();
        setOpenDeleteUserModal(false);
      },
    });
  };

  const handleUpdateViews = (data: DocumentDto) => {
    updateDocument({
      documentId: data.id,
      payload: {
        ...data,
        views: data.views + 1,
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
              <Button variant="contained" sx={{ width: '140px' }} onClick={() => setOpenCreateDocumentModal(true)}>
                Đăng tải tài liệu
              </Button>
            )}
            <AlignCenter gap={2}>
              <CInput label="Tìm kiếm theo tiêu đề" registerProps={register('title')} showLabel={false} />
              <SearchOutlined onClick={onSubmit} sx={{ width: 32, height: 32 }} />
            </AlignCenter>
          </AlignCenter>
        </SpaceBetween>

        <ListWrapper>
          {data?.map((document) => (
            <CardStyled
              key={document.id}
              onClick={() => {
                setSelectedId(document.id);
                handleUpdateViews(document);
                openPdfFile(document.fileUrl);
              }}
            >
              <CardContent>
                <Box paddingX={2} sx={{ position: 'relative' }}>
                  <OverflowMultiLine
                    variant="h6"
                    lines={2}
                    sx={{
                      fontWeight: 'bold',
                      color: MAIN_COLOR,
                      height: 64,
                      paddingRight: 5,
                    }}
                  >
                    {document.title}
                  </OverflowMultiLine>

                  {user.role === UserRoleDto.RoleAdmin && (
                    <DeleteIconStyled
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(document.id);
                        setOpenDeleteUserModal(true);
                      }}
                    />
                  )}
                  {user.role === UserRoleDto.RoleAdmin && (
                    <EditIconStyled
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDocument(document);
                        setOpenCreateDocumentModal(true);
                        setSelectedId(document.id);
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
        </ListWrapper>
      </Box>

      <DocumentModal
        refetch={refetch}
        open={openCreateDocumentModal}
        onClose={() => setOpenCreateDocumentModal(false)}
      />

      <CConfirmModal
        open={openDeleteUserModal}
        onClose={() => setOpenDeleteUserModal(false)}
        content="Bạn có chắc chắn muốn xoá nó không?"
        onSubmit={() => handleDeleteDocument(selectedId)}
      />
    </form>
  );
};

export default DocumentCard;
