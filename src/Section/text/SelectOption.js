import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";


const flexContent = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

const SelectOptions = ({ label, value, options, onChange }) => {
  return (
    <div style={{...flexContent, margin: "20px 0px" , textAlign:"start" }}>
      <Typography gutterBottom sx={{ width: "400px" }}>
        {label}
      </Typography>
      <FormControl sx={{ width: "200px" }}>
        <Select
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectOptions;
