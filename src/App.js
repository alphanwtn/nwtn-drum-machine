import "./App.css";
import { useState, useEffect } from "react";
import DrumLine from "./components/DrumLine";
import SetupSection from "./components/SetupSection";
import TimedSection from "./components/TimedSection";
import DrumProgrammingSection from "./components/DrumProgrammingSection";
import { Button } from "@mui/material";

function App() {
  // pattern length est en fait le nb de pattern affichées
  const [patternLength, setPatternLength] = useState(8);
  const [tempo, setTempo] = useState(120);
  const [loadedSamples, setLoadedSamples] = useState([
    new Audio("drum_samples/Kicks/LDP_kick_bando.wav"),
    new Audio("drum_samples/Snares/LDP_snare_south.wav"),
    new Audio("drum_samples/HiHats/LDP_hihat_london.wav"),
  ]);
  const [matrixTriggerStates, setMatrixTriggerStates] = useState(
    new Array(loadedSamples.length).fill(new Array(32).fill(false))
  );

  return (
    <div>
      <h1>Alpha Nwtn's Drum Machine</h1>
      <Button onClick={() => loadedSamples[0].play()}>Bouton</Button>
      <SetupSection
        patternLength={patternLength}
        setPatternLength={setPatternLength}
        tempo={tempo}
        setTempo={setTempo}
        loadedSamples={loadedSamples}
        setLoadedSamples={setLoadedSamples}
      />

      <TimedSection
        patternLength={patternLength}
        tempo={tempo}
        matrixTriggerStates={matrixTriggerStates}
        loadedSamples={loadedSamples}
      />

      <DrumProgrammingSection
        patternLength={patternLength}
        loadedSamples={loadedSamples}
        matrixTriggerStates={matrixTriggerStates}
        setMatrixTriggerStates={setMatrixTriggerStates}
      />

      {/*       <DrumLine
        drumPath="\drum_samples\Kicks\LDP_kick_bando.wav"
        patternLength={patternLength}
        triggerColumnStateActiveTrigger={triggerColumnState.activeTrigger}
      />
      <DrumLine
        drumPath="\drum_samples\Snares\LDP_snare_bando.wav"
        patternLength={patternLength}
        triggerColumnStateActiveTrigger={triggerColumnState.activeTrigger}
      /> */}

      {/* <DrumSelector drumPath="\drum_samples\Snares\LDP_snare_bando.wav" /> */}
    </div>
  );
}

export default App;
