import { ClassWithSubjectsDto, SubjectIdDto } from '@apis/generated/data-contracts';
import { useGetSubjects } from '@apis/hooks/documentation.hook';
import { BACKGROUND_COLOR_HOVER, HEADER_HEIGHT, PADDING_SM, PADDING_XS, SIDEBAR_WIDTH } from '@common/constant';
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
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';

import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const DocumentLayout = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [hoveredItem, setHoveredItem] = useState<ClassWithSubjectsDto | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, item: ClassWithSubjectsDto) => {
    setAnchorEl(event.currentTarget);
    setHoveredItem(item);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setHoveredItem(null);
  };

  const handleItemClick = (subject: SubjectIdDto) => {
    navigate(`/documentation/${subject.subjectId}`);
    handleMenuClose();
  };

  const { data = [] } = useGetSubjects();

  const open = Boolean(anchorEl);

  const drawerContent = (
    <List sx={{ padding: 0 }}>
      <ListItem sx={{ backgroundColor: '#2a70b8', color: '#fff' }}>DAN MỤCH TÀI LIỆU HỌC TẬP</ListItem>
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
          <Typography variant="body2" sx={{ color: '#ff9800', marginLeft: 2 }}>
            {item.count}
          </Typography>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <Stack>
        {isMobile && (
          <Toolbar>
            <IconButton sx={{ paddingLeft: 0 }} edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Tài Liệu Học Tập
            </Typography>
          </Toolbar>
        )}

        {!isMobile && (
          <Drawer
            variant="permanent"
            sx={{
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: SIDEBAR_WIDTH,
                boxSizing: 'border-box',
                marginTop: `${HEADER_HEIGHT}px`,
              },
            }}
          >
            {drawerContent}
          </Drawer>
        )}
        {isMobile && (
          <Drawer
            variant="temporary"
            open={mobileOpen}
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
        )}
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
              <MenuItem key={index} onClick={() => handleItemClick(subject)} sx={{ width: 200 }}>
                <Typography variant="body2">{subject.subjectName}</Typography>
                <Typography width="100%" align="right" variant="body2" sx={{ color: '#ff9800' }}>
                  {subject.count}
                </Typography>
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </Stack>

      <Stack marginLeft={isMobile ? 0 : SIDEBAR_WIDTH / 4 - PADDING_SM} padding={isMobile ? 0 : PADDING_XS}>
        <Outlet />
      </Stack>
    </>
  );
};

export default DocumentLayout;
