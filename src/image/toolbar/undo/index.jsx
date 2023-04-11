import React, { useContext } from 'react'
import { CanvasContext } from '../..';

function Undo({currentMod,setCurrentMod}) {
    let {canvasRef,modifications} = useContext(CanvasContext);

    console.log("modifications",modifications)

    const undo = () => {
        console.log("setCurrentMod",canvasRef.current.getObjects(),modifications[modifications.length - 1 - currentMod])
        if(currentMod < modifications.length){
            canvasRef.current.remove(...canvasRef.current.getObjects());
            canvasRef.current.loadFromJSON(modifications[modifications.length - currentMod - 2])
            canvasRef.current.renderAll()
            setCurrentMod(prev=>prev+1)
        }
       
    }
  return (
    <button onClick={undo} disabled={currentMod >= modifications.length}>Undo</button>
  )
}

export default Undo