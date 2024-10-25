import { useGetDocumentsPopular } from '@apis/hooks/document.hook';
import { MAIN_COLOR } from '@common/constant';
import { AlignCenter, OverflowMultiLine } from '@common/styled';
import COverflowTooltip from '@components/cOverflowTooltip';
import DownloadIcon from '@mui/icons-material/Download';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, CardContent, Divider, Stack, Typography } from '@mui/material';
import { DocumentCard, HoverBox } from '@pages/document/styled';

const DocumentPage = () => {
  const { data } = useGetDocumentsPopular();

  return (
    <Box padding={2}>
      <Typography variant="h6" fontWeight="bold" marginTop={2}>
        TÀI LIỆU NỔI BẬT
      </Typography>

      <Stack marginTop={2} gap={2} flexWrap="wrap">
        {data?.map((doc, index) => (
          <DocumentCard key={index}>
            <CardContent>
              <Box paddingX={2}>
                <OverflowMultiLine
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: MAIN_COLOR,
                    WebkitLineClamp: 2,
                    heigh: 64,
                  }}
                >
                  {doc.title} môn toán lớp 6 năm 2024 năm 2024 năm 2024 năm 2024
                </OverflowMultiLine>

                <AlignCenter marginTop={1}>
                  <FolderIcon sx={{ marginRight: 1, fontSize: 26 }} />
                  <OverflowMultiLine
                    sx={{
                      fontWeight: 'bold',
                      color: MAIN_COLOR,
                      overflow: 'hidden',
                      WebkitLineClamp: 1,
                      heigh: 32,
                    }}
                  >
                    {doc.category}
                  </OverflowMultiLine>
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
                  <COverflowTooltip>Tác giả: {doc.author}</COverflowTooltip>
                </AlignCenter>
              </Box>
            </CardContent>

            <HoverBox className="hover-content">
              <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
                Đọc online
              </Button>
              <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
                Tải xuống
              </Button>
            </HoverBox>
          </DocumentCard>
        ))}
      </Stack>
    </Box>
  );
};

export default DocumentPage;
