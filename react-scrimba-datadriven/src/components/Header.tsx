import './Header.css'
import { IoMdGlobe } from "react-icons/io";

export default function Header() {
  return (
    <header>
      <IoMdGlobe className='globe'/>
      <h1>my travel journal.</h1>
    </header>
  );
}