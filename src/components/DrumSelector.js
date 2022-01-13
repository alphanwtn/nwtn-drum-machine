import React, { useState } from "react";
import Button from "@mui/material/Button";

function DrumSelector(props) {
  const { sample } = props;

  function getSampleName(sample) {
    // extrait le nom du sample à partir du chemin
    try {
      const fullSampleName = sample.src;
      return fullSampleName.match(/\w+.(wav|mp3|ogg)/i)[0].slice(0, -4);
    } catch (error) {
      return "undefined";
    }
  }

  function handlePlay(event) {
    try {
      sample.play();
    } catch (error) {
      console.log(error);
      window.alert("No loaded sample in this line !");
    }
  }

  if (sample) {
    // change l'apparence en fonction de si un sample est chargé
    return (
      <Button
        variant="contained"
        style={{ width: "200px" }}
        onClick={handlePlay}
      >
        {getSampleName(sample)}
      </Button>
    );
  } else {
    return (
      <Button
        variant="outlined"
        style={{ width: "200px" }}
        onClick={handlePlay}
      >
        {getSampleName(sample)}
      </Button>
    );
  }
}

export default DrumSelector;
