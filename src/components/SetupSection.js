import React from "react";
import { TextField } from "@mui/material";

function SetupSection(props) {
  const { patternLength, setPatternLength, tempo, setTempo } = props;

  function handleChangePatternLength(event) {
    setPatternLength(parseInt(event.target.value));
  }

  function handleChangeTempo(event) {
    setTempo(parseInt(event.target.value));
  }

  return (
    <div>
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
      <TextField
        value={tempo}
        onChange={handleChangeTempo}
        id="outlined-number"
        label="Tempo"
        type="number"
        size="small"
        InputLabelProps={{
          shrink: true,
          inputMode: "numeric",
          pattern: "[0-9]*",
        }}
      />
    </div>
  );
}

export default SetupSection;
