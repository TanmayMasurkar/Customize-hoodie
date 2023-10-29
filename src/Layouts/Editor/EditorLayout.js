import React from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import VerticalTabs from '../../Section/sidebar/VerticalTabs';
import AddIcon from '@mui/icons-material/Add';
import Editor from "../../Components/Editor"

const EditorLayout = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {!isSmallScreen && <VerticalTabs />}

      {isSmallScreen && (
        <IconButton
          sx={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            borderRadius: '100%',
            bgcolor: '#8B3DFF',
            color:"#fff",
            boxShadow:3,
          }}
        >
          <AddIcon />
        </IconButton>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          bgcolor: '#EBECF0',
          // border: '2px solid green',
          border:"none"
        }}
      >
        <Editor/>
      </Box>

    </>
  );
};

export default EditorLayout;
