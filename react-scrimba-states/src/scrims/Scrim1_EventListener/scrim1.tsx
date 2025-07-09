export default function Scrim1 () {
  function handleClick() {
    console.log("I was clicked!")
  }
  function handleEnter() {
    console.log("I was hovered!")
  }
  
  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseEnter={handleEnter}
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}