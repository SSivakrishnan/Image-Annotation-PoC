import React, { useState } from 'react'
import { Button, Popover } from 'antd';
import { SketchPicker } from "react-color";

function FloatingToolbar({objectType}) {

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
    <Popover open={objectType} content={<div style={{ display:'flex'}}>{
        objectList[objectType].map(comp => (
            <>{comp}</>
        ))
    }</div>}>
        
    </Popover>
  )
}

export default FloatingToolbar

function LineColor(){
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
function LineWidth(){
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
function Delete(){
    return <button>Delete</button>
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
