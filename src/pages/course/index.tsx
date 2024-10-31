import { UserRoleDto } from '@apis/generated/data-contracts';
import { useDeleteCourse, useGetCourses } from '@apis/hooks/course.hook';
import { MAIN_COLOR } from '@common/constant';
import { AlignCenter, OverflowMultiLine, SpaceBetween } from '@common/styled';
import CInput from '@components/cInput';
import { SearchOutlined } from '@mui/icons-material';
import { Box, Button, CardContent, Typography } from '@mui/material';
import CourseModal from '@pages/course/components/CourseModal';
import { CardStyled, ListWrapper } from '@pages/document/styled';
import useAuthStore from '@store/authStore';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const CoursePage = () => {
  const { user } = useAuthStore();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [openCreateCourseModal, setOpenCreateCourseModal] = useState(false);
  const [openDeleteCourseModal, setOpenDeleteCourseModal] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const { register, handleSubmit } = useForm({
    values: {
      search: '',
    },
  });

  const { data, refetch } = useGetCourses({
    search,
  });

  const onSubmit = handleSubmit((data) => {
    setSearch(data.search);
  });

  const { mutate } = useDeleteCourse();

  return (
    <form onSubmit={onSubmit}>
      <Box padding={2}>
        <SpaceBetween>
          <Box>
            <Typography variant="h6" marginTop={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
              KHOÁ HỌC NỔI BẬT
            </Typography>
          </Box>

          <AlignCenter gap={2}>
            {user.role === UserRoleDto.RoleAdmin && (
              <Button variant="contained" sx={{ width: '140px' }} onClick={() => setOpenCreateCourseModal(true)}>
                Tạo khoá học
              </Button>
            )}
            <AlignCenter gap={2}>
              <CInput label="Tìm kiếm theo tiêu đề" registerProps={register('search')} showLabel={false} />
              <SearchOutlined onClick={onSubmit} sx={{ width: 32, height: 32 }} />
            </AlignCenter>
          </AlignCenter>
        </SpaceBetween>

        <ListWrapper>
          {data?.data?.map((document) => (
            <CardStyled
              key={document.id}
              onClick={() => {
                // setSelectedId(document.id);
                // handleUpdateViews(document);
                // openPdfFile(document.fileUrl);
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
                </Box>
              </CardContent>
            </CardStyled>
          ))}
        </ListWrapper>
      </Box>

      <CourseModal refetch={refetch} open={openCreateCourseModal} onClose={() => setOpenCreateCourseModal(false)} />

      {/* <CConfirmModal
        open={openDeleteCourseModal}
        onClose={() => setOpenDeleteCourseModal(false)}
        content="Bạn có chắc chắn muốn xoá nó không?"
        onSubmit={() => handleDeleteCourse(selectedId)}
      /> */}
    </form>
  );
};

export default CoursePage;
