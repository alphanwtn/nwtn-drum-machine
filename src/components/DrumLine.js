import React, { useState, useEffect } from "react";
import DrumSelector from "./DrumSelector";
import DrumTrigger from "./DrumTrigger";

function DrumLine(props) {
  const {
    explikeyDrumLine,
    patternLength,
    sample,
    matrixTriggerStates,
    setMatrixTriggerStates,
  } = props;

  const [lineTriggerStates, setLineTriggerStates] = useState(
    new Array(32).fill(false)
  );

  useEffect(() => {
    // update la matrice générale quand il y a changement dans la ligne
    let tempMatrixTriggerStates = [...matrixTriggerStates];
    tempMatrixTriggerStates[explikeyDrumLine] = lineTriggerStates;
    setMatrixTriggerStates(tempMatrixTriggerStates);
  }, [lineTriggerStates]);

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
        explikeyDrumTrigger={index}
        handleChangeIsActive={handleChangeIsActive}
        isActive={lineTriggerStates[index]}
      />
    ));

  return (
    <div>
      <DrumSelector sample={sample} />
      {listOfDrumTriggers}
    </div>
  );
}

export default DrumLine;
