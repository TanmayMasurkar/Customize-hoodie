// import PropTypes from 'prop-types';
// import { styled } from '@mui/material/styles';
// import { Box, Stack, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
// import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
// import MenuIcon from '@mui/icons-material/Menu';

// const NAV_WIDTH = 100;
// const HEADER_MOBILE = 64;
// const HEADER_DESKTOP = 75;

// const StyledRoot = styled(AppBar)(({ theme }) => ({
//   boxShadow: 'none',
//   [theme.breakpoints.up('lg')]: {
//     // width: `calc(100% - ${NAV_WIDTH}px)`,
//   },
// }));

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//   minHeight: HEADER_MOBILE,
//   [theme.breakpoints.up('lg')]: {
//     minHeight: HEADER_DESKTOP,
//     padding: theme.spacing(0, 5),
//   },
// }));

// Header.propTypes = {
//   onOpenNav: PropTypes.func,
// };

// export default function Header({ onOpenNav }) {
//   return (
//     <StyledRoot>
//       <StyledToolbar>
//         <IconButton
//           onClick={onOpenNav}
//           sx={{
//             mr: 1,
//             color: 'text.primary',
//             display: { lg: 'none' },
//           }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" noWrap component="div">
//           HoodieHub
//         </Typography>

//         <Box sx={{ flexGrow: 1 }} />

//         <Stack
//           direction="row"
//           alignItems="center"
//           spacing={{
//             xs: 0.5,
//             sm: 1,
//           }}
//         >
//           <LanguagePopover />
//           <AccountPopover />
//         </Stack>
//       </StyledToolbar>
//     </StyledRoot>
//   );
// }

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
} from '@mui/material';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import MenuIcon from '@mui/icons-material/Menu';

const NAV_WIDTH = 240; // Width of the drawer
const HEADER_MOBILE = 65;
const HEADER_DESKTOP = 65;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  //   [theme.breakpoints.up('lg')]: {
  //   width: `calc(100% - 100px)`,
  // },
  background:"linear-gradient(90deg, rgba(0,196,204,1) 0%, rgba(73,107,221,1) 67%, rgba(125,42,232,1) 100%)",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
  background:"linear-gradient(90deg, rgba(0,196,204,1) 0%, rgba(73,107,221,1) 67%, rgba(125,42,232,1) 100%)",
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: NAV_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: NAV_WIDTH,
  },
}));

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box>
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            HoodieHub
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Stack
            direction="row"
            alignItems="center"
            spacing={{
              xs: 0.5,
              sm: 1,
            }}
          >
            <LanguagePopover />
            <AccountPopover />
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
