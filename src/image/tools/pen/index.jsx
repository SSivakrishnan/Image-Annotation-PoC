import React, {useState} from "react";
import { useStore } from "../../store"
export const Pen = () => {
  const [width, setWidth] = useState(1);
  let ref = useStore((state)=>state.fabricCanvasRef);


  function draw(){
    if(ref){
      console.info('===> drawing',ref.current)
      ref.current.isDrawingMode= !ref.current.isDrawingMode;
      ref.current.renderAll();
    }
  }

  function setPenWidth(val){
    console.info('===> width',ref.current)
    if(ref){
      ref.current.freeDrawingBrush.width=width;
      setWidth(val);
      ref.current.renderAll()
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