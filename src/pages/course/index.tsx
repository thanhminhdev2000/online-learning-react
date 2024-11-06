import { useDeleteCourse, useGetCourses } from '@api-hooks/course.hook';
import { CourseDto, UserRoleDto } from '@api-swagger/data-contracts';
import {
  AlignCenter,
  DeleteIconStyled,
  EditIconStyled,
  ImageStyled,
  ItemCenter,
  MaxThreeElement,
  OverflowMultiLine,
  SpaceBetween,
} from '@common/styled';
import CConfirmModal from '@components/cConfirmModal';
import CInput from '@components/cInput';
import ClassMenu from '@components/layout/ClassMenu';
import NoDataAvailable from '@components/NoData';
import { SearchOutlined } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack, Typography } from '@mui/material';
import CourseModal from '@pages/course/components/CourseModal';
import useAuthStore from '@store/authStore';
import useClassStore from '@store/classStore';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CoursePage = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { setSelectedCourse } = useClassStore();
  const [search, setSearch] = useState('');
  const [openCourseModal, setOpenCourseModal] = useState(false);
  const [openDeleteCourseModal, setOpenDeleteCourseModal] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const { register, handleSubmit } = useForm({
    values: {
      search: '',
    },
  });

  const { data } = useGetCourses({
    search,
  });

  const onSubmit = handleSubmit((data) => {
    setSearch(data.search);
  });

  const { mutate } = useDeleteCourse();

  const handleDeleteCourse = (courseId: number) => {
    mutate(courseId, {
      onSuccess() {
        setOpenDeleteCourseModal(false);
      },
    });
  };

  return (
    <ClassMenu>
      <form onSubmit={onSubmit}>
        <Box padding={2}>
          <SpaceBetween>
            <Box>
              <Typography variant="h6" marginTop={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
                KHOÁ HỌC NỔI BẬT
              </Typography>
            </Box>

            <ItemCenter gap={2}>
              {user.role === UserRoleDto.RoleAdmin && (
                <>
                  <Button
                    variant="contained"
                    sx={{ display: { xs: 'none', md: 'block' } }}
                    onClick={() => setOpenCourseModal(true)}
                  >
                    Đăng tải
                  </Button>

                  <AddIcon
                    fontSize="large"
                    sx={{ cursor: 'pointer', display: { xs: 'block', md: 'none' } }}
                    onClick={() => setOpenCourseModal(true)}
                  />
                </>
              )}
              <AlignCenter gap={2}>
                <CInput label="Tìm kiếm theo tiêu đề" registerProps={register('search')} showLabel={false} />
                <SearchOutlined onClick={onSubmit} sx={{ cursor: 'pointer', width: 32, height: 32 }} />
              </AlignCenter>
            </ItemCenter>
          </SpaceBetween>

          <MaxThreeElement>
            {data?.data?.map((course) => (
              <Box
                key={course.id}
                onClick={() => {
                  console.log(course.id);
                  navigate(`/courses/${course.id}`);
                  setSelectedId(course.id);
                }}
              >
                <Box sx={{ position: 'relative', border: '1px solid #ccc', cursor: 'pointer', paddingBottom: 5 }}>
                  <ImageStyled src={course.thumbnailUrl} alt="Ảnh bìa" />

                  <Stack flexDirection="column" gap={2} paddingX={3} height={200}>
                    <OverflowMultiLine
                      variant="h6"
                      lines={2}
                      sx={{
                        fontWeight: 'bold',
                        height: 64,
                        paddingRight: 5,
                      }}
                    >
                      {course.title}
                    </OverflowMultiLine>
                    <OverflowMultiLine lines={3}>{course?.description}</OverflowMultiLine>

                    <Stack gap={1}>
                      Giáo viên: <Typography fontWeight="bold">{course.instructor}</Typography>
                    </Stack>

                    <Stack gap={1}>
                      Giá: <Typography fontWeight="bold">{course.price.toLocaleString()} VND</Typography>
                    </Stack>
                  </Stack>

                  <Box paddingX={2}>
                    {user.role === UserRoleDto.RoleAdmin && (
                      <DeleteIconStyled
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedId(course.id);
                          setOpenDeleteCourseModal(true);
                        }}
                      />
                    )}
                    {user.role === UserRoleDto.RoleAdmin && (
                      <EditIconStyled
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCourse(course);
                          setOpenCourseModal(true);
                          setSelectedId(course.id);
                        }}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            ))}
          </MaxThreeElement>
          <NoDataAvailable length={data?.data?.length || 0} />
        </Box>

        <CourseModal
          open={openCourseModal}
          onClose={() => {
            setSelectedCourse({} as CourseDto);
            setOpenCourseModal(false);
          }}
        />

        <CConfirmModal
          open={openDeleteCourseModal}
          onClose={() => setOpenDeleteCourseModal(false)}
          content="Bạn có chắc chắn muốn xoá nó không?"
          onSubmit={() => handleDeleteCourse(selectedId)}
        />
      </form>
    </ClassMenu>
  );
};

export default CoursePage;
