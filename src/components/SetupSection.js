import React from "react";
import { TextField, Button } from "@mui/material";

function SetupSection(props) {
  const {
    patternLength,
    setPatternLength,
    tempo,
    setTempo,
    loadedSamples,
    setLoadedSamples,
  } = props;

  function handleChangePatternLength(event) {
    setPatternLength(parseInt(event.target.value));
  }

  function handleChangeTempo(event) {
    setTempo(parseInt(event.target.value));
  }

  function handleAddDrum() {
    const loadedSamplesTemp = [...loadedSamples];
    loadedSamplesTemp.push(undefined);
    setLoadedSamples(loadedSamplesTemp);
  }

  function handleDelDrum() {
    const loadedSamplesTemp = [...loadedSamples];
    loadedSamplesTemp.pop();
    setLoadedSamples(loadedSamplesTemp);
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
      <Button variant="outlined" onClick={handleAddDrum}>
        Add drum
      </Button>
      <Button variant="outlined" onClick={handleDelDrum}>
        Del drum
      </Button>
    </div>
  );
}

export default SetupSection;
