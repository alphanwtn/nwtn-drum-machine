import React, { useState } from "react";
import Button from "@mui/material/Button";

function DrumTrigger(props) {
  const { explikeyDrumTrigger, isActive, handleChangeIsActive } = props;

  if (isActive) {
    return (
      <Button
        variant="contained"
        onClick={() => handleChangeIsActive(explikeyDrumTrigger)}
      >
        {explikeyDrumTrigger}
      </Button>
    );
  } else {
    return (
      <Button
        style={{ paddingRight: "0px", paddingLeft: "0px", maxWidth: "10px" }}
        variant="outlined"
        onClick={() => handleChangeIsActive(explikeyDrumTrigger)}
      >
        {explikeyDrumTrigger}
      </Button>
    );
  }
}

export default DrumTrigger;
