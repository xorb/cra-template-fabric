import { useContext } from "react";
import { CanvasContext } from "../context/canvas";

function useCanvasContext() {
  const { setCanvas, canvas, activeObject, setActiveObject } =
    useContext(CanvasContext);

  return {
    setCanvas,
    canvas,
    activeObject,
    setActiveObject,
  };
}

export default useCanvasContext;
