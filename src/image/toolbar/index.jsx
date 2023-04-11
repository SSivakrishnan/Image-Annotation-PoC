import React, { useState } from 'react'
import Redo from './redo'
import Undo from './undo'

function Toolbar() {
    const [currentMod, setCurrentMod] = useState(0)
  return (
    <div>
        <Undo currentMod={currentMod} setCurrentMod={setCurrentMod}/>
        <Redo currentMod={currentMod} setCurrentMod={setCurrentMod}/>
    </div>
  )
}

export default Toolbar