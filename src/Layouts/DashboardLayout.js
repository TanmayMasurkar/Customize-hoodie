import React, { useState } from "react";
// import { styled } from '@mui/material/styles';
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Drawer,
// } from '@mui/material';
import Header from "./header";
import { Box } from "@mui/material";
import EditorLayout from "./Editor/EditorLayout";

const drawerWidth = 240;

// const StyledToolbar = styled(Toolbar)({
//   minHeight: 80,
//   display: 'flex',
//   justifyContent: 'space-between',
// });

// const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     ...(open && {
//       '& .MuiDrawer-paper': {
//         width: drawerWidth,
//       },
//     }),
//   })
// );

export default function DashboardLayout() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          height: "calc(100vh - 66px)",
          bgcolor: "#EBECF0",
          marginTop: "65px",
          // border: "1px solid red",
          overflow:"hidden"
        }}
      >
        <EditorLayout/>
      </Box>
      {/* <Box     sx={{
          // display: "flex",
          // height: "calc(100vh - 66px)",
          bgcolor: "#EBECF0",
          // marginTop: "65px",
          // border: "1px solid red",
          overflow:"hidden",
          height:"100px"
        }}>

      </Box> */}
    </Box>
  );
}
