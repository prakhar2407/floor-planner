import React from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import "./App.css";

export default function App() {
  const { editor, onReady } = useFabricJSEditor();
  const onAddCircle = () => {
    editor.addCircle();
  };
  const onAddRectangle = () => {
    editor.addRectangle();
  };

  return (
    <div className="App">
      <h1>Lineup React Sample Project</h1>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </div>
  );
}
