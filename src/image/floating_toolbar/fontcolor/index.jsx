import { useState,useContext } from "react";
import { CanvasContext } from "../..";
import { SketchPicker } from "react-color";

export function FontColor(){
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