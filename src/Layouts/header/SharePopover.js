import { useState } from "react";
// @mui
import { alpha, useTheme } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  Popover,
  Button,
} from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
  },
  {
    label: "Profile",
    icon: "eva:person-fill",
  },
  {
    label: "Settings",
    icon: "eva:settings-2-fill",
  },
];

export default function SharePopover() {
  const [open, setOpen] = useState(null);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const buttonStyles = {
    py: 1,
    minWidth: isMobileView ? "45px" : null,
    px: isMobileView ? 0 : null,
    overflow: "hidden",
    bgcolor: isMobileView ? "transparent" : "#fff",
    color: isMobileView ? "#fff" : "#000",
    border: "none",
    "&:hover": {
      bgcolor: isMobileView ? "transparent" : "#fff",
      color: isMobileView ? "#fff" : "#000",
      border: "none",
    },
    ...(open && {
      "&:before": {
        bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
      },
    }),
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={buttonStyles}
      >
        <FileUploadOutlinedIcon
          sx={{
            mx: isMobileView ? 0 : -0.5,
            mr: isMobileView ? 0 : 0.3,
            fontSize: isMobileView ? "30px" : null,
          }}
        />
        {isMobileView ? null : "Share"}
      </Button>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 400,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            Account name
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            account email
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem sx={{ m: 1 }}>Logout</MenuItem>
      </Popover>
    </>
  );
}
