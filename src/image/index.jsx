import React, {useEffect, useRef} from 'react';
import { fabric } from 'fabric';
import { AnnotationToolbar } from './tools';
import { useStore } from './store';
import FloatingToolbar from '../FloatingToolbar';

export const ImageAnnotation = () => {
  const canvasRef = useRef(null);
  
  let {setFabricCanvasRef}= useStore((state)=>state);

  useEffect(
    ()=>{
      if(!canvasRef.current){
        canvasRef.current = new fabric.Canvas("canvas", {height: 500,width: 600,backgroundColor: '#292D37'});
        setFabricCanvasRef(canvasRef)



        canvasRef.current.on("mouse:up", (e) => {
          let activeObject = canvasRef.current?.getActiveObject();
           if(e.target?.type === "group"){
            console.log('canvasRef', e.target?._objects)
          }else{
            console.log('canvasRef', e.target)
          }
          
          // if (activeObject) {
          //   menuRef.current.style.display = "flex";
          //   menuRef.current.style.top = `${activeObject.top}px`;
          //   menuRef.current.style.left = `${activeObject.left - 150}px`;
          // } else {
          //   menuRef.current.style.display = "none";
          // }
        });


      }

  },[]);

  return (
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>
      <AnnotationToolbar />
      <canvas id="canvas"/>
      <FloatingToolbar objectType={"text"}/>
      </div>
  )
}