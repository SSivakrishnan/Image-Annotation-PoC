import { useStore } from "../../store"
export const Pen = () => {
  let fc = useStore((state)=>state.fabricCanvas);

  function draw(){
    console.info('===> drawing')
    useStore.getState().setFabricCanvas({
      isDrawingMode:true
    })
  }

  return (
    <button onClick={draw}>Pen</button>
  )
}