import {
  Box,
  Divider,
  Stack,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import FormatAlignCenterOutlinedIcon from "@mui/icons-material/FormatAlignCenterOutlined";
import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import FormatAlignRightOutlinedIcon from "@mui/icons-material/FormatAlignRightOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MultipleStopOutlinedIcon from "@mui/icons-material/MultipleStopOutlined";
import TextEffects from "./TextEffects";
import SelectFontFamily from "./FontFamily";
import SelectOptions from "./SelectOption";
import TextElement from "../../Elements/TextElement";

const alignmentOptions = [
  {
    icon: <FormatAlignLeftOutlinedIcon />,
    value: "left",
  },
  {
    icon: <FormatAlignCenterOutlinedIcon />,
    value: "center",
  },
  {
    icon: <FormatAlignRightOutlinedIcon />,
    value: "right",
  },
];

const fontFamilyOptions = [
  "Arial",
  "Helvetica",
  "Verdana",
  "Georgia",
  "Times New Roman",
  "Courier New",
];

const TextSection = () => {
  const [text, setText] = useState("");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState("#000000");
  const [outline, setOutline] = useState(0);
  const [arc, setArc] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [alignment, setAlignment] = useState("center");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [isDuplicated, setIsDuplicated] = useState(false);

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleOutlineChange = (event) => {
    setOutline(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleFontSizeChange = (event, newValue) => {
    setFontSize(newValue);
  };

  const handleArcChange = (event, newValue) => {
    setArc(newValue);
  };

  const handleRotationChange = (event, newValue) => {
    setRotation(newValue);
  };

  const handleLetterSpacingChange = (event, newValue) => {
    setLetterSpacing(newValue);
  };

  const toggleAlignment = () => {
    const currentIndex = alignmentOptions.findIndex(
      (option) => option.value === alignment
    );
    const nextIndex = (currentIndex + 1) % alignmentOptions.length;
    const nextAlignment = alignmentOptions[nextIndex].value;
    setAlignment(nextAlignment);
  };

  const flexContent = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <Box sx={{ border: 0, height: "100%" }}>
      <Stack sx={{ textAlign: "start", margin: "10px 0px" }}>
        <Typography variant="subtitle2" sx={{ fontSize: "10px" }}>
          TEXT EDITOR
        </Typography>
        <Typography variant="h6">Add New Text</Typography>
      </Stack>
      <Divider />
      <Button variant="contained" sx={{backgroundColor:"#7C2BE8" , margin: "15px 0px", width:"100%" , padding:"10px"}}>ADD TEXT</Button>
      <Stack sx={{ textAlign: "start", padding: "15px 0px" }}>
        <TextField
          label="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Stack>
      {text.trim() !== "" && (
        <div>
          <div style={{ ...flexContent, padding: "15px 0px" }}>
            <Button
              variant="outlined"
              onClick={toggleAlignment}
              style={{ display: "flex", alignItems: "center" }}
            >
              {alignmentOptions.map((option) => {
                if (alignment === option.value) {
                  return <span key={option.value}>{option.icon}</span>;
                }
                return null;
              })}
            </Button>

            <Button
              variant="outlined"
              onClick={() => setIsFlipped(!isFlipped)}
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>
                <MultipleStopOutlinedIcon />
              </span>
            </Button>

            <Button
              variant="outlined"
              onClick={() => setIsLocked(!isLocked)}
              style={{ display: "flex", alignItems: "center" }}
            >
              {isLocked ? (
                <span>
                  <LockOpenOutlinedIcon />
                </span>
              ) : (
                <span>
                  <LockOutlinedIcon />
                </span>
              )}
            </Button>

            <Button
              variant="outlined"
              onClick={() => setIsDuplicated(!isDuplicated)}
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>
                <LibraryAddOutlinedIcon />
              </span>
            </Button>
          </div>

          <Divider />

          <SelectFontFamily
            label="Font Family"
            value={fontFamily}
            fontFamilyOptions={fontFamilyOptions}
            onChange={handleFontFamilyChange}
          />

          <Divider />
          <SelectOptions
            label="Outline"
            value={outline}
            options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            onChange={handleOutlineChange}
          />
          <Divider />

          <div>
            <Typography gutterBottom>Color:</Typography>
            <input type="color" value={color} onChange={handleColorChange} />
          </div>

          <Divider />

          <TextEffects
            label="Font Size"
            value={fontSize}
            min={10}
            max={50}
            step={1}
            onChange={handleFontSizeChange}
            ariaLabel="font-size-slider"
          />

          <Divider />

          <TextEffects
            label="Arc"
            value={arc}
            min={0}
            max={360}
            step={1}
            onChange={handleArcChange}
            ariaLabel="arc-slider"
          />
          <Divider />
          <TextEffects
            label="Rotation"
            value={rotation}
            min={0}
            max={360}
            step={1}
            onChange={handleRotationChange}
            ariaLabel="rotation-slider"
          />
          <Divider />
          <TextEffects
            label="Spacing"
            value={letterSpacing}
            min={0}
            max={20}
            step={1}
            onChange={handleLetterSpacingChange}
            ariaLabel="letter-spacing-slider"
          />
        </div>
      )}

      <TextElement/>
    </Box>
  );
};

export default TextSection;
