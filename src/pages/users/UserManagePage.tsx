import { UserDetailDto, UserGenderDto, UserListParamsDto, UserRoleDto } from '@apis/generated/data-contracts';
import { useDeleteUser, useGetUsers } from '@apis/hooks/user.hook';
import { DATE_FORMAT_VN } from '@common/constant';
import { FlexEnd } from '@common/styled';
import {
  Box,
  Button,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import SearchForm from '@pages/users/components/SearchForm';
import UserModal from '@pages/users/components/UserModal';
import { userSearchInit } from '@pages/users/constant';
import { userInit } from '@store/constant';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const UserManagePage = () => {
  const [rowData, setRowData] = useState(userInit);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [search, setSearch] = useState<UserListParamsDto>(userSearchInit);
  const { mutate } = useDeleteUser();

  const { data: response, refetch } = useGetUsers({ ...search, page, limit });
  const { data, paging } = response || {};
  const { limit: limitPerPage = 1, totalCount = 0 } = paging || {};

  const dividedPage = Math.floor(totalCount / limitPerPage);
  const totalPage = totalCount % limitPerPage == 0 ? dividedPage : dividedPage + 1;

  const handleSearch = (data: UserListParamsDto) => {
    setSearch(data);
  };

  const handleDeleteUser = (userId: number) => {
    mutate(userId, {
      onSuccess() {
        refetch();
      },
    });
  };

  useEffect(() => {
    if (totalCount && page > totalPage) {
      setPage(totalPage);
    }
  }, [totalCount, page, totalPage]);

  return (
    <Container maxWidth="lg">
      <Paper sx={{ minHeight: 'calc(100vh - 48px)', padding: 4, position: 'relative' }}>
        <Typography variant="h6" fontWeight="bold" textTransform="uppercase">
          Quản lý người dùng
        </Typography>

        <FlexEnd marginTop={4} sx={{ position: 'absolute', right: 16, top: 0 }}>
          <Button variant="contained" size="small" onClick={() => setOpenUserModal(true)}>
            Đăng ký
          </Button>
        </FlexEnd>

        <SearchForm onSearch={handleSearch} />

        <TableContainer sx={{ border: '1px solid #ccc', marginTop: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Họ và tên</TableCell>
                <TableCell>Giới tính</TableCell>
                <TableCell>Ngày sinh</TableCell>
                <TableCell>Vai trò</TableCell>
                <TableCell sx={{ width: 50 }}></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data?.map((row) => (
                <TableRow
                  key={row.id}
                  onClick={() => {
                    setOpenUserModal(true);
                    setRowData(row);
                  }}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.fullName}</TableCell>
                  <TableCell>{row.gender === UserGenderDto.GenderMale ? 'Nam' : 'Nữ'}</TableCell>
                  <TableCell>{dayjs(row.dateOfBirth).format(DATE_FORMAT_VN)}</TableCell>
                  <TableCell>{row.role === UserRoleDto.RoleAdmin ? 'Quản trị viên' : 'Người dùng'}</TableCell>
                  <TableCell>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteUser(row.id);
                      }}
                    >
                      Xoá
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {data?.length == 0 && (
            <Box height={100} display="flex" justifyContent="center" alignItems="center">
              <Typography>Không có dữ liệu</Typography>
            </Box>
          )}
        </TableContainer>

        <Stack marginTop={2} justifyContent="end">
          <Select sx={{ height: 32 }} value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>

          <Pagination
            page={page}
            onChange={(_, newPage) => {
              setPage(newPage);
            }}
            count={totalPage}
            variant="outlined"
            shape="rounded"
          />
        </Stack>

        <UserModal
          open={openUserModal}
          onClose={() => {
            setOpenUserModal(false);
            setRowData(userInit);
          }}
          data={rowData as UserDetailDto}
          refetch={refetch}
        />
      </Paper>
    </Container>
  );
};

export default UserManagePage;
