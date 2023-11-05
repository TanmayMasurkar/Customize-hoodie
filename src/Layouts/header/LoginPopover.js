import { useState } from "react";
import { alpha, useTheme } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Button,
  Modal, // Import the Modal component
} from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Sign up",
    icon: "eva:home-fill",
  },
  {
    label: "Sign in",
    icon: "eva:person-fill",
  },
];

// ----------------------------------------------------------------------

export default function LoginPopover() {
  const [open, setOpen] = useState(false); 
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => {
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false); 
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          py: 1,
          bgcolor: "#8C62EA",
          color: "#fff",
          fontWeight: "bold",
          border: "none",
          "&:hover": {
            bgcolor: "#8C62EA",
            color: "#fff",
            border: "none",
          },
        }}
      >
        {isMobileView ? <PersonOutlineOutlinedIcon sx={{ color: "#fff" }} /> : "Login"}
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Stack sx={{ p: 1 }}>
            {/* {MENU_OPTIONS.map((option) => (
              <MenuItem key={option.label} onClick={handleClose}>
                {option.label}
              </MenuItem>
            )} */}
          </Stack>
        </Box>
      </Modal>
    </>
  )
}
