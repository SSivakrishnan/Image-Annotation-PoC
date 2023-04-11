import { useState,useContext } from "react";
import { CanvasContext } from "../..";

export function Delete({menuRef}){
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