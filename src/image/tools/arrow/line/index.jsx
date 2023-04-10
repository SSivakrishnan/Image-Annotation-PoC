import React from 'react';
import {fabric} from 'fabric';
import { useStore } from '../../../store';

export const Line = () => {
  let ref = useStore((state)=>state.fabricCanvasRef);

  function draw(){
    

  var line = new fabric.Line([50, 100, 200, 100], {
      left: 75,
      top: 100,
      stroke: 'red',
      objectType: "line"
  });

  
  ref.current.add(line);
    }
  
  return (
 <button onClick={draw}>Line</button>   
  )
}
