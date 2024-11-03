import { useActiveCourseForUser, useGetCourse } from '@api-hooks/course.hook';
import { useDeleteLesson } from '@api-hooks/lesson.hook';
import { LessonDto, UserRoleDto } from '@api-swagger/data-contracts';
import { AlignCenter, ImageStyled, OverflowMultiLine, SpaceBetween } from '@common/styled';
import CConfirmModal from '@components/cConfirmModal';
import CInput from '@components/cInput';
import NoDataAvailable from '@components/NoData';
import PaymentModal from '@components/PaymentModal';
import { zodResolver } from '@hookform/resolvers/zod';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SendIcon from '@mui/icons-material/Send';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box, Button, Collapse, Divider, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import LessonModal from '@pages/course/components/LessonModal';
import { activeCourseForUserSchema } from '@pages/course/type';
import useAuthStore from '@store/authStore';
import useClassStore from '@store/classStore';
import { convertSecondsToHours, convertSecondsToMinutes } from '@utils/index';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const LessonDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, getUser } = useAuthStore();
  const { setSelectedLesson } = useClassStore();
  const [openLessonModal, setOpenLessonModal] = useState(false);
  const [openDeleteLessonModal, setOpenDeleteLessonModal] = useState(false);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(activeCourseForUserSchema),
    values: {
      email: '',
    },
  });

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

  const { mutate: deleteLesson } = useDeleteLesson();
  const { mutate: activeCourseForUser } = useActiveCourseForUser();

  const handleDeleteLesson = (courseId: number) => {
    deleteLesson(courseId, {
      onSuccess() {
        setOpenDeleteLessonModal(false);
      },
    });
  };

  console.log('out', watch());

  const handleActiveCourseForUser = handleSubmit((formData) => {
    console.log('formData', formData);
    activeCourseForUser(
      {
        email: formData.email,
        courseId: Number(id),
      },
      {
        onSuccess() {
          reset();
        },
      },
    );
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const user = getUser();
    if (!user.id) {
      toast.warn('Bạn cần đăng nhập để xem chi tiết');
      navigate('/login');
    }
  }, [user, navigate, getUser]);

  return (
    <Stack marginTop={5} gap={10}>
      <Stack flexDirection="column" gap={4} width={{ xs: '100%', md: '70%' }}>
        <Stack gap={{ xs: 2, md: 5 }}>
          <Box width={{ xs: '60%', md: '100%' }}>
            <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight="bold">
              {data?.title}
            </Typography>

            <OverflowMultiLine lines={10}>{data?.description}</OverflowMultiLine>

            <Stack gap={2}>
              Được tạo bởi:
              <Typography fontWeight="bold">{data?.instructor}</Typography>
            </Stack>
          </Box>

          <Stack flexDirection="column" width="40%" display={{ xs: 'block', md: 'none' }}>
            <ImageStyled src={data?.thumbnailUrl} alt="Ảnh bìa" />

            <Stack
              flexDirection="column"
              gap={1}
              sx={{
                marginY: 2,
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

            {user.role === UserRoleDto.RoleAdmin ? (
              <AlignCenter gap={2}>
                <CInput
                  label="User email"
                  showLabel={false}
                  registerProps={register('email')}
                  errorMsg={errors.email?.message}
                />

                <SendIcon fontSize="medium" sx={{ cursor: 'pointer' }} onClick={handleActiveCourseForUser} />
              </AlignCenter>
            ) : (
              <>
                {!data?.isActive && (
                  <SpaceBetween>
                    <Typography variant="h6" fontWeight="bold">
                      {data?.price.toLocaleString()}
                    </Typography>

                    <AddShoppingCartIcon onClick={() => setOpenPaymentModal(true)} sx={{ cursor: 'pointer' }} />
                  </SpaceBetween>
                )}
              </>
            )}
          </Stack>
        </Stack>

        <Divider sx={{ paddingY: 3 }} />

        <SpaceBetween>
          <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight="bold">
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
                  {data.isActive ? (
                    <video controls width="100%">
                      <source src={item.videoUrl} type="video/mp4" />
                      Trình duyệt của bạn không hỗ trợ video.
                    </video>
                  ) : (
                    <>Bạn cần đăng ký khoá học</>
                  )}
                </Box>
              </Collapse>
            </Box>
          ))}

          <NoDataAvailable length={data?.lessons?.length || 0} />
        </Box>
      </Stack>

      <Stack flexDirection="column" width="30%" display={{ xs: 'none', md: 'block' }}>
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

        {user.role === UserRoleDto.RoleAdmin ? (
          <Stack alignItems="end" gap={2}>
            <TextField placeholder="User email" />

            <Button variant="contained" sx={{ width: 120, height: 35 }} onClick={handleActiveCourseForUser}>
              Kích hoạt
            </Button>
          </Stack>
        ) : (
          <>
            {!data?.isActive && (
              <SpaceBetween>
                <Typography variant="h6" fontWeight="bold">
                  {data?.price.toLocaleString()}
                </Typography>

                <Button variant="contained" onClick={() => setOpenPaymentModal(true)}>
                  Mua ngay
                </Button>
              </SpaceBetween>
            )}
          </>
        )}
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

      <PaymentModal open={openPaymentModal} onClose={() => setOpenPaymentModal(false)} />
    </Stack>
  );
};

export default LessonDetailPage;
