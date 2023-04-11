import React, {useContext, useState} from "react";
import { CanvasContext } from "../..";

import { useStore } from "../../store"
export const Pen = () => {
  const [width, setWidth] = useState(1);
  let {canvasRef} = useContext(CanvasContext);
  // let ref = useStore((state)=>state.fabricCanvasRef);


  function draw(){
    if(canvasRef){
      console.info('===> drawing',ref.current)
      canvasRef.current.isDrawingMode= !ref.current.isDrawingMode;
      canvasRef.current.renderAll();
    }
  }

  function setPenWidth(val){
    console.info('===> width',ref.current)
    if(canvasRef){
      canvasRef.current.freeDrawingBrush.width=width;
      setWidth(val);
      canvasRef.current.renderAll()
    }
  }

  return (
    <>
    <button onClick={draw}>Pen</button>
    <label htmlFor="width">Width
    <input type='number' id="width" onChange={(e)=> setPenWidth(e.target.value) } value={width} />
    </label>
    </>
  )
}