import React from "react";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const flexContent = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

const SelectFontFamily = ({ label, value, fontFamilyOptions, onChange }) => {
  return (
    <div style={{ ...flexContent,margin: "20px 0px" , textAlign:"start"}}>
      <Typography gutterBottom sx={{ width: "400px" }}>
        {label}
      </Typography>
      <FormControl sx={{ width: "200px" }}>
        <Select
          value={value}
          onChange={onChange}
        >
          {fontFamilyOptions.map((fontFamily) => (
            <MenuItem key={fontFamily} value={fontFamily}>
              {fontFamily}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectFontFamily;
