import { ClassWithSubjectsDto, SubjectIdDto } from '@apis/generated/data-contracts';
import { useGetSubjects } from '@apis/hooks/document.hook';
import { BACKGROUND_COLOR_HOVER, COUNT_COLOR, SIDEBAR_WIDTH } from '@common/constant';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import DocumentCard from '@pages/document/components/DocumentCard';
import { ListItemStyled } from '@pages/document/styled';
import useSubjectStore from '@store/subjectStore';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DocumentPage = () => {
  const { setClassId, setSubjectId } = useSubjectStore();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [hoveredItem, setHoveredItem] = useState<ClassWithSubjectsDto | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, item: ClassWithSubjectsDto) => {
    setAnchorEl(event.currentTarget);
    setHoveredItem(item);
    setClassId(item.classId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setHoveredItem(null);
  };

  const handleItemClick = (subject: SubjectIdDto) => {
    setSubjectId(subject.subjectId);
    handleMenuClose();
    handleDrawerToggle();
  };

  const { data = [], refetch } = useGetSubjects();

  const handleReset = () => {
    setClassId(0);
    setSubjectId(0);
    handleMenuClose();
    handleDrawerToggle();
  };

  const open = Boolean(anchorEl);

  const drawerContent = (
    <List sx={{ padding: 0 }}>
      <ListItemStyled onClick={handleReset}>DANH MỤC TÀI LIỆU</ListItemStyled>
      {data.map((item, index) => (
        <ListItem
          sx={{
            cursor: 'pointer',
            ':hover': {
              backgroundColor: BACKGROUND_COLOR_HOVER,
            },
          }}
          key={index}
          onClick={(event) => handleMenuOpen(event, item)}
        >
          <ListItemText primary={item.className} />
          <Typography sx={{ color: COUNT_COLOR, marginLeft: 2 }}>{item.count}</Typography>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Stack flexDirection="column">
      <Stack>
        <Toolbar>
          <IconButton sx={{ paddingLeft: 0 }} edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" onClick={() => navigate('/')}>
            DANH MỤC TÀI LIỆU
          </Typography>
        </Toolbar>

        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: SIDEBAR_WIDTH,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawerContent}
        </Drawer>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Box padding={1}>
            <Typography variant="h6">Chọn môn học</Typography>
            {hoveredItem?.subjects?.map((subject, index) => (
              <MenuItem key={index} onClick={() => handleItemClick(subject)} sx={{ width: 180 }}>
                <Typography>{subject.subjectName}</Typography>
                <Typography width="100%" align="right" sx={{ color: '#ff9800' }}>
                  {subject.count}
                </Typography>
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </Stack>

      <DocumentCard refetch={refetch} />
    </Stack>
  );
};

export default DocumentPage;
