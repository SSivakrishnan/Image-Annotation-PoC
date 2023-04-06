import { Pen } from "./pen"
import { Circle } from "./shapes/circle"

export const AnnotationToolbar = () =>{
  return (
    <div>
      <Pen />
      <Circle />
    </div>
  )
}