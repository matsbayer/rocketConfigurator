import { useState } from "react";
import { TwitterPicker } from "react-color";
import "./App.css"
import { ThreeDVis } from "./components/ThreeDVis";


function App() {

  const [topColor, setTopColor] = useState("white")
  const [middleColor, setMiddleColor] = useState("white")
  const [bottomColor, setBottomColor] = useState("white")
  const [legColor, setLegColor] = useState("white")

  return (
    <div className="App">
      <h1>Rocket Configurator</h1>
      <div className="configurator">
        <div className="conf-menu">
          <h3>Create your own unique rocket!</h3>

          <p>Oberer Teil:</p>
          <TwitterPicker onChange={(color) => { setTopColor(color.hex) }} />

          <p>Mittlerer Teil:</p>
          <TwitterPicker onChange={(color) => { setMiddleColor(color.hex) }} />

          <p>Unterer Teil:</p>
          <TwitterPicker onChange={(color) => { setBottomColor(color.hex) }} />

          <p>Stützen:</p>
          <TwitterPicker onChange={(color) => { setLegColor(color.hex) }} />
        </div>

        <ThreeDVis topColor={topColor} middleColor={middleColor} bottomColor={bottomColor} legColor={legColor} />
      </div>
    </div>
  );
}

export default App;
