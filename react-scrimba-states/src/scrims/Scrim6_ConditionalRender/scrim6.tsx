import styles from '../scrim.module.css'
import { useState } from "react"

export default function Scrim6(){
  const [unreadMessages, setUnreadMessages] = useState(["1"])

  return (
    <div>
      {unreadMessages.length > 0 && <h1>You have _ unread messages!</h1>}
      {unreadMessages.length === 0 && <h1>You have no unread messages.</h1>}
    </div>
  )
}

function Scrim6_1({setup, punchline} : {setup: string, punchline:string}) {
  const [isShown, setIsShown] = useState(false)
  function handleClick(){
    setIsShown(prev=>!prev)
  }

  return (
    <div>
      {setup && <h3>{setup}</h3>}
      {isShown && <h3>{punchline}</h3>}
      <hr />
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

