import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const ClipartSection = () => {
  return (
    <Box sx={{ border: 0, height: "100%" }}>
    <Stack sx={{ textAlign: "start", margin: "10px 0px" }}>
      <Typography variant="subtitle2" sx={{fontSize:"10px" }}>CLIPART</Typography>
      <Typography variant="h6">Add Clipart</Typography>
    </Stack>
    <Divider />
    </Box>
  )
}

export default ClipartSection