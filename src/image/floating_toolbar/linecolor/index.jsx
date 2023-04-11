import { useState,useContext } from "react";
import { CanvasContext } from "../..";
import { SketchPicker } from "react-color";


export function LineColor(){
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