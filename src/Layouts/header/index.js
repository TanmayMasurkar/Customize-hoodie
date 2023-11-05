import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@mui/material';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import MenuIcon from '@mui/icons-material/Menu';
import SharePopover from './SharePopover';
import LoginPopover from './LoginPopover';

const NAV_WIDTH = 300; 
const HEADER_MOBILE = 65;
const HEADER_DESKTOP = 65;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  background: "linear-gradient(90deg, rgba(0,196,204,1) 0%, rgba(73,107,221,1) 67%, rgba(125,42,232,1) 100%)",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 2),
  },
  background: "linear-gradient(90deg, rgba(0,196,204,1) 0%, rgba(73,107,221,1) 67%, rgba(125,42,232,1) 100%)",
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: NAV_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: NAV_WIDTH,
    position: "relative",
    height: "100%",
  },
}));

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const loginData = true
  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <StyledRoot>
        <StyledToolbar>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              mr: 1,
              color: 'text.primary',
              display: { lg: 'none' },
            }}
          >
            <MenuIcon sx={{color:"#fff"}}/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            HoodieHub
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Stack
            direction="row"
            alignItems="center"
            spacing={{
              xs: 1,
              sm: 1.5,
            }}
          >

            {
              loginData ? <AccountPopover /> : <LoginPopover/>
            }
            
            <SharePopover/>
          </Stack>
        </StyledToolbar>
      </StyledRoot>
      <StyledDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              {/* Add an icon here */} 
            </ListItemIcon>
            <ListItemText primary="Menu Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {/* Add an icon here */}
            </ListItemIcon>
            <ListItemText primary="Menu Item 2" />
          </ListItem>
          {/* Add more menu items as needed */}
        </List>
      </StyledDrawer>
    </Box>
  );
}


