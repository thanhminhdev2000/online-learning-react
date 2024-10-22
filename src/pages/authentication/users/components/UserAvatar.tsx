import { useUpdateUserAvatar } from '@apis/hooks/user.hook';
import { FlexEnd } from '@common/styled';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import useAuthStore from '@store/authStore';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { PaperContainer } from '../styled';

const UserAvatar = () => {
  const { user, login } = useAuthStore();
  const [avatar, setAvatar] = useState<string | null>(user?.avatar as string);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { mutate } = useUpdateUserAvatar({ userId: user?.id as number });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setAvatar(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setAvatar(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      mutate(
        { avatar: selectedFile },
        {
          onSuccess(data) {
            toast.success(data.message);
            login(data.user);
          },
          onError(data) {
            toast.error(data.error);
          },
        },
      );
    }
  };

  return (
    <Box marginTop={2}>
      <Stack width="100%" gap={2}>
        <Avatar src={avatar as string} sx={{ width: 150, height: 150 }} />

        <PaperContainer variant="outlined" onDrop={handleDrop} onDragOver={handleDragOver}>
          <Box>
            <Typography align="center">Kéo và thả ảnh vào đây</Typography>
            <Typography align="center" color="textSecondary" marginY={1}>
              -hoặc-
            </Typography>
            <Button variant="outlined" component="label">
              Chọn ảnh từ máy tính của bạn
              <input hidden accept="image/*" type="file" onChange={handleFileChange} />
            </Button>
          </Box>
        </PaperContainer>
      </Stack>

      <FlexEnd marginTop={2}>
        <Button variant="contained" onClick={handleUploadClick}>
          Lưu thay đổi
        </Button>
      </FlexEnd>
    </Box>
  );
};

export default UserAvatar;
