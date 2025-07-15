import './Main.css'
import { useState } from 'react'

export default function Main() {
  const [ingredients, setIngredients] = useState(Array<string>)

  function addIngredient(formData:FormData) {
    const newIngredient = formData.get("ingredient") as string;
    setIngredients(prev => [...prev, newIngredient])
  }

  return (
    <main>
      <div className='main-container'>
        <form className="main-form" action={addIngredient} >
          <input 
            type="text"
            id="ingredient"
            name="ingredient"
            aria-label="Add ingredient"
            placeholder="e.g. oregano"
            className="ingredient_input"
          />
          <button 
            type="submit"
            className="button"
          > + Add Ingredient </button>
        </form>
        <h2>Ingredients on hand:</h2>
        <ul>
          {
            ingredients.map((item, i)=>{
              return (
                <li key={i}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    </main>
  )
}