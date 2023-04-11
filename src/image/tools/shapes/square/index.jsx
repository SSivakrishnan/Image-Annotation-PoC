import React, {useContext, useState} from "react";
import { fabric } from "fabric";
import { CanvasContext } from "../../..";

export const Square = () => {
  let {canvasRef,setModifications} = useContext(CanvasContext);

  function draw(){
    if(canvasRef.current){
      const box = new fabric.Rect({
        width: 100,
        height: 100,
        top: 0,
        left: 50,
        fill: "rgba(0,0,0,0.0)",
        stroke: "red",
        strokeWidth: 3,
        transparentCorners: false,
        borderColor: "rgb(255,255,255)",
        cornerColor: "rgb(255,255,255)",
        cornerStyle: "circle",
        objectType: "box"
      });
      canvasRef.current.add(box);
      box.center();
      box.setCoords();
      setModifications()
    }
  }

  return (
    <button onClick={draw}>Square</button>
  )
}