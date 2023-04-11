import React, {useEffect, useRef, useState, createContext} from 'react';
import { fabric } from 'fabric';
import { AnnotationToolbar } from './tools';
import { useStore } from './store';
// import FloatingToolbar from '../FloatingToolbar';
import FloatingToolbar from './floating_toolbar';
import Toolbar from './toolbar';

export const CanvasContext = createContext("canvas");

export const ImageAnnotation = () => {
  const canvasRef = useRef(null);

  let canvasUrl = '';
  
  const [activeObj,setActiveObj] = useState(null);

  // let activeObj = 

  const [modifications,changeModification] = useState([])

  const setActiveObject = (val) =>{
    setActiveObj(val)
  }

  const setModifications = () => {
    changeModification([...modifications, JSON.stringify(canvasRef.current)])
  }


  useEffect(
    ()=>{
      if(!canvasRef.current){
        canvasRef.current = new fabric.Canvas("canvas", {height: 500,width: 600,backgroundColor: '#292D37'});
  


        canvasRef.current.on("mouse:up", (e) => {
         // activeObj = canvasRef.current?.getActiveObject();
          setActiveObject(canvasRef.current?.getActiveObject())
          //  if(e.target?.type === "group"){
          //   console.log('canvasRef', e.target?._objects)
          // }else{
          //   console.log('canvasRef', e.target)
          // }
        });


      }

  },[]);

  console.log("activeObj pp",modifications)

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
    <CanvasContext.Provider value={{activeObj, setActiveObject, canvasRef,modifications,setModifications}}>
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
      </CanvasContext.Provider>
  )
}