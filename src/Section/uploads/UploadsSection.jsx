import React, { useState } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

const UploadsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const fileTypes = ["PNG.", "AI.", "PDF.", "JPG.", "PNG.", "TIFF"];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ border: 0, height: "100%" }}>
      <Stack sx={{ textAlign: "start", margin: "10px 0px" }}>
        <Typography variant="subtitle2" sx={{ fontSize: "10px" }}>
          UPLOAD ART
        </Typography>
        <Typography variant="h6">Choose file(s) to upload</Typography>
      </Stack>
      <Divider />

      <Stack sx={{ textAlign: "start", margin: "10px 0px" }}>
        <Box
          sx={{
            border: "3px dashed #ccc",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            cursor: "pointer",
            backgroundColor: "#F2F2F2",
          }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
            id="file-input"
          />
          <label htmlFor="file-input">
            <Typography variant="button" component="span">
              Drag and drop an image or choose a file
            </Typography>
          </label>
        </Box>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "200px", margin: "20px 0px" }}
          />
        )}
      </Stack>

      <Divider />
      <Stack sx={{ textAlign: "start", margin: "10px 0px" }}>
        <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
          Upload ANY file type, but we prefer vector, high-res, or large files
          such as:
        </Typography>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0",
            listStyleType: "none",
            margin: "5px 0px",
            fontSize:"10px"
          }}
        >
          {fileTypes.map((type, index) => {
            return <li key={index}>{type}</li>;
          })}
        </ul>
      </Stack>
      <Divider />
    </Box>
  );
};

export default UploadsSection;
