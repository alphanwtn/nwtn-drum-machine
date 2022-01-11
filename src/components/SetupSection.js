import React from "react";
import { TextField } from "@mui/material";

function SetupSection(props) {
  const { patternLength, setPatternLength } = props;

  function handleChangePatternLength(event) {
    setPatternLength(parseInt(event.target.value));
  }

  return (
    <TextField
      value={patternLength}
      onChange={handleChangePatternLength}
      id="outlined-number"
      label="Pattern length"
      type="number"
      size="small"
      InputLabelProps={{
        shrink: true,
        inputMode: "numeric",
        pattern: "[0-9]*",
      }}
    />
  );
}

export default SetupSection;
