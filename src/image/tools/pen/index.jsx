import React, {useState} from "react";
import { useStore } from "../../store"
export const Pen = () => {
  const [width, setWidth] = useState(1);
  let ref = useStore((state)=>state.fabricCanvasRef);
  const { setModifications} = useStore((state)=>state);

  function draw(){
    if(ref){
      console.info('===> drawing',ref.current)
      ref.current.isDrawingMode= !ref.current.isDrawingMode;
      ref.current.renderAll();
      setModifications()
    }
  }

  function setPenWidth(val){
    console.info('===> width',ref.current)
    if(ref){
      ref.current.freeDrawingBrush.width=width;
      setWidth(val);
      ref.current.renderAll()
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