import React, { useContext } from 'react';
import {fabric} from 'fabric';
import { useStore } from '../../../store';
import { CanvasContext } from '../../..';

export const Line = () => {
  let {canvasRef,setModifications} = useContext(CanvasContext);

  function draw(){
    

  var line = new fabric.Line([50, 100, 200, 100], {
      left: 75,
      top: 100,
      stroke: 'red',
      objectType: "line"
  });

  
  canvasRef.current.add(line);
  setModifications()
    }
  
  return (
 <button onClick={draw}>Line</button>   
  )
}
