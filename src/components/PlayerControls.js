import React from "react";
import { Button } from "@mui/material";

function PlayerControls(props) {
  const { setRunning } = props;

  return (
    <div>
      <Button variant="outlined" onClick={() => setRunning(true)}>
        Start
      </Button>
      <Button variant="outlined" onClick={() => setRunning(false)}>
        Stop
      </Button>
    </div>
  );
}

export default PlayerControls;
