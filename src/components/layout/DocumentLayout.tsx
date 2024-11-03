import { ClassDto, SubjectDto } from '@api-swagger/data-contracts';
import { BACKGROUND_COLOR_HOVER, COUNT_COLOR, MAIN_COLOR, SIDEBAR_WIDTH } from '@common/constant';
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
import { useGetClasses } from '../../api-hooks/document.hook';
import useSubjectStore from '../../store/classStore';

import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const DocumentLayout = () => {
  const navigate = useNavigate();
  const { setClassId, setSubjectId } = useSubjectStore();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [hoveredItem, setHoveredItem] = useState<ClassDto | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, item: ClassDto) => {
    setAnchorEl(event.currentTarget);
    setHoveredItem(item);
    setClassId(item.id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setHoveredItem(null);
  };

  const handleItemClick = (subject: SubjectDto) => {
    setSubjectId(subject.id);
    handleMenuClose();
    handleDrawerToggle();
  };

  const { data = [] } = useGetClasses();

  const open = Boolean(anchorEl);

  const drawerContent = (
    <List sx={{ padding: 0 }}>
      <ListItem sx={{ backgroundColor: MAIN_COLOR, color: 'white', fontWeight: 'bold' }}>DANH MỤC TÀI LIỆU</ListItem>
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
          <ListItemText primary={item.name} />
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
                <Typography>{subject.name}</Typography>
                <Typography width="100%" align="right" sx={{ color: '#ff9800' }}>
                  {subject.count}
                </Typography>
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </Stack>

      <Box>
        <Outlet />
      </Box>
    </Stack>
  );
};

export default DocumentLayout;
