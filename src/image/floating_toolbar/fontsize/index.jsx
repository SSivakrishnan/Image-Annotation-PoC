import { useState,useContext } from "react";
import { CanvasContext } from "../..";

export function FontSize(){
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