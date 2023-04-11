import React, {useState} from "react";
import { fabric } from "fabric";
import { useStore } from "../../../store"
export const Circle = () => {
  let ref = useStore((state)=>state.fabricCanvasRef);
  const { setModifications} = useStore((state)=>state);

  // console.log('modifications',modifications)

  function draw(){
    if(ref.current){
      var object = new fabric.Circle({
        top: 0,
        left: 50,
        radius: 25,
        fill: "rgba(255,0,0,0.0)",
        stroke: "red",
        strokeWidth: 3,
        transparentCorners: false,
        borderColor: "rgb(255,255,255)",
        cornerColor: "rgb(255,255,255)",
        cornerStyle: "circle",
        objectType: "circle"
      });
      ref.current.add(object); 
      object.center();
      object.setCoords();
      setModifications()
    }
  }

  return (
    <button onClick={draw}>Circle</button>
  )
}