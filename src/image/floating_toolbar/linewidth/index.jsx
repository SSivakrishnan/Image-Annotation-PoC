import { useState,useContext } from "react";
import { CanvasContext } from "../..";

export function LineWidth(){
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