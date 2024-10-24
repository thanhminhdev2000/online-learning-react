import { HEADER_HEIGHT } from '@common/constant';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover,
  Stack,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { sidebarItems } from '@pages/documentation/constant';
import { SidebarItem } from '@pages/documentation/type';
import React, { useState } from 'react';

function DocumentationPage() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [hoveredItem, setHoveredItem] = useState<SidebarItem | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, item: SidebarItem) => {
    setAnchorEl(event.currentTarget);
    setHoveredItem(item);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setHoveredItem(null);
  };

  const open = Boolean(anchorEl);

  const drawerContent = (
    <List>
      {sidebarItems.map((item, index) => (
        <ListItem
          key={index}
          onMouseEnter={(event) => handlePopoverOpen(event, item)}
          onMouseLeave={handlePopoverClose}
        >
          <ListItemText primary={item.label} />
          <Typography variant="body2" sx={{ color: '#ff9800', marginLeft: 2 }}>
            {item.count}
          </Typography>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Stack>
      <Toolbar>
        {isMobile && (
          <>
            <IconButton edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Tài Liệu Học Tập
            </Typography>
          </>
        )}
      </Toolbar>

      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
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
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box padding={1}>
          <Typography variant="h6">Chọn môn học</Typography>
          <List>
            {hoveredItem?.subjects?.map((subject, index) => (
              <ListItem key={index}>
                <Typography variant="body2">{subject}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Popover>
    </Stack>
  );
}

export default DocumentationPage;
