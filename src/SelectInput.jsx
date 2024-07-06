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
  const mounted = useRef();

  useEffect(() => {}, []);

  const handleChange = (e) => {
    if (index !== undefined) {
      setCurrentValue(e.target.value, index);
    } else {
      setCurrentValue(e.target.value);
    }
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
        <InputLabel id={`id-${label}`}>{label}</InputLabel>
        <Select
          labelId={`id-${label}`}
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
