import "./App.css";
import { useState, useEffect } from "react";
import DrumLine from "./components/DrumLine";
import SetupSection from "./components/SetupSection";
import PlayerLeds from "./components/PlayerLeds";
import PlayerControls from "./components/PlayerControls";

function App() {
  // pattern length est en fait le nb de pattern affichées
  const [patternLength, setPatternLength] = useState(8);
  const [running, setRunning] = useState(false);
  const [triggerColumnState, setTriggerColumnState] = useState({
    triggerMatrix: new Array(32).fill(false),
    activeTrigger: null,
  });
  const [tempo, setTempo] = useState(120);

  function tempoToMs(tempo) {
    return 1000 / ((tempo / 60) * 4);
  }

  useEffect(() => {
    // ######## TIMER
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
  }, [triggerColumnState]);

  return (
    <div>
      <h1>Alpha Nwtn's Drum Machine</h1>
      <SetupSection
        patternLength={patternLength}
        setPatternLength={setPatternLength}
        tempo={tempo}
        setTempo={setTempo}
      />
      <PlayerControls
        setRunning={setRunning}
        setTriggerColumnState={setTriggerColumnState}
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
