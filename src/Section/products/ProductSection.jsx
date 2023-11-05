import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const ProductSection = () => {
  return (
    <Box sx={{ border: 0, height: "100%" }}>
    <Stack sx={{ textAlign: "start", margin: "10px 0px" }}>
      <Typography variant="subtitle2" sx={{fontSize:"10px" }}>PRODUCTS</Typography>
      <Typography variant="h6">Manage Your Products</Typography>
    </Stack>
    <Divider />
    </Box>
  )
}

export default ProductSection