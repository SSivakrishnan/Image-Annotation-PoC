import { Arrow } from "./arrow/arrow"
import { Line } from "./arrow/line"
import { Pen } from "./pen"
import { Circle } from "./shapes/circle"
import { Square } from "./shapes/square"
import { Textbox } from "./textbox"

export const AnnotationToolbar = () =>{
  return (
    <div>
      <Pen />
      <Line/>
      <Arrow />
      <Circle />
      <Square />      
      <Textbox/>
    </div>
  )
}