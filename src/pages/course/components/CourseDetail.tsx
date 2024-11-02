import { LessonDto, UserRoleDto } from '@api-swagger/data-contracts';
import { AlignCenter, SpaceBetween } from '@common/styled';
import CConfirmModal from '@components/cConfirmModal';
import NoDataAvailable from '@components/NoData';
import { useGetCourse } from '@hooks/course.hook';
import { useDeleteLesson } from '@hooks/lesson.hook';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box, Button, Collapse, Stack, Typography } from '@mui/material';
import LessonModal from '@pages/course/components/LessonModal';
import { ImageStyled } from '@pages/course/styled';
import useAuthStore from '@store/authStore';
import useClassStore from '@store/classStore';
import { convertSecondsToHours, convertSecondsToMinutes } from '@utils/index';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const LessonDetailPage = () => {
  const { id } = useParams();
  const { user } = useAuthStore();
  const { setSelectedLesson } = useClassStore();
  const [openLessonModal, setOpenLessonModal] = useState(false);
  const [openDeleteLessonModal, setOpenDeleteLessonModal] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const { data } = useGetCourse(Number(id) || 0);

  const [openStates, setOpenStates] = useState<boolean[]>(Array(data?.lessons?.length).fill(false));

  const totalCourseDuration = data?.lessons?.reduce((acc, cur) => acc + cur.duration, 0) || 0;

  const handleToggle = (index: number) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const { mutate } = useDeleteLesson();

  const handleDeleteLesson = (courseId: number) => {
    mutate(courseId, {
      onSuccess() {
        setOpenDeleteLessonModal(false);
      },
    });
  };

  return (
    <Stack marginTop={5} gap={10}>
      <Stack flexDirection="column" gap={4} width="70%">
        <Typography variant="h4" fontWeight="bold">
          {data?.title}
        </Typography>

        <Typography>{data?.description}</Typography>

        <Stack gap={2}>
          Được tạo bởi:
          <Typography fontWeight="bold">{data?.instructor}</Typography>
        </Stack>

        <SpaceBetween>
          <Typography variant="h5" fontWeight="bold">
            Nội dung khoá học
          </Typography>

          <Button variant="contained" onClick={() => setOpenLessonModal(true)}>
            Thêm bài học
          </Button>
        </SpaceBetween>

        <Box>
          {data?.lessons?.map((item, index) => (
            <Box key={index} padding={2} sx={{ border: '1px solid #ddd', marginBottom: 1 }}>
              <SpaceBetween>
                <Typography fontWeight="bold" sx={{ cursor: 'pointer' }} onClick={() => handleToggle(index)}>
                  Bài số {index + 1}: {item?.title}
                </Typography>

                <Stack paddingX={2} gap={2}>
                  {user.role === UserRoleDto.RoleAdmin && (
                    <DeleteOutlineIcon
                      sx={{ cursor: 'pointer' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(item.id);
                        setOpenDeleteLessonModal(true);
                      }}
                    />
                  )}
                  {user.role === UserRoleDto.RoleAdmin && (
                    <EditOutlinedIcon
                      sx={{ cursor: 'pointer' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedLesson(item);
                        setOpenLessonModal(true);
                        setSelectedId(item.id);
                      }}
                    />
                  )}

                  <Typography fontWeight="bold">{convertSecondsToMinutes(item.duration)}</Typography>
                </Stack>
              </SpaceBetween>

              <Collapse in={openStates[index]}>
                <Box sx={{ padding: 2 }}>
                  <video controls width="100%">
                    <source src={item.videoUrl} type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video.
                  </video>
                </Box>
              </Collapse>
            </Box>
          ))}

          <NoDataAvailable length={data?.lessons?.length || 0} />
        </Box>
      </Stack>

      <Stack flexDirection="column" width="30%">
        <ImageStyled src={data?.thumbnailUrl} alt="Ảnh bìa" />

        <Stack
          flexDirection="column"
          gap={2}
          sx={{
            marginY: 4,
          }}
        >
          <AlignCenter gap={2}>
            <OndemandVideoIcon /> {convertSecondsToHours(totalCourseDuration)} giờ video theo yêu cầu
          </AlignCenter>

          <AlignCenter gap={2}>
            <PhoneAndroidIcon /> Truy cập trên di động và TV
          </AlignCenter>

          <AlignCenter gap={2}>
            <WorkspacePremiumIcon /> Chứng chỉ hoàn thành
          </AlignCenter>
        </Stack>

        <SpaceBetween>
          <Typography variant="h5" fontWeight="bold">
            {data?.price.toLocaleString()} VND
          </Typography>

          <Button variant="contained" size="medium">
            Mua ngay
          </Button>
        </SpaceBetween>
      </Stack>

      <LessonModal
        length={data?.lessons?.length || 0}
        open={openLessonModal}
        onClose={() => {
          setSelectedLesson({} as LessonDto);
          setOpenLessonModal(false);
        }}
      />

      <CConfirmModal
        open={openDeleteLessonModal}
        onClose={() => setOpenDeleteLessonModal(false)}
        content="Bạn có chắc chắn muốn xoá nó không?"
        onSubmit={() => handleDeleteLesson(selectedId)}
      />
    </Stack>
  );
};

export default LessonDetailPage;
