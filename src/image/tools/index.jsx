import { Arrow } from "./arrow/arrow"
import { Pen } from "./pen"
import { Circle } from "./shapes/circle"
import { Square } from "./shapes/square"

export const AnnotationToolbar = () =>{
  return (
    <div>
      <Pen />
      <Circle />
      <Square />
      <Arrow />
    </div>
  )
}