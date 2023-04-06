import React from 'react'

function FloatingToolbar({objectType}) {

    const objectList = {
        pen:[<LineColor />, <LineWidth />, <Delete />],
        rect:[<FillColor />, <LineColor />, <LineWidth />, <Delete />],
        circle:[<FillColor />, <LineColor />, <LineWidth />, <Delete />],
        line:[<LineColor />, <LineWidth />, <Delete />],
        arrow:[<LineColor />, <LineWidth />, <Delete />],
        highlighter:[<LineColor />, <LineWidth />, <Delete />],
        text:[<FontSize />, <FontColor />, <BackgroundColor />, <Delete />]
    }

  return (
    <div>
        {
            objectList[objectType].map(comp => (
                <>{comp}</>
            ))
        }
    </div>
  )
}

export default FloatingToolbar

function LineColor(){
    return <button>LineColor</button>
}
function LineWidth(){
    return <button>LineWidth</button>
}
function Delete(){
    return <button>Delete</button>
}
function FillColor(){
    return <button>FillColor</button>
}
function FontSize(){
    return <button>FontSize</button>
}
function FontColor(){
    return <button>FontColor</button>
}
function BackgroundColor(){
    return <button>BackgroundColor</button>
}
