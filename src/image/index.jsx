import React, {useEffect, useRef, useState} from 'react';
import { fabric } from 'fabric';
import { AnnotationToolbar } from './tools';
import { useStore } from './store';
import FloatingToolbar from '../FloatingToolbar';
import Toolbar from './toolbar';

export const ImageAnnotation = () => {
  const canvasRef = useRef(null);

  const [objectType,setObjectType] = useState()
  
  let {setFabricCanvasRef ,setActiveObject}= useStore((state)=>state);

  let canvasUrl = ''

  useEffect(
    ()=>{
      if(!canvasRef.current){
        canvasRef.current = new fabric.Canvas("canvas", {height: 500,width: 600,backgroundColor: '#292D37'});
        setFabricCanvasRef(canvasRef)



        canvasRef.current.on("mouse:up", (e) => {
          // let active = canvasRef.current?.getActiveObject();
          setActiveObject(canvasRef.current?.getActiveObject())
           if(e.target?.type === "group"){
            console.log('canvasRef', e.target?._objects)
          }else{
            console.log('canvasRef', e.target)
          }
        });


      }

  },[]);


  function save(){
    canvasUrl = canvas.toDataURL("image/jpeg", 1.0);
    console.log("canvasUrl", canvas);
  }

  function download_img(){
    let el = document.getElementById("download");
    let imageURI = canvasUrl;
    el.href = imageURI;
  }

  return (
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>
      <AnnotationToolbar />
      <canvas id="canvas"/>
      <Toolbar/>
      <FloatingToolbar/>
      <button onClick={save}>Save</button>
      <a download="myImage.jpg" id="download" href="" onClick={download_img}>Download</a>
      </div>
  )
}