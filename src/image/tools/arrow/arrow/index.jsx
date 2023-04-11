import React, { useContext } from 'react';
import {fabric} from 'fabric';
import { useStore } from '../../../store';
import { CanvasContext } from '../../..';

export const Arrow = () => {
  let {canvasRef,setModifications} = useContext(CanvasContext);

  function draw(){
    var triangle = new fabric.Triangle({
      width: 10, 
      height: 15, 
      fill: 'red', 
      left: 235, 
      top: 65,
      angle: 90,
      objectType: "triangle"
  });

  var line = new fabric.Line([50, 100, 200, 100], {
      left: 75,
      top: 70,
      stroke: 'red',
      objectType: "line"
  });

  var objs = [line, triangle];

  var alltogetherObj = new fabric.Group(objs);
  canvasRef.current.add(alltogetherObj);
  setModifications()
  
    
  }
  return (
 <button onClick={draw}>Arrow</button>   
  )
}