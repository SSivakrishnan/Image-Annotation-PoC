import React, { useEffect, useRef, useState, useContext, Fragment } from 'react'
import { CanvasContext } from '..';
import { BackgroundColor } from './backgroundcolor';
import { Delete } from './delete';
import { FillColor } from './fillcolor';
import { FontColor } from './fontcolor';
import { FontSize } from './fontsize';
import { LineColor } from './linecolor';
import { LineWidth } from './linewidth';


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
                menuRef.current.style.top = `250px`;
                menuRef.current.style.left = `250px`;
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
          background: "white",
          padding: 10,
          gap: "0.5rem",
          position: "absolute",
          display: "none"
        }}>
        <div style={{ display:'flex'}}>{
        objectList[objectType].map((comp,i) => (
            <Fragment key={i}>{comp}</Fragment>
        ))
    }</div>
    </div>
        
    </div>
   
  )
}

export default FloatingToolbar















