import React, { useState, useEffect } from "react";
import PlayerLeds from "./PlayerLeds";
import PlayerControls from "./PlayerControls";

function TimedSection(props) {
  const { patternLength, tempo, matrixTriggerStates, loadedSamples } = props;
  const [triggerColumnState, setTriggerColumnState] = useState({
    triggerMatrix: new Array(32).fill(false),
    activeTrigger: null,
  });
  const [running, setRunning] = useState(false);

  function tempoToMs(tempo) {
    return 1000 / ((tempo / 60) * 4);
  }

  useEffect(() => {
    // Time control, le true de trigger state definit le moment actif
    let timeoutVar = null;
    if (running) {
      timeoutVar = setTimeout(() => {
        let tempTriggerColumnStateMatrix = [
          ...triggerColumnState.triggerMatrix,
        ];
        let tempActiveTrigger = triggerColumnState.activeTrigger;

        tempActiveTrigger < patternLength - 1
          ? (tempActiveTrigger += 1)
          : (tempActiveTrigger = 0);
        tempTriggerColumnStateMatrix.fill(false);
        tempTriggerColumnStateMatrix[tempActiveTrigger] = true;

        setTriggerColumnState({
          triggerMatrix: tempTriggerColumnStateMatrix,
          activeTrigger: tempActiveTrigger,
        });
      }, tempoToMs(tempo));
      return () => clearTimeout(timeoutVar);
    }
  });

  useEffect(() => {
    // PLAYER
    for (let lineTriggerStatesIndex in matrixTriggerStates) {
      if (
        matrixTriggerStates[lineTriggerStatesIndex][
          triggerColumnState.triggerMatrix.indexOf(true)
        ]
      ) {
        loadedSamples[lineTriggerStatesIndex].currentTime = 0;
        loadedSamples[lineTriggerStatesIndex].play();
      }
    }
  });

  return (
    <div>
      <PlayerControls setRunning={setRunning} />
      <PlayerLeds
        patternLength={patternLength}
        triggerColumnStateMatrix={triggerColumnState.triggerMatrix}
      />
    </div>
  );
}

export default TimedSection;
