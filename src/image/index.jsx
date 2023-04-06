import React,{useState, useEffect, useRef} from 'react';
import { fabric } from 'fabric';
import { AnnotationToolbar } from './tools';
import { useStore } from './store';

export const ImageAnnotation = () => {
  const canvasRef = useRef(null);
  
  let fc = useStore((state)=>state.fabricCanvas);

  useEffect(
    ()=>{
    let canvas = new fabric.Canvas(canvasRef.current, {height: 500,width: 600,backgroundColor: '#292D37',
   objectCaching:false
  });
    useStore.getState().setFabricCanvas(canvas)
  },[canvasRef]);

  return (
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>
      <AnnotationToolbar />
      <canvas ref={canvasRef} />
      </div>
  )
}