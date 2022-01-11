import React, { useState } from "react";
import Button from "@mui/material/Button";

function DrumTrigger(props) {
  const { explikey, isActive, handleChangeIsActive } = props;

  if (isActive) {
    return (
      <Button
        variant="contained"
        onClick={() => handleChangeIsActive(explikey)}
      >
        {explikey}
      </Button>
    );
  } else {
    return (
      <Button variant="outlined" onClick={() => handleChangeIsActive(explikey)}>
        {explikey}
      </Button>
    );
  }
}

export default DrumTrigger;
