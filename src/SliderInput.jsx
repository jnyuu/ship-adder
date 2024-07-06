import React, { useEffect, useState, useRef } from "react";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
import Slider from "@mui/material/Slider";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import MenuItem from "@mui/material/MenuItem";

export default function SelectInput({
  label,
  currentValue,
  setCurrentValue,
  index,
  step,
  maxValue,
  minValue,
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

  const marks = [
    {
      value: minValue,
      label: `${minValue}`,
    },
    {
      value: maxValue,
      label: `${maxValue}`,
    },
  ];
  console.log(marks);

  return (
    <div className="mt-24">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
        <InputLabel
          id={`id-${label}`}
          className="-mt-20
        "
        >
          {label}
        </InputLabel>
        <Slider
          aria-label={label}
          value={currentValue}
          onChange={handleChange}
          step={step}
          max={maxValue}
          min={minValue}
          marks={marks}
          //   valueLabelDisplay="on"
          valueLabelDisplay="on"
        />
      </FormControl>
    </div>
  );
}
