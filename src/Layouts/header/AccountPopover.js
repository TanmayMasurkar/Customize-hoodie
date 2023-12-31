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
  IconButton,
  Popover,
  AvatarGroup,
  Button,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";

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

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      {isMobileView ? (
        <Button
          variant="outlined"
          onClick={handleOpen}
          sx={{
            py: 1,
            bgcolor: "transparent",
            color: "#fff",
            minWidth: "45px",
            px: 0,
            border: "none",
            "&:hover": {
              bgcolor: "transparent",
              color: "#fff",
              border: "none",
            },
            ...(open && {
              "&:before": {
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
              },
            }),
          }}
        >
          <GroupAddOutlinedIcon
            sx={{
              color: "#fff",
              fontSize: isMobileView ? "30px" : null,
            }}
          />
        </Button>
      ) : (
        <AvatarGroup max={4}>
          <Avatar
            onClick={handleOpen}
            sx={{
              p: 0,
              height: 40,
              width: 40,
              border: "1px solid transparent",
              ...(open && {
                "&:before": {
                  zIndex: 1,
                  content: "''",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  position: "absolute",
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                },
              }),
            }}
            src={"photoURL"}
            alt="photoURL"
          />
          <CustomAvatar icon="+" />
        </AvatarGroup>
      )}
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
            width: 180,
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

function CustomAvatar({ icon }) {
  return (
    <Avatar
      sx={{
        bgcolor: "#8C62EA",
        color: "primary.contrastText",
        width: 40,
        height: 40,
        border: "2px solid transparent",
      }}
    >
      {icon}
    </Avatar>
  );
}
