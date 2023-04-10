import React, {useState} from "react";
import { fabric } from "fabric";
import { useStore } from "../../../store"
export const Square = () => {
  let ref = useStore((state)=>state.fabricCanvasRef);


  function draw(){
    if(ref.current){
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
        cornerStyle: "circle"
      });
      ref.current.add(box);
      box.center();
      box.setCoords();
    }
  }

  return (
    <button onClick={draw}>Square</button>
  )
}