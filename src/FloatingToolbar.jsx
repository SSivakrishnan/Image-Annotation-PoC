import React, { useEffect, useRef, useState, useContext } from 'react'
import { Button, Popover } from 'antd';
import { SketchPicker } from "react-color";
import { useStore } from './image/store';
import { CanvasContext } from './image';

function FloatingToolbar() {

  let {activeObject} = useContext(CanvasContext);

    // let activeObject = useStore((state)=>state.activeObject);

    const menuRef = useRef(null);

    const [objectType, setObjectType] = useState('circle')



    useEffect(()=>{
        console.log(":::::::::",typeof activeObject?.objectType,activeObject?.type)

        if(activeObject?.type === 'group'){
            setObjectType('arrow')
        } else if(activeObject?.type === 'path') {
            setObjectType('pen')
        } else {
            setObjectType(activeObject?.objectType || 'circle')
        }
        if(menuRef.current){
            if (activeObject) {
                menuRef.current.style.display = "flex";
                menuRef.current.style.top = `${activeObject.top}px`;
                menuRef.current.style.left = `${activeObject.left - 150}px`;
              } else {
                menuRef.current.style.display = "none";
              }
        }
          
    },[activeObject,menuRef.current])

    const DELETE_COMP = <Delete menuRef={menuRef}/>
    const objectList = {
        pen:[<LineColor />, <LineWidth />, DELETE_COMP],
        box:[<FillColor />, <LineColor />, <LineWidth />,DELETE_COMP],
        circle:[<FillColor />, <LineColor />, <LineWidth />,DELETE_COMP],
        line:[<LineColor />, <LineWidth />,DELETE_COMP],
        arrow:[<LineColor />, <LineWidth />,DELETE_COMP],
        highlighter:[<LineColor />, <LineWidth />,DELETE_COMP],
        textbox:[<FontSize />, <FontColor />, <BackgroundColor />,DELETE_COMP]
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

    const [lineWidth,setLineWidth] = useState(1)

    const [open,setOpen] = useState(false)

    const handleFontSizeChange = (e) =>{
        setLineWidth(Number(e.target.value))
       activeObject.set("strokeWidth", Number(e.target.value));
       fabricCanvasRef.current.renderAll();
    }
    return <div style={{position :'relative'}}>
    <button onClick={()=>{setOpen(!open)}}>LineWidth</button>
    {
        open && (
            <div
            style={{ position: "absolute" }}>
            <input
                 value={lineWidth}
                onChange={handleFontSizeChange}
                type="number"
              ></input>
            </div>
            

        )
    }
    </div>
}


function Delete({menuRef}){
    let {fabricCanvasRef,activeObject} = useStore((state)=>state);

    const deleteObject = () => {
 // activeObject.remove();
 fabricCanvasRef.current.remove(activeObject);
 menuRef.current.style.display = "none";
    }
    return <button onClick={deleteObject}>Delete</button>
}


function FillColor(){
    let {fabricCanvasRef,activeObject} = useStore((state)=>state);

    const [open,setOpen] = useState(false)

    const [fillColor,setFillColor] = useState(false)

    const colorPicking = (color) =>{
        setFillColor(color.hex);
        activeObject.set("fill", color.hex);
        fabricCanvasRef.current.renderAll();
    }
    return <div style={{position :'relative'}}>
    <button onClick={()=>{setOpen(!open)}}>FillColor</button>
    {
        open && (
            <div
            style={{ position: "absolute" }}>
            <SketchPicker
            color={fillColor}
            onChangeComplete={colorPicking}
            />
            </div>
            

        )
    }
    </div>
}


function FontSize(){
    let {fabricCanvasRef,activeObject} = useStore((state)=>state);


    const [open,setOpen] = useState(false)

    const [fontSize,setfontSize] = useState(20)

    const handleFontSizeChange = (e) =>{
        setfontSize(Number(e.target.value))
        activeObject.set("fontSize", Number(e.target.value));
        fabricCanvasRef.current.renderAll();
    }
    return <div style={{position :'relative'}}>
    <button onClick={()=>{setOpen(!open)}}>FontSize</button>
    {
        open && (
            <div
            style={{ position: "absolute" }}>
            <input
                value={fontSize}
                onChange={handleFontSizeChange}
                type="number"
              ></input>
            </div>
            

        )
    }
    </div>
}


function FontColor(){
    let {fabricCanvasRef,activeObject} = useStore((state)=>state);

    const [open,setOpen] = useState(false)

    const [fontColor,setFontColor] = useState()

    const colorPicking = (color) =>{
        setFontColor(color.hex)
        activeObject.set("stroke", color.hex);
        activeObject.set("fill", color.hex);
        fabricCanvasRef.current.renderAll();
    }
    return <div style={{position :'relative'}}>
    <button onClick={()=>{setOpen(!open)}}>FontColor</button>
    {
        open && (
            <div
            style={{ position: "absolute" }}>
            <SketchPicker
            color={fontColor}
            onChangeComplete={colorPicking}
            />
            </div>
            

        )
    }
    </div>
}


function BackgroundColor(){
    let {fabricCanvasRef,activeObject} = useStore((state)=>state);

    const [open,setOpen] = useState(false)

    const [backgroundColor,seBackgroundtColor] = useState()

    const colorPicking = (color) =>{
        seBackgroundtColor(color.hex)
        activeObject.set("backgroundColor", color.hex);
        //activeObject.set("fill", color.hex);
        fabricCanvasRef.current.renderAll();
    }
    return <div style={{position :'relative'}}>
    <button onClick={()=>{setOpen(!open)}}>BackgroundColor</button>
    {
        open && (
            <div
            style={{ position: "absolute" }}>
            <SketchPicker
             color={backgroundColor}
            onChangeComplete={colorPicking}
            />
            </div>
            

        )
    }
    </div>
}
