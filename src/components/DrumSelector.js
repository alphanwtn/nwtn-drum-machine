import React, { useState } from "react";
import Button from "@mui/material/Button";

function DrumSelector(props) {
  const { drumPath } = props;

  function handlePlay(event) {
    const music = new Audio(drumPath);
    music.play();
  }

  return (
    <Button variant="contained" onClick={handlePlay}>
      Drum selector
    </Button>
  );
}

export default DrumSelector;
