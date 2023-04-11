import React, { useContext } from 'react'
import { CanvasContext } from '../..';

function Redo({currentMod,setCurrentMod}) {
  let {canvasRef,modifications} = useContext(CanvasContext);

    const redo = () => {
        // console.log("setCurrentMod",)
        if(currentMod > 0){
            canvasRef.current.remove(...canvasRef.current.getObjects());
            canvasRef.current.loadFromJSON(modifications[modifications.length - currentMod])
            canvasRef.current.renderAll()
            setCurrentMod(prev=>prev-1)
        }
       
    }
  return (
    <button onClick={redo} disabled={currentMod == 0}>Redo</button>
  )
}

export default Redo