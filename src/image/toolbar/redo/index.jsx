import React from 'react'
import { useStore } from '../../store';

function Redo({currentMod,setCurrentMod}) {
    let {fabricCanvasRef,modifications} = useStore((state)=>state);

    const redo = () => {
        // console.log("setCurrentMod",)
        if(currentMod > 0){
            fabricCanvasRef.current.remove(...fabricCanvasRef.current.getObjects());
            fabricCanvasRef.current.loadFromJSON(modifications[modifications.length - currentMod])
            fabricCanvasRef.current.renderAll()
            setCurrentMod(prev=>prev-1)
        }
       
    }
  return (
    <button onClick={redo} disabled={currentMod == 0}>Redo</button>
  )
}

export default Redo