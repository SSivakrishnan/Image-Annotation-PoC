import React from 'react'
import { useStore } from '../../store';

function Undo({currentMod,setCurrentMod}) {
    let {fabricCanvasRef,modifications} = useStore((state)=>state);

    const undo = () => {
        console.log("setCurrentMod",fabricCanvasRef.current.getObjects(),modifications[modifications.length - 1 - currentMod])
        if(currentMod < modifications.length){
            fabricCanvasRef.current.remove(...fabricCanvasRef.current.getObjects());
            fabricCanvasRef.current.loadFromJSON(modifications[modifications.length - currentMod - 2])
            fabricCanvasRef.current.renderAll()
            setCurrentMod(prev=>prev+1)
        }
       
    }
  return (
    <button onClick={undo} disabled={currentMod >= modifications.length}>Undo</button>
  )
}

export default Undo