import { GiChefToque } from "react-icons/gi";
import './Header.css'

export default function Header() {

  return (
    <nav className="navbar">
      <GiChefToque className="nav-icon"/>
      <p>Chef Claude</p>
    </nav>
  )
}