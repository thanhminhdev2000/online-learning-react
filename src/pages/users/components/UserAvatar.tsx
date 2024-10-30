import { useUpdateUserAvatar } from '@apis/hooks/user.hook';
import { FlexEnd } from '@common/styled';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import { PaperContainer } from '@pages/authentication/styled';
import useAuthStore from '@store/authStore';
import React, { useState } from 'react';

const UserAvatar = () => {
  const { user, login } = useAuthStore();
  const [avatar, setAvatar] = useState<string>(user.avatar);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { mutate, isPending } = useUpdateUserAvatar({ id: user.id });

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
            login(data.user);
          },
        },
      );
    }
  };

  return (
    <Box marginTop={4}>
      <Stack width="100%" gap={2}>
        <Avatar src={avatar} sx={{ width: { xs: 50, sm: 120 }, height: { xs: 50, sm: 120 } }} />

        <PaperContainer variant="outlined" onDrop={handleDrop} onDragOver={handleDragOver}>
          <Box>
            <Typography align="center">Kéo và thả ảnh vào đây</Typography>
            <Typography align="center" color="textSecondary" marginY={1}>
              -hoặc-
            </Typography>
            <Button variant="outlined" component="label" sx={{ textTransform: 'none' }}>
              Chọn ảnh từ máy tính
              <input hidden accept="image/*" type="file" onChange={handleFileChange} />
            </Button>
          </Box>
        </PaperContainer>
      </Stack>

      <FlexEnd marginTop={4}>
        <Button variant="contained" disabled={isPending} onClick={handleUploadClick}>
          Lưu thay đổi
        </Button>
      </FlexEnd>
    </Box>
  );
};

export default UserAvatar;
