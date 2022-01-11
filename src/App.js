import "./App.css";
import { useState, useEffect } from "react";
import DrumLine from "./components/DrumLine";
import SetupSection from "./components/SetupSection";
import PlayerLeds from "./components/PlayerLeds";

function App() {
  // pattern length est en fait le nb de patter affichées
  const [patternLength, setPatternLength] = useState(8);
  const [running, setRunning] = useState(true);
  const [triggerColumnState, setTriggerColumnState] = useState({
    triggerMatrix: new Array(32).fill(false),
    activeTrigger: null,
  });

  useEffect(() => {
    // ######## TIMER
    let timeoutVar = null;
    if (running) {
      timeoutVar = setTimeout(() => {
        let tempTriggerColumnStateMatrix = [
          ...triggerColumnState.triggerMatrix,
        ];
        let tempActiveTrigger = triggerColumnState.activeTrigger;
        if (tempActiveTrigger === null) {
          tempActiveTrigger = 0;
          tempTriggerColumnStateMatrix.fill(false); // redondant mais pour le style
          tempTriggerColumnStateMatrix[0] = true;
        } else {
          tempActiveTrigger < patternLength - 1
            ? (tempActiveTrigger += 1)
            : (tempActiveTrigger = 0);
          tempTriggerColumnStateMatrix.fill(false);
          tempTriggerColumnStateMatrix[tempActiveTrigger] = true;
        }
        setTriggerColumnState({
          triggerMatrix: tempTriggerColumnStateMatrix,
          activeTrigger: tempActiveTrigger,
        });
      }, 100);
      return () => clearTimeout(timeoutVar);
    }
  });

  return (
    <div>
      <h1>Alpha Nwtn's Drum Machine</h1>
      <SetupSection
        patternLength={patternLength}
        setPatternLength={setPatternLength}
      />
      <PlayerLeds
        patternLength={patternLength}
        triggerColumnStateMatrix={triggerColumnState.triggerMatrix}
      />
      <DrumLine
        drumPath="\drum_samples\Kicks\LDP_kick_bando.wav"
        patternLength={patternLength}
        triggerColumnStateActiveTrigger={triggerColumnState.activeTrigger}
      />
      <DrumLine
        drumPath="\drum_samples\Snares\LDP_snare_bando.wav"
        patternLength={patternLength}
        triggerColumnStateActiveTrigger={triggerColumnState.activeTrigger}
      />

      {/* <DrumSelector drumPath="\drum_samples\Snares\LDP_snare_bando.wav" /> */}
    </div>
  );
}

export default App;
