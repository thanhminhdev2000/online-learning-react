import { DocumentListParamsDto, UserRoleDto } from '@apis/generated/data-contracts';
import { useGetDocuments } from '@apis/hooks/document.hook';
import { MAIN_COLOR } from '@common/constant';
import { AlignCenter, OverflowMultiLine, SpaceBetween } from '@common/styled';
import CInput from '@components/cInput';
import { SearchOutlined } from '@mui/icons-material';
import DownloadIcon from '@mui/icons-material/Download';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { DocumentListWrapper } from '@pages/document/styled';
import useAuthStore from '@store/authStore';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const DocumentCard = ({ subjectId, onOpen }: { subjectId?: number; onOpen?: () => void }) => {
  const { user } = useAuthStore();
  const [search, setSearch] = useState<DocumentListParamsDto>({});

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    setSearch(data);
  });

  const { data } = useGetDocuments({
    ...search,
    subjectId,
  });

  return (
    <form onSubmit={onSubmit}>
      <Box padding={2}>
        <SpaceBetween>
          <Box>
            <Typography variant="h6" fontWeight="bold" marginTop={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
              TÀI LIỆU NỔI BẬT
            </Typography>
          </Box>

          <AlignCenter gap={2}>
            {user.role === UserRoleDto.RoleAdmin && (
              <Button variant="contained" sx={{ width: '140px' }} onClick={onOpen}>
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
          {data?.map((doc) => (
            <Card key={doc.id} sx={{ height: 220 }}>
              <CardContent>
                <Box paddingX={2}>
                  <OverflowMultiLine
                    variant="h6"
                    lines={2}
                    sx={{
                      fontWeight: 'bold',
                      color: MAIN_COLOR,
                      height: 64,
                    }}
                  >
                    {doc.title}
                  </OverflowMultiLine>

                  <AlignCenter marginTop={1}>
                    <FolderIcon sx={{ marginRight: 1, fontSize: 26 }} />
                    <OverflowMultiLine sx={{ textAlign: 'center' }}>{doc.category}</OverflowMultiLine>
                  </AlignCenter>
                </Box>

                <Divider sx={{ paddingY: 2 }} />

                <Box paddingX={2}>
                  <AlignCenter justifyContent="space-between" marginTop={4}>
                    <Stack gap={1}>
                      <VisibilityIcon />
                      <Typography>{doc.views}</Typography>
                    </Stack>

                    <Stack gap={1}>
                      <DownloadIcon />
                      <Typography>{doc.downloads}</Typography>
                    </Stack>
                  </AlignCenter>

                  <AlignCenter marginTop={1} gap={1}>
                    <PersonIcon />
                    <OverflowMultiLine
                      sx={{
                        WebkitLineClamp: 1,
                      }}
                    >
                      Tác giả: {doc.author}
                    </OverflowMultiLine>
                  </AlignCenter>
                </Box>
              </CardContent>
            </Card>
          ))}
        </DocumentListWrapper>
      </Box>
    </form>
  );
};

export default DocumentCard;
