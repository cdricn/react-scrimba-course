import './Navbar.css'
import { DiReact } from "react-icons/di";

export default function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <DiReact className='nav-image'/>
        <span>ReactFacts</span>
      </nav>
    </header>
  )
}