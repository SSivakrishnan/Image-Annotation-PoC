import React, { useEffect, useRef, useState, useContext } from 'react'
import { Button, Popover } from 'antd';
import { SketchPicker } from "react-color";
import { useStore } from './image/store';
import { CanvasContext } from './image';

function FloatingToolbar() {

  const {activeObj} = useContext(CanvasContext);

  console.log("activeObj",activeObj);


    const menuRef = useRef(null);

    const [objectType, setObjectType] = useState('circle')



    useEffect(()=>{
        console.log(":::::::::", activeObj?.objectType,activeObj)

        if(activeObj?.type === 'group'){
            setObjectType('arrow')
        } else if(activeObj?.type === 'path') {
            setObjectType('pen')
        } else {
            console.log(":::::elseee")
            setObjectType(activeObj?.objectType || 'multiobject')
        }
        if(menuRef.current){
             if(activeObj?._objects?.length>0){
                menuRef.current.style.display = "flex";
                menuRef.current.style.top = `100px`;
                menuRef.current.style.left = `150px`;
              }else if (activeObj) {
                menuRef.current.style.display = "flex";
                menuRef.current.style.top = `${activeObj.top}px`;
                menuRef.current.style.left = `${activeObj.left - 150}px`;
              } else {
                menuRef.current.style.display = "none";
              }
        }
          
    },[activeObj,menuRef.current])

    const DELETE_COMP = <Delete menuRef={menuRef}/>
    const objectList = {
        pen:[<LineColor />, <LineWidth />, DELETE_COMP],
        box:[<FillColor />, <LineColor />, <LineWidth />,DELETE_COMP],
        circle:[<FillColor />, <LineColor />, <LineWidth />,DELETE_COMP],
        line:[<LineColor />, <LineWidth />,DELETE_COMP],
        arrow:[<LineColor />, <LineWidth />,DELETE_COMP],
        highlighter:[<LineColor />, <LineWidth />,DELETE_COMP],
        textbox:[<FontSize />, <FontColor />, <BackgroundColor />,DELETE_COMP],
        multiobject:[DELETE_COMP]
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
          display: "none"
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
    const {canvasRef,activeObj,setModifications} = useContext(CanvasContext);
    const [selectedColor,setSelectedColor] = useState()

    const [open,setOpen] = useState(false)

    const colorPicking = (color) =>{
        setSelectedColor(color.hex);
     if (activeObj.get("type") === "group") {
        activeObj._objects.map((obj) => {
          obj.set("stroke", color.hex);
          obj.set("fill", color.hex);
        });
      } else {
        activeObj.set("stroke", color.hex);
      }
      canvasRef.current.renderAll();
      setModifications()
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
    const {canvasRef,activeObj,setModifications} = useContext(CanvasContext);

    const [lineWidth,setLineWidth] = useState(1)

    const [open,setOpen] = useState(false)

    const handleFontSizeChange = (e) =>{
        setLineWidth(Number(e.target.value))
       activeObj.set("strokeWidth", Number(e.target.value));
       canvasRef.current.renderAll();
       setModifications()
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
    const {canvasRef,activeObj,setModifications} = useContext(CanvasContext);

    const deleteObject = () => {
 // activeObj.remove();
 if(activeObj?._objects?.length>0){
    activeObj._objects.forEach(obj=>{
        canvasRef.current.remove(obj);
    })  
    // canvasRef.current.remove(activeObj);
 }else{
    canvasRef.current.remove(activeObj);
 }

 menuRef.current.style.display = "none";
 setModifications()
    }
    return <button onClick={deleteObject}>Delete</button>
}


function FillColor(){
    const {canvasRef,activeObj,setModifications} = useContext(CanvasContext);

    const [open,setOpen] = useState(false)

    const [fillColor,setFillColor] = useState(false)

    const colorPicking = (color) =>{
        setFillColor(color.hex);
        activeObj.set("fill", color.hex);
        canvasRef.current.renderAll();
        setModifications()
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
    const {canvasRef,activeObj,setModifications} = useContext(CanvasContext);


    const [open,setOpen] = useState(false)

    const [fontSize,setfontSize] = useState(20)

    const handleFontSizeChange = (e) =>{
        setfontSize(Number(e.target.value))
        activeObj.set("fontSize", Number(e.target.value));
        canvasRef.current.renderAll();
        setModifications()
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
    const {canvasRef,activeObj,setModifications} = useContext(CanvasContext);

    const [open,setOpen] = useState(false)

    const [fontColor,setFontColor] = useState()

    const colorPicking = (color) =>{
        setFontColor(color.hex)
        activeObj.set("stroke", color.hex);
        activeObj.set("fill", color.hex);
        canvasRef.current.renderAll();
        setModifications()
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
    const {canvasRef,activeObj,setModifications} = useContext(CanvasContext);

    const [open,setOpen] = useState(false)

    const [backgroundColor,seBackgroundtColor] = useState()

    const colorPicking = (color) =>{
        seBackgroundtColor(color.hex)
        activeObj.set("backgroundColor", color.hex);
        //activeObj.set("fill", color.hex);
        canvasRef.current.renderAll();
        setModifications()
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
