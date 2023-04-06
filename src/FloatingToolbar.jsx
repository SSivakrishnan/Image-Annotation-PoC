import React, { useEffect, useRef, useState } from 'react'
import { Button, Popover } from 'antd';
import { SketchPicker } from "react-color";
import { useStore } from './image/store';

function FloatingToolbar({objectType}) {

    let activeObject = useStore((state)=>state.activeObject);

    const menuRef = useRef(null);

    

    useEffect(()=>{
        console.log(":::::::::",activeObject?.top,menuRef)
        if(menuRef.current){
            if (activeObject) {
                menuRef.current.style.display = "flex";
                menuRef.current.style.top = `${activeObject.top + 100}px`;
                menuRef.current.style.left = `${activeObject.left - 150}px`;
              } else {
                menuRef.current.style.display = "none";
              }
        }
          
    },[activeObject,menuRef.current])

    const objectList = {
        pen:[<LineColor />, <LineWidth />, <Delete />],
        rect:[<FillColor />, <LineColor />, <LineWidth />, <Delete />],
        circle:[<FillColor />, <LineColor />, <LineWidth />, <Delete />],
        line:[<LineColor />, <LineWidth />, <Delete />],
        arrow:[<LineColor />, <LineWidth />, <Delete />],
        highlighter:[<LineColor />, <LineWidth />, <Delete />],
        text:[<FontSize />, <FontColor />, <BackgroundColor />, <Delete />]
    }

  return (
    <div> 
        <div ref={menuRef}
        style={{
          zIndex: 5,
          background: "wheat",
          padding: 10,
          gap: "0.5rem",
          position: "absolute",
        //  display: "none"
        }}>
        <div style={{ display:'flex'}}>{
        objectList[objectType].map(comp => (
            <>{comp}</>
        ))
    }</div>
    </div>
        
    </div>
   
  )
}

export default FloatingToolbar

function LineColor(){
    let {fabricCanvasRef,activeObject} = useStore((state)=>state);
    const [selectedColor,setSelectedColor] = useState()

    const [open,setOpen] = useState(false)

    const colorPicking = (color) =>{
        setSelectedColor(color.hex);
     if (activeObject.get("type") === "group") {
        activeObject._objects.map((obj) => {
          obj.set("stroke", color.hex);
          obj.set("fill", color.hex);
        });
      } else {
        activeObject.set("stroke", color.hex);
      }
      fabricCanvasRef.current.renderAll();
    
    }
    return <div style={{position :'relative'}}>
    <button onClick={()=>{setOpen(!open)}}>LineColor</button>
    {
        open && (
            <div
            style={{ position: "absolute" }}>
            <SketchPicker
            color={selectedColor}
            onChangeComplete={colorPicking}
            />
            </div>
            

        )
    }
    </div>
}
function LineWidth(){
    let {fabricCanvasRef,activeObject} = useStore((state)=>state);

    const [open,setOpen] = useState(false)

    const handleFontSizeChange = () =>{
       
    }
    return <div style={{position :'relative'}}>
    <button onClick={()=>{setOpen(!open)}}>LineSize</button>
    {
        open && (
            <div
            style={{ position: "absolute" }}>
            <input
                //value={fontSize}
                onChange={handleFontSizeChange}
                type="number"
              ></input>
            </div>
            

        )
    }
    </div>
}
function Delete(){
    let {fabricCanvasRef,activeObject} = useStore((state)=>state);

    const deleteObject = () => {
 // activeObject.remove();
 fabricCanvasRef.current.remove(activeObject);
    }
    return <button onClick={deleteObject}>Delete</button>
}
function FillColor(){
    const [open,setOpen] = useState(false)

    const colorPicking = () =>{

    }
    return <div style={{position :'relative'}}>
    <button onClick={()=>{setOpen(!open)}}>FontColor</button>
    {
        open && (
            <div
            style={{ position: "absolute" }}>
            <SketchPicker
            onChangeComplete={colorPicking}
            />
            </div>
            

        )
    }
    </div>
}
function FontSize(){
    const [open,setOpen] = useState(false)

    const handleFontSizeChange = () =>{

    }
    return <div style={{position :'relative'}}>
    <button onClick={()=>{setOpen(!open)}}>FontSize</button>
    {
        open && (
            <div
            style={{ position: "absolute" }}>
            <input
                //value={fontSize}
                onChange={handleFontSizeChange}
                type="number"
              ></input>
            </div>
            

        )
    }
    </div>
}
function FontColor(){
    const [open,setOpen] = useState(false)

    const colorPicking = () =>{

    }
    return <div style={{position :'relative'}}>
    <button onClick={()=>{setOpen(!open)}}>FontColor</button>
    {
        open && (
            <div
            style={{ position: "absolute" }}>
            <SketchPicker
            onChangeComplete={colorPicking}
            />
            </div>
            

        )
    }
    </div>
}
function BackgroundColor(){
    const [open,setOpen] = useState(false)

    const colorPicking = () =>{

    }
    return <div style={{position :'relative'}}>
    <button onClick={()=>{setOpen(!open)}}>BackgroundColor</button>
    {
        open && (
            <div
            style={{ position: "absolute" }}>
            <SketchPicker
            onChangeComplete={colorPicking}
            />
            </div>
            

        )
    }
    </div>
}
