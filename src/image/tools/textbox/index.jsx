import React, {useContext, useState} from "react";
import { fabric } from "fabric";
import { CanvasContext } from "../..";

export const Textbox = () => {

  let {canvasRef,setModifications} = useContext(CanvasContext);

  function draw(){
    if(canvasRef.current){
      var object = new fabric.Textbox("Text Area", {
        width: 100,
        fontSize: 20,
        transparentCorners: false,
        borderColor: "rgb(255,255,255)",
        cornerColor: "rgb(255,255,255)",
        cornerStyle: "circle",
        objectType: "textbox"
      });
  
      canvasRef.current.add(object); 
      object.center();
      object.setCoords();
      canvasRef.current.renderAll();
      setModifications()
    }
  }

  return (
    <button onClick={draw}>Textbox</button>
  )
}