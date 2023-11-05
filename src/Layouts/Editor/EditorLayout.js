import React, { useState } from "react";
import {
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import VerticalTabs from "../../Section/sidebar/VerticalTabs";
import AddIcon from "@mui/icons-material/Add";
import Customhoodies from "../../Components/CustomHoodies";
import { CssBaseline, Typography, styled } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { grey } from "@mui/material/colors";



const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 60,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 30px)", 
  // border:"2px solid red"
}));

const EditorLayout = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {!isSmallScreen && <VerticalTabs />}

      {isSmallScreen && (
        <>
          <Button
            sx={{
              position: "fixed",
              bottom: "20px",
              left: "20px",
              borderRadius: "50%",
              bgcolor: "#8B3DFF",
              color: "#fff",
              boxShadow: 3,
              zIndex: 999,
              height:"60px",
              width:"40px",
              cursor: "pointer",
            }}
            onClick={toggleDrawer}
            disableRipple
          >
            <AddIcon />
          </Button>
          <Root>
            <CssBaseline />
            <SwipeableDrawer
              anchor="bottom"
              open={open}
              onClose={toggleDrawer}
              disableSwipeToOpen={false}
              ModalProps={{
                keepMounted: false,
                style: {
                  position: "fixed",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  maxHeight: "50%",
                },
              }}
            >
              <StyledBox
                sx={{
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  visibility: "visible",
                  right: 0,
                  left: 0,
                }}
              >
                <Puller />
                <Typography sx={{ p: 2, color: "text.secondary" }}>
                  51 results
                </Typography>
              </StyledBox>
              <StyledBox
                sx={{
                  px: 2,
                  pb: 2,
                  height: "500px",
                  overflow: "auto",
                }}
              >
                <VerticalTabs/>
              </StyledBox>
            </SwipeableDrawer>
          </Root>
        </>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          bgcolor: "#EBECF0",
          border: "none",
        }}
      >
        <Customhoodies/>
      </Box>
    </>
  );
};

export default EditorLayout;
