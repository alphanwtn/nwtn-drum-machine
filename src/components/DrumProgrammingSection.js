import React, { useState } from "react";
import DrumLine from "./DrumLine";

function DrumProgrammingSection(props) {
  const {
    patternLength,
    loadedSamples,
    matrixTriggerStates,
    setMatrixTriggerStates,
  } = props;

  const listOfDrumLine = new Array(loadedSamples.length)
    .fill(undefined)
    .map((x, index) => (
      <DrumLine
        key={index}
        explikeyDrumLine={index}
        patternLength={patternLength}
        sample={loadedSamples[index]}
        matrixTriggerStates={matrixTriggerStates}
        setMatrixTriggerStates={setMatrixTriggerStates}
      />
    ));

  return <div>{listOfDrumLine}</div>;
}

export default DrumProgrammingSection;
