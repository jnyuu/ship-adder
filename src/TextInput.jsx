import React, { useEffect, useState } from "react";
import { Input } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function TextInput({ label }) {
  const [currentValue, setCurrentValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentValue(value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
        <InputLabel id={`id-${label}`}>{label}</InputLabel>
        <Input
          labelId={`id-${label}`}
          // id="demo-simple-select-standard"
          value={currentValue}
          onChange={handleChange}
          label={label}
        ></Input>
      </FormControl>
    </div>
  );
}
