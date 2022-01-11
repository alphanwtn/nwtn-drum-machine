import React, { useState } from "react";
import DrumSelector from "./DrumSelector";
import DrumTrigger from "./DrumTrigger";

function DrumLine(props) {
  const { drumPath, patternLength, triggerColumnStateActiveTrigger } = props;

  const [lineTriggerStates, setLineTriggerStates] = useState(
    new Array(32).fill(false)
  );

  function handleChangeIsActive(explikey) {
    let lineTriggerStatesTemp = [...lineTriggerStates];
    lineTriggerStatesTemp[explikey] = !lineTriggerStatesTemp[explikey];
    setLineTriggerStates(lineTriggerStatesTemp);
  }

  //Crée l'ensemble des triggers
  const listOfDrumTriggers = new Array(patternLength)
    .fill(undefined)
    .map((x, index) => (
      <DrumTrigger
        key={index}
        explikey={index}
        handleChangeIsActive={handleChangeIsActive}
        isActive={lineTriggerStates[index]}
      />
    ));

  function playSequence() {
    if (lineTriggerStates[triggerColumnStateActiveTrigger]) {
      const music = new Audio(drumPath);
      music.play();
      console.log("BOOM!");
    }
  }

  playSequence();

  return (
    <div>
      <DrumSelector drumPath={drumPath} />
      {listOfDrumTriggers}
    </div>
  );
}

export default DrumLine;
