import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import TShirtModel from "./TShirtComp";
import Setting from "./Setting";
import CustomHoodies from "./CustomHoodies";

const Editor = () => {
  const editorStyles = {
    mainContainer: {
      // bgcolor: "#EBECF0",
      // height: "100vh",
      border: "1px solid black",
      // padding: "10px",
    },
    gridItem: {
    //   border: "1px solid black",
      height: "100%",
      overflow:"hidden",
      // borderRadius:"5px",
      // backgroundColor:"#fff",
      // boxShadow:"0px 0px 5px rgba(0, 0, 0, 0.247)",
      padding:"5px"
    },
  };

  const handleMove = (direction) => {

  };
  
  return (
    // <Container >
      <Box sx={editorStyles.mainContainer}>
        <Grid container style={{ height: "100%" }}>
        {/* <Grid item xs={12} md={4} style={editorStyles.gridItem}>
            <Stack>
              <Setting/>
            </Stack>
          </Grid> */}
          <Grid item xs={12} md={12} style={editorStyles.gridItem}>
          {/* <button onClick={() => handleMove("front")}>Front</button>
                <button onClick={() => handleMove("back")}>Back</button>
                <button onClick={() => handleMove("left")}>Left</button>
                <button onClick={() => handleMove("right")}>Right</button> */}
            <Stack>
              {/* <TShirtModel/> */}
              <CustomHoodies/>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    // </Container>
  );
};

export default Editor;
