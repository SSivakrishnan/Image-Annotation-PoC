import React, {useState} from "react";
import { fabric } from "fabric";
import { useStore } from "../../../store"
export const Circle = () => {
  let ref = useStore((state)=>state.fabricCanvasRef);


  function draw(){
    if(ref){
      var object = new fabric.Circle({
        radius: 15,
        fill: 'blue',
        left: 100,
        top: 100
      });
      ref.current.add(object); 
    }
  }

  return (
    <button onClick={draw}>Circle</button>
  )
}