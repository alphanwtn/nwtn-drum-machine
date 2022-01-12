import React from "react";
import { Button } from "@mui/material";

function PlayerControls(props) {
  const { setRunning, setTriggerColumnState } = props;

  function handleStopPlaying() {
    setRunning(false);
    setTriggerColumnState({
      triggerMatrix: new Array(32).fill(false),
      activeTrigger: null,
    });
  }
  function handleStartPlaying() {
    let tempTriggerMatrix = new Array(32).fill(false);
    tempTriggerMatrix[0] = true;
    setRunning(true);
    setTriggerColumnState({
      triggerMatrix: tempTriggerMatrix,
      activeTrigger: 0,
    });
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleStartPlaying}>
        Start
      </Button>
      <Button variant="outlined" onClick={handleStopPlaying}>
        Stop
      </Button>
    </div>
  );
}

export default PlayerControls;
