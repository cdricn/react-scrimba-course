import './Main.css'

export default function Main() {

  return (
    <form className="main-form">
      <input 
        type="text"
        id="ingredient_input"
        name="ingredient_input"
        aria-label="Add ingredient"
        placeholder="e.g. oregano"
        className="ingredient_input"
      />
      <button 
        type="button"
        className="button"
      > + Add Ingredient </button>
    </form>
  )
}