import styles from '../scrim.module.css'
import { useState } from "react"

export default function Scrim6_2(){
  const [messages, setMessages] = useState(["1", "a"])

  function notification() {
    if (messages.length === 0) {
      return "You're all caught up!"
    }
    else if (messages.length === 1) {
      return "You have 1 unread message" 
    }
    else {
      return `You have ${messages.length} unread messages`
    }
  }

  return (
    <div>
      <h1>{notification()}</h1>
    </div>
  )
}