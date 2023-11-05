import React from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Input } from "@mui/material";

const TextEffects = ({ label, value, min, max, step, onChange, ariaLabel }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 0px",
        textAlign:"start"
      }}
    >
      <Typography variant="body1" style={{ flexGrow: 1, width:"200px"}}>
        {label}
      </Typography>
      <Slider
        value={value}
        min={min}
        max={max}
        step={step}
        valueLabelDisplay="auto"
        onChange={onChange}
        aria-labelledby={ariaLabel}
        style={{margin:"0px 20px"}}
      />
      <Input
        type="number"
        value={value}
        onChange={onChange}
        sx={{ width: "80px" }}
      />
    </div>
  );
};

export default TextEffects;
