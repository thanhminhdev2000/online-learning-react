import { UserDetailDto, UserGenderDto, UserListParamsDto, UserRoleDto } from '@api-swagger/data-contracts';
import { DATE_FORMAT_VN, LIMIT } from '@common/constant';
import { SpaceBetween } from '@common/styled';
import CConfirmModal from '@components/cConfirmModal';
import {
  Box,
  Button,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import SearchForm from '@pages/users/components/SearchForm';
import UserModal from '@pages/users/components/UserModal';
import { userSearchInit } from '@pages/users/constant';
import { PaperStyled, TableContainerStyled, TableRowStyled } from '@pages/users/styled';
import { userInit } from '@store/constant';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDeleteUser, useGetUsers } from '../../api-hooks/user.hook';

const UserManagePage = () => {
  const [rowData, setRowData] = useState(userInit);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(LIMIT);
  const [search, setSearch] = useState<UserListParamsDto>(userSearchInit);
  const [selectedId, setSelectedId] = useState(0);
  const { mutate } = useDeleteUser();

  const { data: response, refetch, isFetching } = useGetUsers({ ...search, page, limit });
  const { data, paging } = response || {};
  const { limit: limitPerPage = 1, total = 0 } = paging || {};

  const dividedPage = Math.floor(total / limitPerPage);
  const totalPage = total % limitPerPage == 0 ? dividedPage : dividedPage + 1;

  const handleSearch = (data: UserListParamsDto) => {
    setSearch(data);
  };

  const handleDeleteUser = (id: number) => {
    mutate(id, {
      onSuccess() {
        refetch();
        setOpenDeleteUserModal(false);
      },
    });
  };

  useEffect(() => {
    if (total && page > totalPage) {
      setPage(totalPage);
    }
  }, [total, page, totalPage]);

  return (
    <Container maxWidth="lg">
      <PaperStyled>
        <SpaceBetween>
          <Typography variant="h6" fontWeight="bold" textTransform="uppercase">
            Quản lý người dùng
          </Typography>

          <Button variant="contained" size="small" onClick={() => setOpenUserModal(true)}>
            Đăng ký
          </Button>
        </SpaceBetween>

        <SearchForm onSearch={handleSearch} isFetching={isFetching} />

        <TableContainerStyled>
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
                <TableRowStyled
                  key={row.id}
                  onClick={() => {
                    setOpenUserModal(true);
                    setRowData(row);
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
                        setOpenDeleteUserModal(true);
                        setSelectedId(row.id);
                      }}
                    >
                      Xoá
                    </Button>
                  </TableCell>
                </TableRowStyled>
              ))}
            </TableBody>
          </Table>

          {data?.length == 0 && (
            <Box height={100} display="flex" justifyContent="center" alignItems="center">
              <Typography>Không có dữ liệu</Typography>
            </Box>
          )}
        </TableContainerStyled>

        <Stack marginTop={4} justifyContent="end">
          <Select sx={{ height: 32 }} value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
            <MenuItem value={LIMIT}>{LIMIT}</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
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
        />

        <CConfirmModal
          open={openDeleteUserModal}
          onClose={() => setOpenDeleteUserModal(false)}
          content="Bạn có chắc chắn muốn xoá nó không?"
          onSubmit={() => handleDeleteUser(selectedId)}
        />
      </PaperStyled>
    </Container>
  );
};

export default UserManagePage;
