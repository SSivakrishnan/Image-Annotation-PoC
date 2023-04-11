import { useState,useContext } from "react";
import { CanvasContext } from "../..";
import { SketchPicker } from "react-color";

export function FillColor(){
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