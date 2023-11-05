import React, { useState } from "react";
import Header from "./header";
import { Box } from "@mui/material";
import EditorLayout from "./Editor/EditorLayout";


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
    </Box>
  );
}
