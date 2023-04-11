import { useState,useContext } from "react";
import { CanvasContext } from "../..";
import { SketchPicker } from "react-color";


export function BackgroundColor(){
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
