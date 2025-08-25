import pads from './pads'
import Pad from './pad'
import './scrim9.css'
import { useState } from 'react'

interface Pads {
  id: number,
  color: string,
  on: boolean
}

export default function Scrim9({darkMode} : {darkMode: boolean}) {
  const [padsArr, setPadsArr] = useState<Pads[]>(pads)

  function toggle(data: number) {
    setPadsArr((prevArr)=>
      prevArr.map((item)=>{
        return item.id === data ? {...item, on: !item.on} : item
      })
    )
  }

  function renderButtons() {
    return (
      pads.map((_, index)=>{
        return (
        <Pad key={padsArr[index].id}
          id={padsArr[index].id}
          color={padsArr[index].color} 
          on={padsArr[index].on}
          toggle={toggle}/>
      )})
    )
  }

  const bgColor = {
    backgroundColor: darkMode ? '#222222' : '#cccccc'
  }

  return (
    <main style={bgColor}>
      <div className="pad-container">
        {renderButtons()}
      </div>
    </main>
  )
}
