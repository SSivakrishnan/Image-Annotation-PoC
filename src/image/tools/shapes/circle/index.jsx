import React, {useState} from "react";
import { fabric } from "fabric";
import { useStore } from "../../../store"
export const Circle = () => {
  let ref = useStore((state)=>state.fabricCanvasRef);


  function draw(){
    if(ref.current){
      var object = new fabric.Circle({
        radius: 15,
        fill: '',
        stroke: 'green',
        strokeWidth: 3
      });
      ref.current.add(object); 
    }
  }

  return (
    <button onClick={draw}>Circle</button>
  )
}