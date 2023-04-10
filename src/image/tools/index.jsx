import { Arrow } from "./arrow/arrow"
import { Pen } from "./pen"
import { Circle } from "./shapes/circle"
import { Square } from "./shapes/square"
import { Textbox } from "./textbox"

export const AnnotationToolbar = () =>{
  return (
    <div>
      <Pen />
      <Circle />
      <Square />
      <Arrow />
      <Textbox/>
    </div>
  )
}