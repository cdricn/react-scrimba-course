export default function Pad({id, color, on, toggle} : {
  id: number
  color: string,
  on: boolean,
  toggle: (data: number) => void;
}) {

  function handleClick() {
    toggle(id);
  }

  return (
    <button 
      className={on ? "on" : undefined} 
      style={{backgroundColor: color}}
      onClick={handleClick}>
    </button>
  )
}