import React,{useState, useEffect, useRef} from 'react';
import { fabric } from 'fabric';
import { AnnotationToolbar } from './tools';
import FloatingToolbar from '../FloatingToolbar';

export const ImageAnnotation = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState('');

  useEffect(()=>{
    let canvas = new fabric.Canvas(canvasRef.current, {height: 500,width: 600,backgroundColor: '#292D37',isDrawingMode:true});
    setCanvas(canvas);
},[canvasRef]);

  return (
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>
      <AnnotationToolbar />
      <canvas ref={canvasRef} />
      <FloatingToolbar objectType={"text"}/>
      </div>
  )
}