import React from "react";
import { Button } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

function PlayerLeds(props) {
  const { patternLength, triggerColumnStateMatrix } = props;

  const listOfLeds = new Array(patternLength)
    .fill(undefined)
    .map((x, index) =>
      triggerColumnStateMatrix[index] ? (
        <CircleIcon key={index} />
      ) : (
        <CircleOutlinedIcon key={index} />
      )
    );

  return <div>{listOfLeds}</div>;
}

export default PlayerLeds;
