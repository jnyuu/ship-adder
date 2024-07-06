import React, { useEffect, useState, useRef } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import MenuItem from "@mui/material/MenuItem";

export default function SelectInput({
  options,
  label,
  currentValue,
  setCurrentValue,
  index,
}) {
  // const [selectedValue, setSelectedValue] = useState(options[0]);
  const mounted = useRef();

  useEffect(() => {
    // console.log("Selected value:", selectedValue);
    // if (!mounted.current) {
    //   console.log("Props:", currentValue);
    //   mounted.current = true;
    // } else {
    //   console.log("Props:", currentValue);
    // }
  }, []);

  const handleChange = (e) => {
    if (index !== undefined) {
      setCurrentValue(e.target.value, index);
    } else {
      setCurrentValue(e.target.value);
    }
    // const value = ;
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
        <InputLabel id={`id-${label}`}>{label}</InputLabel>
        <Select
          labelId={`id-${label}`}
          // id="demo-simple-select-standard"
          value={currentValue}
          onChange={handleChange}
          label={label}
        >
          {options.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
