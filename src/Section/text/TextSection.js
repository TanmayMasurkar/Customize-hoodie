import { Box, Divider, Stack,Button,TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Slider from '@mui/material/Slider';

const TextSection = () => {
    const [text, setText] = useState('Your Text');
    const [fontSize, setFontSize] = useState(16);
    const [color, setColor] = useState('#000000');
    const [outline, setOutline] = useState(0);
    const [size, setSize] = useState('medium');
    const [arc, setArc] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [isCentered, setIsCentered] = useState(true);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const [isDuplicated, setIsDuplicated] = useState(false);

    
      const handleOutlineChange = (event, newValue) => {
        setOutline(newValue);
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
  return (
    <Box sx={{border:1, height:"100%"}}>
        <Stack>
            <Typography variant='p'>TEXT EDITOR</Typography>
        </Stack>
        <Divider/>
        <div>
      <TextField
        label="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <Button variant="outlined" onClick={() => setIsCentered(!isCentered)}>
          {isCentered ? 'Align Left' : 'Center'}
        </Button>
        <Button variant="outlined" onClick={() => setIsFlipped(!isFlipped)}>
          Flip
        </Button>
        <Button
          variant="outlined"
          onClick={() => setIsLocked(!isLocked)}
        >
          {isLocked ? 'Unlock' : 'Lock'}
        </Button>
        <Button
          variant="outlined"
          onClick={() => setIsDuplicated(!isDuplicated)}
        >
          Duplicate
        </Button>
      </div>
      <div>
        <Typography id="font-size-slider" gutterBottom>
          Font Size: {fontSize}
        </Typography>
        <Slider
          value={fontSize}
          min={10}
          max={50}
          step={1}
          valueLabelDisplay="auto"
          onChange={handleFontSizeChange}
          aria-labelledby="font-size-slider"
        />
      </div>
      <div>
        <Typography id="outline-slider" gutterBottom>
          Outline: {outline}
        </Typography>
        <Slider
          value={outline}
          min={0}
          max={10}
          step={1}
          valueLabelDisplay="auto"
          onChange={handleOutlineChange}
          aria-labelledby="outline-slider"
        />
      </div>
      <div>
        <Typography gutterBottom>Color:</Typography>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
      <div>
        <Typography id="font-size-slider" gutterBottom>
          Font Size: {fontSize}
        </Typography>
        <Slider
          value={fontSize}
          min={10}
          max={50}
          step={1}
          valueLabelDisplay="auto"
          onChange={handleFontSizeChange}
          aria-labelledby="font-size-slider"
        />
      </div>
      <div>
        <Typography id="arc-slider" gutterBottom>
          Arc: {arc}
        </Typography>
        <Slider
          value={arc}
          min={0}
          max={360}
          step={1}
          valueLabelDisplay="auto"
          onChange={handleArcChange}
          aria-labelledby="arc-slider"
        />
      </div>
      <div>
        <Typography id="rotation-slider" gutterBottom>
          Rotation: {rotation}°
        </Typography>
        <Slider
          value={rotation}
          min={0}
          max={360}
          step={1}
          valueLabelDisplay="auto"
          onChange={handleRotationChange}
          aria-labelledby="rotation-slider"
        />
      </div>
      <div>
        <Typography id="letter-spacing-slider" gutterBottom>
          Letter Spacing: {letterSpacing}
        </Typography>
        <Slider
          value={letterSpacing}
          min={0}
          max={20}
          step={1}
          valueLabelDisplay="auto"
          onChange={handleLetterSpacingChange}
          aria-labelledby="letter-spacing-slider"
        />
      </div>
    </div>
    </Box>
  )
}

export default TextSection