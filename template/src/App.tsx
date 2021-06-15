import { fabric } from "fabric";
import { useEffect } from "react";
import useCanvasContext from "./hooks/useCanvasContext";

function App() {
  const { setCanvas } = useCanvasContext();
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      width: 600,
      height: 400,
      backgroundColor: "#ffffff",
    });
    setCanvas(canvas);
  }, []);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
      }}
    >
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default App;
