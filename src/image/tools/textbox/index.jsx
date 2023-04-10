import React, {useState} from "react";
import { fabric } from "fabric";
import { useStore } from "../../store"
export const Textbox = () => {
  let ref = useStore((state)=>state.fabricCanvasRef);


  function draw(){
    if(ref.current){
      var object = new fabric.Textbox("Text Area", {
        width: 100,
        fontSize: 20,
        transparentCorners: false,
        borderColor: "rgb(255,255,255)",
        cornerColor: "rgb(255,255,255)",
        cornerStyle: "circle",
        objectType: "textbox"
      });
  
      ref.current.add(object); 
      object.center();
      object.setCoords();
      ref.current.renderAll();
    }
  }

  return (
    <button onClick={draw}>Textbox</button>
  )
}