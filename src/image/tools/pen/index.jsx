import React, {useContext, useState} from "react";
import { CanvasContext } from "../..";

import { useStore } from "../../store"
export const Pen = () => {
  const [width, setWidth] = useState(1);
  let {canvasRef,setModifications} = useContext(CanvasContext);
  // let ref = useStore((state)=>state.fabricCanvasRef);


  function draw(){
    if(canvasRef){
       console.info('===> drawing',canvasRef.current)
      canvasRef.current.isDrawingMode= !canvasRef.current.isDrawingMode;
      canvasRef.current.renderAll();
      setModifications()
    }
  }

  function setPenWidth(val){
    console.info('===> width',canvasRef.current)
    if(canvasRef){
      canvasRef.current.freeDrawingBrush.width=width;
      setWidth(val);
      canvasRef.current.renderAll()
      setModifications()
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