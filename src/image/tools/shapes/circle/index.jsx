import React, {useContext, useState} from "react";
import { fabric } from "fabric";
import { CanvasContext } from "../../..";
export const Circle = () => {
  // const { setModifications} = useStore((state)=>state);
  let {canvasRef,setModifications} = useContext(CanvasContext);

  function draw(){
    if(canvasRef.current){
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
      canvasRef.current.add(object); 
      object.center();
      object.setCoords();
      setModifications()
    }
  }

  return (
    <button onClick={draw}>Circle</button>
  )
}